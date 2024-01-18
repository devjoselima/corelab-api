import { describe, beforeEach, it, expect } from "vitest";

import { InMemoryUpdateTaskRepository } from "../../repositories/in-memory/in-memory-task-repository";
import { UpdateTaskUseCase } from "../update-task";
import { randomUUID } from "crypto";

let updateTaskRepository: InMemoryUpdateTaskRepository;
let sut: UpdateTaskUseCase;

describe("Update Task Use Case", () => {
    beforeEach(() => {
        updateTaskRepository = new InMemoryUpdateTaskRepository();

        sut = new UpdateTaskUseCase(updateTaskRepository);
    });

    it("should be able to update a task", async () => {
        const oldTask = {
            id: randomUUID(),
            title: "Estudar Javascript",
            description: "Estudar javascript de segunda a sexta",
            color: "blue",
            isFavorited: false,
        };

        updateTaskRepository.tasks.push(oldTask);

        const updatedTask = sut.execute({
            taskId: oldTask.id,
            title: "Novo titulo",
        });

        await expect(updatedTask).not.toEqual(oldTask);
    });
});
