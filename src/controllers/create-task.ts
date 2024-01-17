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
    });

    const { title, description, color } = taskBodySchema.parse(request.body);

    try {
        const createTaskUseCase = makeCreateTaskUseCase();

        await createTaskUseCase.execute({
            title,
            description,
            color,
        });
    } catch (error) {
        console.log(error);
        throw new Error();
    }

    return reply.status(201).send;
};
