import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import validator from "validator";

import { makeDeleteTaskUseCase } from "@/use-cases/factories";

export const deleteTaskController = async (
    request: FastifyRequest,
    reply: FastifyReply
) => {
    const taskBodySchema = z.object({
        taskId: z.string(),
    });

    const { taskId } = taskBodySchema.parse(request.params);

    try {
        const deleteTaskUseCase = makeDeleteTaskUseCase();

        const isIdValid = validator.isUUID(taskId);

        if (!isIdValid) {
            return reply.status(404).send({ message: "Id is not valid" });
        }

        const deletedTask = await deleteTaskUseCase.execute({
            taskId,
        });

        return reply.status(200).send(deletedTask);
    } catch (error) {
        reply.status(404).send({ message: "Id is not found" });
    }
};
