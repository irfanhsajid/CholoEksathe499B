import { useContext, useEffect } from "react";
import MainNav from "../components/MainNav";
import { EventContext } from "../context/EventContext";
import LoadingComponent from "../components/Loading";
import SectionHead from "../components/SectionHead";
import { Link } from "react-router-dom";


const AllVenues = () => {
    const { getAllVenues, allVenues, isLoading } = useContext(EventContext)
    useEffect(() => {
        getAllVenues();
    }, [])
    console.log({ isLoading })

    // display loading animation
    if (isLoading) {
        return <LoadingComponent />
    }
    return (
        <main>
            <MainNav />
            <SectionHead
                title="All Available Venues"
                description="Discover all the exciting details about our upcoming events. Find comprehensive information on schedules, venues, and special activities. Join us for an unforgettable experience filled with fun and memories."
            />
            <section className=" container py-2 grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center"
            >
                {
                    allVenues?.map((data, index) => (
                        <div key={index} className="p-3 shadow-inner pb-2">
                            <img src={data?.featured_image} alt={`${data?.name}Feature Image`} className="w-full h-[380px] object-cover p-2" />
                            <div>
                                <h2 className="py-2 font-bold text-[24px] text-center">{data?.name}</h2>
                                <div className="text-center flex flex-col gap-2 pb-4">
                                    <p className="">{data?.short_desc}</p>
                                    <p> <span className="text-secondary">{data?.maximum_capacity}</span> people can Easily Chill Here.</p>
                                    <p> Only <span className="text-secondary font-bold ">{data?.price}</span> TK</p>
                                </div>
                            </div>
                            <Link to={`/venueDetails/${data?._id}/`}>
                                <button className="actionBtn !bg-primary">See Venue Details</button></Link>
                        </div>
                    ))
                }
            </section>
        </main>
    );
};

export default AllVenues;