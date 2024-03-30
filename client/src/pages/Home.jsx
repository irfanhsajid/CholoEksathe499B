import { useContext } from "react";
import { UserContext } from "../context/userContext";
import Navbar from "../shared/navbar";

const Home = () => {
    const { user } = useContext(UserContext);
    if (!user) return (
        <div>
            <h1 className="text-9xl text-red-400">Welcome To TechForing!</h1>
            <Navbar/>
        </div>
    );
};

export default Home;