"use client";

import Button, { ButtonSettings } from "./Button";

interface TaskItemProps {
  task: string;
  active: boolean;
  toggleActive: () => void;
  removeTask: () => void;
}

export default function TaskItem({
  task,
  active,
  toggleActive,
  removeTask
}: TaskItemProps) {
  return (
    <section className="flex gap-3 mt-5 w-7/10 md:w-2/5 justify-center items-center font-medium">
      <div
        className={`py-3 px-2 rounded w-full cursor-pointer transition-all ${
          active ? "bg-blue-800 hover:bg-blue-950" : "bg-blue-950 line-through"
        }`}
        onClick={toggleActive}
      >
        {task}
      </div>
      <Button
        background={ButtonSettings.red}
        onClick={(e) => {
          e.stopPropagation();
          removeTask();
        }}
      >
        Delete
      </Button>
    </section>
  );
}
