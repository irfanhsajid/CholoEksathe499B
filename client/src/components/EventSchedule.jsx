import { Link } from "react-router-dom";

import scheduleBg from '../assets/images/EventSchedule.svg'

const EventSchedule = () => {
    return (
        <section className="container w-[1200px] mx-auto">
            <div className="bg-center bg-cover py-[30px]  flex items-center justify-center rounded-br-[20px] lg:rounded-br-[40px] rounded-tl-[20px] lg:rounded-tl-[40px]" style={{ backgroundImage: `url(${scheduleBg})` }}>
                <div className="flex flex-col items-center justify-center gap-4 max-w-[595px] mx-auto px-[10px]">
                    <h2 className="title font-bold !text-white">Have Any Event Schedule?</h2>
                    <p className="text-white text-center">
                        Let&apos;s discuss your upcoming event plans! Our experienced global team is here to assist you in organizing a successful and memorable event. Whether you need help with logistics, coordination, or creative ideas, we are ready to provide our expertise. Schedule a free consultation with us today, and let&apos;s bring your vision to life.
                    </p>
                    <Link to="/contact">
                        <button className="bg-white actionBtn !bg-secondary">
                            Book A Venue Now
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};
export default EventSchedule;
