import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const Header = ({ loggedInUser, setUser }) => {

  const authData = useContext(AuthContext)

  let username = "";
  if(loggedInUser.role === "admin") username = "admin";
  else if(loggedInUser.role === "employee") {
    username = loggedInUser.employee.firstName;
  }

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    setUser(null);
  }

  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello, <br /> <span className='text-3xl font-semibold'>{username} 👋</span></h1>
        <button onClick={handleLogout} className='bg-red-500 hover:bg-red-700 text-xl text-white font-bold py-2 px-4 rounded cursor-pointer active:scale-95'>
          Log Out
        </button>
    </div>
  )
}

export default Header