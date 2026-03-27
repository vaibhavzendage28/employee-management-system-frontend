import React, { useEffect, useState } from "react";

const CreateTask = ({flag, setFlag}) => {

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [taskCategory, setTaskCategory] = useState("");
  const [taskDescrption, setTaskDescription] = useState("");

  const [task, setTask] = useState(null);

  useEffect(()=>{
    if(task){
      const employeesData = JSON.parse(localStorage.getItem("employees"));
      const employee = employeesData.find((emp) => {
        return emp.firstName === assignTo;
      });
      if(employee){
        employee.taskCounts.newTask += 1;
        employee.tasks.push(task);
        localStorage.setItem("employees", JSON.stringify(employeesData));
        console.log('Task added to employee:', employee);
        // Clear form fields after submission
        setTaskTitle('');
        setTaskDate('');
        setAssignTo('');
        setTaskCategory('');
        setTaskDescription('');
        // Optionally, you can also reset the task state
        setTask(null);

        // Toggle flag to trigger re-render in parent component
        setFlag(prevFlag => !prevFlag);
      } else {
        console.log('Employee not found for assignment:', assignTo);
      }
    }
  }, [task])

  const handleSubmit = (e) => {
    e.preventDefault();

    setTask({
      title: taskTitle,
      description: taskDescrption,
      date: taskDate,
      category: taskCategory,
      active: false,
      newTask: true,
      completed: false,
      failed: false
    })

    // setTaskTitle('');
    // setTaskDate('');
    // setAssignTo('');
    // setTaskCategory('');
    // setTaskDescription('');
  };

  return (
    <div>
      <form className="w-full flex p-10 gap-10 bg-[#1C1C1C] rounded-lg mt-5" onSubmit={handleSubmit}>
        <div className="w-1/2 flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <h3>Task Title</h3>
            <input
              type="text"
              placeholder="Enter Task Title"
              className="w-1/2 border border-gray-300 px-2 py-1 rounded-sm"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-2">
            <h3>Date</h3>
            <input
              type="date"
              className="w-1/2 cursor-pointer border border-gray-300 px-2 py-1 rounded-sm"
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <h3>Assign To</h3>
            <input
              type="text"
              placeholder="Enter Employee Name"
              className="w-1/2 border border-gray-300 px-2 py-1 rounded-sm"
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <h3>Category</h3>
            <input
              type="text"
              placeholder="Enter Category design, development, etc."
              className="w-1/2 border border-gray-300 px-2 py-1 rounded-sm"
              value={taskCategory}
              onChange={(e) => setTaskCategory(e.target.value)}
            />
          </div>
        </div>
        <div className="w-1/2 flex flex-col gap-5 justify-center">
          <h3>Task Description</h3>
          <textarea
            className="w-3/4 h-1/2 border border-gray-300 px-2 py-1 rounded"
            name="taskDescription"
            id=""
            placeholder="Enter Task Description"
            value={taskDescrption}
            onChange={(e) => setTaskDescription(e.target.value)}
          ></textarea>
          <button
            type="submit"
            className="w-3/4 bg-blue-500 text-white px-4 py-2 rounded-sm hover:bg-blue-600 transition-colors active:scale-99 cursor-pointer"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
