import {
    InMemoryCreateTaskRepository,
    InMemoryGetTaskRepository,
} from "../../repositories/in-memory/in-memory-task-repository";
import { GetTasksUseCase } from "../get-task";

import { beforeEach, describe, expect, it } from "vitest";

let getTaskRepository: InMemoryGetTaskRepository;
let createTaskRepository: InMemoryCreateTaskRepository;

let sut: GetTasksUseCase;

describe("Get Task Use Case", () => {
    beforeEach(() => {
        createTaskRepository = new InMemoryCreateTaskRepository();
        getTaskRepository = new InMemoryGetTaskRepository(createTaskRepository);

        sut = new GetTasksUseCase(getTaskRepository);
    });

    it("should be able to get all tasks", async () => {
        const tasksList = [];
        const task1 = await createTaskRepository.execute({
            id: "9f4c42dc-38d3-43fe-8bc7-4eff1866c9c4",
            title: "Estudar javascript",
            description: "estudar javascript durante a semana",
            color: "blue",
            isFavorited: false,
        });

        const task2 = await createTaskRepository.execute({
            id: "9f4c42dc-38d3-43fe-8bc7-4eff1866c9c5",
            title: "Ler um livro sobre arquitetura",
            description: "manter uma leitura diaria",
            color: "blue",
            isFavorited: false,
        });

        tasksList.push(task1);
        tasksList.push(task2);

        const { tasks } = await sut.execute();

        expect(tasks).toHaveLength(2);
    });
});
