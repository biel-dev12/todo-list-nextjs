"use client";

import Header from "@/components/Header";
import TaskForm, { Task } from "@/components/TaskForm";
import TaskItem from "@/components/TaskItem";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks")
    if(savedTasks) {
      setTasks(JSON.parse(savedTasks))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])


  const toggleTaskActive = (id: string) => {
    setTasks((prevTask) =>
      prevTask.map((task) =>
        task.id === id ? { ...task, active: !task.active } : task
      )
    );
  };

  const removeTask = (id: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const sortedTasks = [...tasks].sort((a, b) => {
    if (a.active === b.active) return 0;
    if (a.active && !b.active) return -1;
    if (!a.active && b.active) return 1;
    return 0
  });

  return (
    <div className="flex flex-col items-center mt-10">
      <Header />
      <TaskForm setTasksState={setTasks} tasksState={tasks} />
      {sortedTasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task.taskDesc}
          active={task.active}
          toggleActive={() => toggleTaskActive(task.id)}
          removeTask={() => removeTask(task.id)}
        />
      ))}
    </div>
  );
}
