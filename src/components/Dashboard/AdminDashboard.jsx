import React from 'react'
import Header from '../Others/Header'
import CreateTask from '../Others/CreateTask'
import AllTasks from '../Others/AllTasks'

const AdminDashboard = ({loggedInUser, setUser, flag, setFlag}) => {
  return (
    <div id='admin-dashboard' className='h-screen w-screen p-10 bg-black overflow-auto'>
        <Header loggedInUser={loggedInUser} setUser={setUser}/>
        <CreateTask loggedInUser={loggedInUser} flag={flag} setFlag={setFlag}/>
        <AllTasks loggedInUser={loggedInUser} flag={flag} setFlag={setFlag}/>
    </div>
  )
}

export default AdminDashboard