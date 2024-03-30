import { Fragment } from "react";
import bgImg from "../assets/images/Home/bg-img.png"
import Navbar from "../components/Navbar";
import { FaQuoteLeft } from "react-icons/fa6";
import { FaQuoteRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Home = () => {
    // const { user } = useContext(UserContext);
    // console.log(user, "User Data");
    return (
        <Fragment>
            <div className="w-full h-[80vh] bg-cover bg-top bg-no-repeat" style={{ backgroundImage: `url(${bgImg})` }}>
                <Navbar />
                <div className="text-center flex items-center justify-center flex-col h-[75vh] gap-7 w-full">
                    <h2 className="text-[2.5rem] font-bold text-[#532A79] overflow-y-hidden ">Reunion Event Management Platform</h2>
                 <p className="-mt-3">
                 Seamlessly coordinate every detail of your reunion event with our intuitive platform, <br /> from guest invitations to activity planning, all in one place.
                 </p>
                    
                    <div className="px-16  flex py-6 items-center backdrop-opacity-10 backdrop-blur-sm bg-white/30 w-[50vw] rounded-tl-full rounded-br-full mx-auto h-[20vh]">
                        <FaQuoteLeft className="text-secondary text-2xl" />
                        <p>
                            Through the lens of reunion programs, we add another chapter to the story of our lives, celebrating the bonds forged in the hallowed halls of our alma mater. 
                        </p>
                            <FaQuoteRight className="text-secondary text-2xl" />
                    </div>


                   <Link to={'/events'}> <button className="actionBtn w-[220px] !bg-secondary !text-white">Explore All</button></Link>
                </div>

            </div>
        </Fragment>


    );
};

export default Home;