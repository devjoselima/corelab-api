import { makeCreateTaskUseCase } from "@/use-cases/factories/make-create-task";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export const createTaskController = async (
    request: FastifyRequest,
    reply: FastifyReply
) => {
    const taskBodySchema = z.object({
        title: z.string(),
        description: z.string(),
        color: z.string(),
        isFavorited: z.boolean().default(false),
    });

    const { title, description, color, isFavorited } = taskBodySchema.parse(
        request.body
    );

    try {
        const createTaskUseCase = makeCreateTaskUseCase();

        const createdTask = await createTaskUseCase.execute({
            title,
            description,
            color,
            isFavorited,
        });
        return reply.status(201).send(createdTask);
    } catch (error) {
        console.log(error);
        throw new Error();
    }
};
