import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import AdminDashboard from "./AdminDashboard";
import UserDashboard from "./UserDashboard";



const Dashboard = () => {
    const { user } = useContext(UserContext)
    console.log("User ", user)
    return (
        <div>
            <div className="h-[100dvh]">
             {
                user?.name==="admin" ? <AdminDashboard/>:<UserDashboard/>
             }
            </div>
        </div>
    );
};

export default Dashboard;