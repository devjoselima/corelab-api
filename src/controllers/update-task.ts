import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

import { makeUpdateTaskUseCase } from "@/use-cases/factories/";
import {
    ParamsProps,
    validateFieldsIsNotAllowed,
    validateFieldsNotEmpty,
} from "./utils";

export const updateTaskController = async (
    request: FastifyRequest,
    reply: FastifyReply
) => {
    const createTaskInParamsSchema = z.object({
        taskId: z.string().uuid(),
    });

    const updateTaskBodySchema = z.object({
        title: z.string().optional(),
        description: z.string().optional(),
        color: z.string().optional(),
        isFavorited: z.boolean().optional(),
    });

    const params = request.body;

    const { taskId } = createTaskInParamsSchema.parse(request.params);

    const { title, description, color, isFavorited } =
        updateTaskBodySchema.parse(params);

    try {
        const updatedTaskUseCase = makeUpdateTaskUseCase();

        const someFieldIsNotAllowed = validateFieldsIsNotAllowed(
            params as ParamsProps
        );

        if (someFieldIsNotAllowed) {
            return reply
                .status(400)
                .send({ message: "Some provided field is not allowed" });
        }

        const fieldIsEmpty = validateFieldsNotEmpty(params as ParamsProps);

        console.log(fieldIsEmpty);

        if (fieldIsEmpty) {
            return reply.status(400).send({ message: "Field can't be empty" });
        }

        const { updatedTask } = await updatedTaskUseCase.execute({
            taskId,
            title,
            description,
            color,
            isFavorited,
        });

        if (!updatedTask) {
            return reply.status(404).send({ message: "Task not found" });
        }

        return reply.status(200).send({ updatedTask });
    } catch (error) {
        console.log(error);
        return reply.status(500).send({ message: "Internal Server Error" });
    }
};
