import React from "react";

const FailedTaskList = ({task}) => {
  return (
    <div className="h-full w-[330px] bg-red-400 rounded-xl shrink-0 p-5">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 px-2 py-1 rounded-md text-sm">{task.category}</h3>
        <h4 className="text-sm">{task.date}</h4>
      </div>
      <h2 className="mt-10 text-2xl font-semibold">
        {task.title}
      </h2>
      <p className="text-md font-medium mt-5">
        {task.description}
      </p>
      <div className="mt-5 flex justify-center">
        <button className="bg-red-500 text-white px-4 py-2 rounded-md">
          Failed
        </button>
      </div>
    </div>
  );
};

export default FailedTaskList;
