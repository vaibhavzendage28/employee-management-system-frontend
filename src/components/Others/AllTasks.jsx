import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import EmployeeSummary from "./EmployeeSummary";

const AllTasks = () => {
  const [authData] = useContext(AuthContext);

  return (
    <div id="all-tasks" className="px-10 py-5 bg-[#1C1C1C] rounded mt-5">
      <div className="bg-red-400 mt-5 mb-2 py-2 px-6 flex justify-between rounded text-xl font-medium">
        <h2 className="w-1/5 italic">Employee Name</h2>
        <h3 className="w-1/5 text-center italic">New Tasks</h3>
        <h3 className="w-1/5 text-center italic">Accepted Tasks</h3>
        <h3 className="w-1/5 text-center italic">Completed Tasks</h3>
        <h3 className="w-1/5 text-center italic">Failed Tasks</h3>
      </div>
      <div>
        {authData.employees.map((employee, idx) => {
          return <EmployeeSummary employee={employee} key={idx} />;
        })}
      </div>
    </div>
  );
};

export default AllTasks;
