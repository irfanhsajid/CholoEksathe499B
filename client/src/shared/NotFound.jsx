import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";


const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className="h-screen flex items-center justify-center flex-col">
            <div className="border border-red-500 border-dashed p-4 w-1/2 h-[40vh] mx-auto flex items-center justify-center rounded-xl">
                <p className="text-center animate-bounce text-secondary">The Page You&apos;re looking for is not found !</p>
            </div>
            
            <button onClick={() => navigate('/dashboard')} className=' py-1 flex mx-auto my-4 items-center justify-center w-[15%] gap-1 border-secondary'>
                <IoArrowBackCircleOutline className='text-secondary text-2xl hover:-translate-x-1 transition-all animate-pulse' />
                Go Back
            </button>
        </div>
    );
};

export default NotFound;