/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */

import { useContext, useEffect } from "react";
import EventCards from "../components/EventCards";
import MainNav from "../components/MainNav";
import MyParticles from "../components/Particles";
import SectionHead from "../components/SectionHead";

// import MyParticles from "../components/Particles";
import FeatureImgCard from "./FeatureCard/FeatureImage";
import LoadingComponent from "../components/Loading";
import { EventContext } from "../context/EventContext";
import FaqComponent from "../components/FaqComponent";
import EventSchedule from "../components/EventSchedule";
import VenueImgCard from "../components/VenueImgCard";
const Home = () => {
    const { getAllEvents, allEvents, isLoading, allVenues, getAllVenues } = useContext(EventContext)
    
    useEffect(() => {
        getAllEvents();
        getAllVenues();
    }, [])

    const limitedEvents = allEvents?.slice(0, 3);
    const limitedVenues = allVenues?.slice(0, 3);

    // display loading animation
    if (isLoading) {
        return <LoadingComponent />
    }
    return (
        <main className="mb-20">
            <MainNav />

            <div className="flex flex-col gap-10">
                <MyParticles />

                <FeatureImgCard />

                <section>
                    <SectionHead
                        title="Find all Exciting Venues"
                        description="Discover all the exciting details about our upcoming events. Find comprehensive information on schedules, venues, and special activities. Join us for an unforgettable experience filled with fun and memories."
                    />
                    <VenueImgCard allVenuesData={limitedVenues}/>
                </section>
                {/* <section>
                    <SectionHead
                        title="Event Highlights"
                        description="Discover all the exciting details about our upcoming events. Find comprehensive information on schedules, venues, and special activities. Join us for an unforgettable experience filled with fun and memories."
                    />
                    <div className=" container py-2 grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center"
                    >
                        <EventCards eventsData={limitedEvents} />
                    </div>
                </section> */}
                <section className="mt-4">
                <SectionHead
                        title="Frequently Asked Questions"
                        description="Got questions? We've got answers! Our FAQ section covers everything you need to know about our events, from schedules and venues to special activities and booking details. Find all the information you need to ensure an unforgettable experience."
                    />
                    <FaqComponent/>
                    {/* <div className="due">FAQ</div> */}
                </section>
                <section className="mt-10">
                   <EventSchedule/>
                </section>
                {/* <section>
                <SectionHead
                        title="User Reviews"
                        description="Hear from our attendees! Our User Reviews section features feedback and testimonials from people who have experienced our events. Discover what they loved, what stood out, and why they recommend joining us for an unforgettable experience."
                    />
                    <div className="due">Client Reviews Slider</div>
                </section> */}
            </div>
        </main>
    );
};

export default Home;