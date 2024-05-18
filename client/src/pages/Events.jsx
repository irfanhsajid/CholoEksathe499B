/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { EventContext } from "../context/EventContext";
import { Link } from "react-router-dom";
import MainNav from "../components/MainNav";


const Events = () => {
    const { getAllEvents, allEvents } = useContext(EventContext)
    useEffect(() => {
        getAllEvents();
    }, [])

    console.log("all events response", allEvents);
    return (
        <main className="min-h-screen">
            <MainNav />
            <section className=" container py-2 grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center"
               >
                {
                    allEvents?.map((data, index) => (
                        <div key={index}>
                            <img src={data.image} alt="" />
                            <div>
                                <h2 className="py-2 font-bold text-[24px] text-center">{data.name}</h2>
                                <p className="pb-4 shadow-lg text-center">
                                    {data.short_desc}
                                </p>
                            </div>
                            <Link to={`/eventDetails/${data._id}/`}>
                                <button className="actionBtn !bg-primary">Join Event</button></Link>

                        </div>
                    ))
                }
            </section>

        </main>
    );
};

export default Events;