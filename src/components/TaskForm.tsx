'use client'

import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Button, { ButtonSettings } from "./Button";

export interface Task {
  id: string
  taskDesc: string
  active: boolean
}

interface TaskFormProps {
  setTasksState: React.Dispatch<React.SetStateAction<Task[]>>
  tasksState: Task[]
}

export default function TaskForm({setTasksState, tasksState}: TaskFormProps) {
  const [taskInput, setTaskInput] = useState("")

  const createTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (taskInput.trim() === "") return

    const newTask = {id: uuidv4(), taskDesc: taskInput.trim(), active: true} 
  
    setTasksState([...tasksState, newTask])
    setTaskInput("")
  }

  return (
    <form className="flex gap-3 items-center justify-center w-full font-medium" onSubmit={createTask}>
      <label htmlFor="task" className="">Task:</label>
      <input
        type="text"
        id="task"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        className="
          px-2
          py-3
          border
          border-gray-300
          rounded
          focus:outline-none
          focus:border-green-500
          w-70 sm:w-100 lg:w-120"
      />
      <Button background={ButtonSettings.green}>+ Add</Button>
    </form>
  );
}
