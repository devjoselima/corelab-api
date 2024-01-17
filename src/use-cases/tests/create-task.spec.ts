import { expect, describe, it, beforeEach } from "vitest";

import { InMemoryCreateTaskRepository } from "../../repositories/in-memory/in-memory-task-repository";

import { CreateTaskUseCase } from "../create-task";

let createTaskRepository: InMemoryCreateTaskRepository;
let sut: CreateTaskUseCase;

describe("Create Task Use Case", () => {
    beforeEach(() => {
        createTaskRepository = new InMemoryCreateTaskRepository();

        sut = new CreateTaskUseCase(createTaskRepository);
    });

    it("should be able to create a task", async () => {
        const { task } = await sut.execute({
            title: "Estudar typescript",
            description: "Estudar typescript durante 3 horas todos os dias",
            color: "blue",
            isFavorited: false,
        });

        await expect(task.id).toEqual(expect.any(String));
    });
});
