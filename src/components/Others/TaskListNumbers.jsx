import React from "react";

const TaskListNumbers = ({ loggedInUser }) => {
  return (
    <div className="flex gap-10 mt-10 w-full">
      <div className="w-[30%] bg-blue-400 rounded-xl px-5 py-10 flex flex-col items-start gap-2">
        <h2 className="text-3xl font-bold">{loggedInUser?.employee?.taskCounts?.newTask}</h2>
        <h3 className="text-xl font-semibold">New Tasks</h3>
      </div>

      <div className="w-[30%] bg-yellow-400 rounded-xl px-5 py-10 flex flex-col items-start gap-2">
        <h2 className="text-3xl font-bold">
          {loggedInUser?.employee?.taskCounts?.active}
        </h2>
        <h3 className="text-xl font-semibold">Accepted Tasks</h3>
      </div>

      <div className="w-[30%] bg-green-400 rounded-xl px-5 py-10 flex flex-col items-start gap-2">
        <h2 className="text-3xl font-bold">
          {loggedInUser?.employee?.taskCounts?.completed}
        </h2>
        <h3 className="text-xl font-semibold">Completed Tasks</h3>
      </div>

      <div className="w-[30%] bg-red-400 rounded-xl px-5 py-10 flex flex-col items-start gap-2">
        <h2 className="text-3xl font-bold">
          {loggedInUser?.employee?.taskCounts?.failed}
        </h2>
        <h3 className="text-xl font-semibold">Failed Tasks</h3>
      </div>
    </div>
  );
};

export default TaskListNumbers;
