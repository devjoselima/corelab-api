import { randomUUID } from "crypto";
import { InMemoryGetTaskRepository } from "../../repositories/in-memory/in-memory-task-repository";
import { GetTasksUseCase } from "../get-task";

import { beforeEach, describe, expect, it } from "vitest";

let getTaskRepository: InMemoryGetTaskRepository;

let sut: GetTasksUseCase;

describe("Get Task Use Case", () => {
    beforeEach(() => {
        getTaskRepository = new InMemoryGetTaskRepository();

        sut = new GetTasksUseCase(getTaskRepository);
    });

    it("should be able to get all tasks", async () => {
        const task1 = {
            id: randomUUID(),
            title: "Estudar javascript",
            description: "estudar javascript durante a semana",
            color: "blue",
            isFavorited: false,
        };

        const task2 = {
            id: randomUUID(),
            title: "Ler um livro sobre arquitetura",
            description: "manter uma leitura diaria",
            color: "blue",
            isFavorited: false,
        };

        getTaskRepository.tasks.push(task1);
        getTaskRepository.tasks.push(task2);

        const { tasks } = await sut.execute();

        expect(tasks).toHaveLength(2);
    });
});
