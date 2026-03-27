import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./context/AuthProvider.jsx";

const App = () => {

  const [user, setUser] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null)

  const [authData, flag, setFlag] = useContext(AuthContext);

  useEffect(() => {
    if (authData) {
      if (authData.loggedInUser) {
        setUser(authData.loggedInUser.role);
        setLoggedInUser(authData.loggedInUser);
      }
    }
  }, [authData]);


  const handleLogin = (email, password) => {
    if (authData) {
      const admin = authData.admins.find((admin) => admin.email === email && admin.password === password);
      if (admin) {
        setUser("admin");
        localStorage.setItem("loggedInUser", JSON.stringify({ admin, role: "admin" }));
        setLoggedInUser({ admin, role: "admin" });
      } else {
        const employee = authData.employees.find((employee) => employee.email === email && employee.password === password);
        if (employee) {
          setUser("employee");
          localStorage.setItem("loggedInUser", JSON.stringify({ employee, role: "employee" }));
          setLoggedInUser({ employee, role: "employee" });
        } else {
          alert("Invalid credentials");
        }
      }
    } 
  };

  return (
    <div className="bg-black text-white h-screen w-screen">
      {!user || !loggedInUser ? <Login handleLogin={handleLogin} /> : ""}
      {user === "employee" ? <EmployeeDashboard loggedInUser={loggedInUser} setUser={setUser} /> : ""}
      {user === "admin" ? <AdminDashboard loggedInUser={loggedInUser} setUser={setUser} flag={flag} setFlag={setFlag} /> : ""}
    </div>
  );
};

export default App;
