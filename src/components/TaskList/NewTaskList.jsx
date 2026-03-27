import React from "react";

const NewTaskList = ({task}) => {
  return (
    <div className="h-full w-[330px] bg-blue-400 rounded-xl shrink-0 p-5">
      <div className="flex justify-between items-center">
        <h3 className="bg-blue-600 px-2 py-1 rounded-md text-sm">{task.category}</h3>
        <h4 className="text-sm">{task.date}</h4>
      </div>
      <h2 className="mt-10 text-2xl font-semibold">
        {task.title}
      </h2>
      <p className="text-md font-medium mt-5">
        {task.description}
      </p>
      <div className="mt-5 flex items-center justify-center gap-5">
        <button className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 cursor-pointer active:scale-99">
          Accept Task
        </button>
      </div>
    </div>
  );
};

export default NewTaskList;
