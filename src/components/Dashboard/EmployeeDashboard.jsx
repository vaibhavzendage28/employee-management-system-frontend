import React from 'react'
import Header from '../Others/Header'
import TaskListNumbers from '../Others/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({ loggedInUser, setUser }) => {

  return (
    <div className='h-screen w-screen p-10 bg-[#1C1C1C]'>
      <Header loggedInUser={loggedInUser} setUser={setUser}/>
      <TaskListNumbers loggedInUser={loggedInUser}/>
      <TaskList loggedInUser={loggedInUser}/>
    </div>
  )
}

export default EmployeeDashboard