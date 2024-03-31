
import img1 from './images/img-1.png';
import img2 from './images/img-2.png';
import img3 from './images/img-3.png';
import school from './images/school.png';
import college from './images/college.png';
import university from './images/university.png';
import './card.css';
import SectionHead from '../../components/SectionHead';

const FeatureImgCard = () => {
    return (
        <div className="my-5">
       <SectionHead
       title='Embrace Your Memories'
       description='All the events are amazing.! We Provide the best quality of Event packages. Definitely, You will be pleased with our services. Just Drop a call for any package Booking. Feel Free to have a event with CholoEksathe'
       /> 
        <div className="w-full">
            <div className=" py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-items-center gap-y-5">
                <div className="place-card">
                    <img src={school} alt="" className="w-full" />
                </div>
                <div className="place-card">
                    <img src={img1} alt="" className="w-full" />
                </div>
                <div className="place-card">
                    <div className="mt-3 ms-3 p-3">
                        <p>Best Reunion <span className="text-lg font-bold">Experience</span><br />
                            <span className="text-red-500">Been reunited recently?</span></p>
                        <p className="text-gray-500">This is one of the most amazing platforms that exists in this country. Book a package and go for unlimited fun. Cheers!</p>
                        <p>Learn more <i className="fas fa-arrow-right"></i></p>
                    </div>
                </div>
                <div className="place-card ">
                    <img src={img2} alt="" className="w-full" />
                </div>
                <div className="place-card">
                    <div className="mt-3 ms-3 p-3">
                        <p>Best Reunion <span className="text-lg font-bold">Experience</span><br />
                            <span className="text-red-500">Been reunited recently?</span></p>
                        <p className="text-gray-500">This is one of the most amazing platforms that exists in this country. Book a package and go for unlimited fun. Cheers!</p>
                        <p>Learn more <i className="fas fa-arrow-right"></i></p>
                    </div>
                </div>
                <div className="place-card">
                    <img src={college} alt="" className="w-full" />
                </div>
                <div className="place-card">
                    <div className="mt-3 ms-3 p-3">
                        <p>Best Reunion <span className="text-lg font-bold">Experience</span><br />
                            <span className="text-red-500">Been reunited recently?</span></p>
                        <p className="text-gray-500">This is one of the most amazing platforms that exists in this country. Book a package and go for unlimited fun. Cheers!</p>
                        <p>Learn more <i className="fas fa-arrow-right"></i></p>
                    </div>
                </div>
                <div className="place-card">
                    <img src={university} alt="" className="w-full" />
                </div>
                <div className="place-card">
                    <img src={img3} alt="" className="w-full" />
                </div>
            </div>
        </div>
    </div>
    
    );
};

export default FeatureImgCard;