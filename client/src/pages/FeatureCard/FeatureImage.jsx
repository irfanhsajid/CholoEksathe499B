
import img1 from '../../assets/images/FeatCard/scl-boys.png';
import img2 from '../../assets/images/FeatCard/clg-boys.png';
import img3 from '../../assets/images/FeatCard/uni-boys.png';
import school from '../../assets/images/FeatCard/school.png';
import college from '../../assets/images/FeatCard/college.png';
import university from '../../assets/images/FeatCard/university.png';
import './card.css';
import SectionHead from '../../components/SectionHead';

const FeatureImgCard = () => {
    return (
        <div >
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
                    <div className="place-card"
                    >
                        <div className="mt-3 ms-3 p-3">
                            <p className='text-[#048AEF] font-bold text-[24px]'>School Reunion Celebration</p>
                            <p>Rediscover <span className="text-lg font-bold py-2">OLD Friendships?</span> </p>
                            <p className="text-gray-500 py-2">&quot;Join us for an unforgettable school reunion! Reconnect with classmates, relive cherished memories, and create new ones. Book your spot now for a night of laughter and nostalgia. Cheers!&quot;</p>
                            <button className='actionBtn mt-3 w-1/2 !bg-[#048AEF]'>Visit More</button>
                        </div>
                    </div>
                    <div className="place-card ">
                        <img src={img2} alt="" className="w-full" />
                    </div>
                    <div className="mt-3 ms-3 p-3">
                            <p className='text-[#2eb5b5] font-bold text-[24px]'>College Reunion Celebration</p>
                            <p>Reconnect with <span className="text-lg font-bold py-2">OLD Friends?</span> </p>
                            <p className="text-gray-500 py-2">&quot;Don&apos;t miss this chance to reunite with your college friends! Reminisce about the good times, share stories, and make new memories. Reserve your spot for an evening filled with joy and laughter. Cheers!&quot;</p>
                            <button className='actionBtn mt-3 w-1/2 !bg-[#2eb5b5]'>Visit More</button>
                        </div>
                    <div className="place-card">
                        <img src={college} alt="" className="w-full" />
                    </div>
                    <div className="place-card">
                    <div className="mt-3 ms-3 p-3">
                            <p className='text-[#F35312] font-bold text-[24px]'>University Reunion Event</p>
                            <p>Remember the <span className="text-lg font-bold py-2">university days?</span> </p>
                            <p className="text-gray-500 py-2">&quot;Join us for an unforgettable school reunion! Reconnect with classmates, relive cherished memories, and create new ones. Book your spot now for a night of laughter and nostalgia. Cheers!&quot;</p>
                            <button className='actionBtn mt-3 w-1/2 !bg-[#F35312]'>Visit More</button>
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