import { expect, describe, it, beforeEach } from "vitest";

import {
    InMemoryCreateTaskRepository,
    InMemoryDeleteTaskRepository,
} from "../../repositories/in-memory/in-memory-task-repository";

import { DeleteTaskUseCase } from "../delete-task";

let deleteTaskRepository: InMemoryDeleteTaskRepository;
let createTaskRepository: InMemoryCreateTaskRepository;

let sut: DeleteTaskUseCase;

describe("Delete Task Use Case", () => {
    beforeEach(() => {
        createTaskRepository = new InMemoryCreateTaskRepository();
        deleteTaskRepository = new InMemoryDeleteTaskRepository(
            createTaskRepository
        );

        sut = new DeleteTaskUseCase(deleteTaskRepository);
    });

    it("should be able to delete a task", async () => {
        const taskToDelete = await createTaskRepository.execute({
            id: "9f4c42dc-38d3-43fe-8bc7-4eff1866c9c4",
            title: "teste",
            description: "testando",
            color: "blue",
            isFavorited: false,
        });

        const { deletedTask } = await sut.execute({
            taskId: "9f4c42dc-38d3-43fe-8bc7-4eff1866c9c4",
        });

        await expect(deletedTask.id).toEqual(taskToDelete.id);
    });
});
