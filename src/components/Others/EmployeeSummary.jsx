import React from "react";

const EmployeeSummary = ({employee}) => {
  return (
    <div className="border border-red-400 mb-2 py-2 px-6 flex justify-between rounded text-lg font-medium">
      <h2 className="w-1/5">{employee.firstName}</h2>
      <h3 className="w-1/5 text-center text-blue-400">{employee.taskCounts.newTask}</h3>
      <h3 className="w-1/5 text-center text-yellow-400">{employee.taskCounts.active}</h3>
      <h3 className="w-1/5 text-center text-green-400">{employee.taskCounts.completed}</h3>
      <h3 className="w-1/5 text-center text-red-400">{employee.taskCounts.failed}</h3>
    </div>
  );
};

export default EmployeeSummary;
