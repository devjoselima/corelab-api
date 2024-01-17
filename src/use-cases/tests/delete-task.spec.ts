import { expect, describe, it, beforeEach } from "vitest";

import {
    InMemoryCreateTaskRepository,
    InMemoryDeleteTaskRepository,
} from "../../repositories/in-memory/in-memory-task-repository";

import { DeleteTaskUseCase } from "../delete-task";
import { CreateTaskUseCase } from "../create-task";

let deleteTaskRepository: InMemoryDeleteTaskRepository;
let createTaskRepository: InMemoryCreateTaskRepository;

let createTaskUseCase: CreateTaskUseCase;
let sut: DeleteTaskUseCase;

describe("Delete Task Use Case", () => {
    beforeEach(() => {
        createTaskRepository = new InMemoryCreateTaskRepository();
        deleteTaskRepository = new InMemoryDeleteTaskRepository();

        createTaskUseCase = new CreateTaskUseCase(createTaskRepository);
        sut = new DeleteTaskUseCase(deleteTaskRepository);
    });

    it("should be able to delete a task", async () => {
        const task = await sut.execute({
            taskId: "9f4c42dc-38d3-43fe-8bc7-4eff1866c9c4",
        });

        console.log(task);

        await expect(task).toEqual(undefined);
    });
});
