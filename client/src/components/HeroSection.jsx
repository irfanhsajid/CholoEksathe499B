import { Fragment } from "react";
import bgImg from "../assets/images/Home/bg-img.png"
import { FaQuoteLeft } from "react-icons/fa6";
import { FaQuoteRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { SiWpexplorer } from "react-icons/si";


const HeroSection = () => {
    // const { user } = useContext(UserContext);
    // console.log(user, "User Data");
    return (
        <Fragment>
            <div className="w-full -mt-[50px] h-[100vh] bg-cover bg-top bg-no-repeat overflow-hidden" style={{ backgroundImage: `url(${bgImg})` }}>
                {/* <MainNav/> */}
                <div className="text-center mt-16 flex items-center justify-center flex-col min-h-[60vh] gap-7 w-full">
                    <h2 className="text-[3rem] font-bold text-[#532A79]">Let&apos;s &nbsp;<span className="text-secondary text-[4.5rem] !font-dancing">Connect</span> <br /> <span className="text-[4rem] text-secondary !font-dancing">The DOTs</span>&nbsp; Again...</h2>
                    <h2 className="text-[3rem] font-medium text-[#532A79] overflow-y-hidden !font-dancing -mt-3"> A Bangladeshi Reunion Event Management Platform</h2>
                    {/* <p className="-mt-3">
                        Seamlessly coordinate every detail of your reunion event with our intuitive platform, <br /> from guest invitations to activity planning, all in one place.
                    </p> */}

                    <div  className="px-16 flex text-center py-6 items-center backdrop-opacity-10 backdrop-blur-sm bg-white/30 w-[50vw] rounded-tl-full rounded-br-full mx-auto h-[20vh]">
                        <FaQuoteLeft className="text-secondary text-2xl" />
                        <p>
                            Through the lens of reunion programs, we add another chapter to the story of our lives, celebrating the bonds forged in the hallowed halls of our alma mater.
                        </p>
                        <FaQuoteRight className="text-secondary text-2xl" />
                    </div>
                    <Link to={'/events'} className="flex items-center justify-center mt-8"> <button className="flex items-center justify-center w-[220px] gap-2 mx-auto actionBtn z-10 absolute animate-bounce hover:animate-none transition-all !bg-secondary !text-white shadow-lg"> <SiWpexplorer className="text-xl !text-white" /> Explore All Events</button></Link>
                </div>
            </div>
        </Fragment>


    );
};

export default HeroSection;