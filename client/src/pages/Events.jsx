/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { EventContext } from "../context/EventContext";
import MainNav from "../components/MainNav";
import LoadingComponent from "../components/Loading";
import SectionHead from "../components/SectionHead";
import EventCards from "../components/EventCards";


const Events = () => {
    const { getAllEvents, allEvents, isLoading } = useContext(EventContext)
    useEffect(() => {
        getAllEvents();
    }, [])
    console.log({ isLoading })

    // display loading animation
    if (isLoading) {
        return <LoadingComponent />
    }

    return (
        <main className="min-h-screen">
            <MainNav />
            <SectionHead
                title="Event Highlights"
                description="Discover all the exciting details about our upcoming events. Find comprehensive information on schedules, venues, and special activities. Join us for an unforgettable experience filled with fun and memories."
            />
            <section className=" container py-2 grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center"
            >
               <EventCards eventsData={allEvents}/>
            </section>

        </main>
    );
};

export default Events;