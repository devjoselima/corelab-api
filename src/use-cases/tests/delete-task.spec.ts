import { expect, describe, it, beforeEach } from "vitest";

import {
    InMemoryCreateTaskRepository,
    InMemoryDeleteTaskRepository,
} from "../../repositories/in-memory/in-memory-task-repository";

import { DeleteTaskUseCase } from "../delete-task";
import { randomUUID } from "crypto";

let deleteTaskRepository: InMemoryDeleteTaskRepository;
let createTaskRepository: InMemoryCreateTaskRepository;

let sut: DeleteTaskUseCase;

describe("Delete Task Use Case", () => {
    beforeEach(() => {
        createTaskRepository = new InMemoryCreateTaskRepository();
        deleteTaskRepository = new InMemoryDeleteTaskRepository();

        sut = new DeleteTaskUseCase(deleteTaskRepository);
    });

    it("should be able to delete a task", async () => {
        const taskToDelete = {
            id: randomUUID(),
            title: "teste",
            description: "testando",
            color: "blue",
            isFavorited: false,
        };

        deleteTaskRepository.tasks.push(taskToDelete);

        const { deletedTask } = await sut.execute({
            taskId: taskToDelete.id,
        });

        await expect(deletedTask?.id).toEqual(taskToDelete.id);
    });

    it("should not be able to delete a task", async () => {
        const taskToDelete = {
            id: randomUUID(),
            title: "Task que deve ser deletada",
            description: "Esta task deve ser deletada",
            color: "blue",
            isFavorited: false,
        };

        const wrongTaskDelete = {
            id: randomUUID(),
            title: "Task que não deve ser deletada",
            description: "Esta task não deve ser deletada",
            color: "blue",
            isFavorited: false,
        };

        deleteTaskRepository.tasks.push(taskToDelete);
        deleteTaskRepository.tasks.push(wrongTaskDelete);

        const { deletedTask } = await sut.execute({
            taskId: taskToDelete.id,
        });

        await expect(deletedTask?.id).not.toEqual(wrongTaskDelete.id);
    });
});
