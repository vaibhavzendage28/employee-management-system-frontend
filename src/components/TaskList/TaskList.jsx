import React from 'react'
import NewTaskList from './NewTaskList'
import FailedTaskList from './FailedTaskList'
import AcceptedTaskList from './AcceptedTaskList'
import CompleteTaskList from './CompleteTaskList'

const TaskList = ({loggedInUser}) => {
  return (
    <div id="task-list" className='w-full h-[55%] mt-10 rounded-xl py-5 flex items-center justify-start flex-nowrap gap-10 overflow-x-auto'>
      {
        loggedInUser.employee.tasks.map((task, idx)=>{
          if(task.newTask) return <NewTaskList key={idx} task={task}/>
          else if(task.active) return <AcceptedTaskList key={idx} task={task}/>
          else if(task.completed) return <CompleteTaskList key={idx} task={task}/>
          else if(task.failed) return <FailedTaskList key={idx} task={task}/>
        })
      }
    </div>
  )
}

export default TaskList