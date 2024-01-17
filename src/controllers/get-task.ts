import { FastifyReply, FastifyRequest } from "fastify";

import { makeGetTaskUseCase } from "@/use-cases/factories";

export const getTaskController = async (
    request: FastifyRequest,
    reply: FastifyReply
) => {
    try {
        const getTaskUseCase = makeGetTaskUseCase();

        const tasks = await getTaskUseCase.execute();

        return reply.status(200).send(tasks);
    } catch (error) {
        console.error(error);
        throw new Error();
    }
};
