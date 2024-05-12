import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import AdminDashboard from "./AdminDashboard";
import UserDashboard from "./UserDashboard";
import MainNav from "../../components/MainNav";


const Dashboard = () => {
    const { user } = useContext(UserContext)
    console.log("User ", user)
    return (
        <div>
            <MainNav/>
            <div className="h-[100dvh]">
             {
                user?.name==="admin" ? <AdminDashboard/>:<UserDashboard/>
             }
            </div>
        </div>
    );
};

export default Dashboard;