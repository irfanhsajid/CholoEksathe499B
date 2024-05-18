/* eslint-disable react-hooks/exhaustive-deps */

import { useContext, useEffect } from "react";
import { EventContext } from "../context/EventContext";
import { useParams } from "react-router-dom";
import MainNav from "../components/MainNav";

import SectionHead from "../components/SectionHead";
import LoadingComponent from "../components/Loading";


const VenueDetails = () => {
    const { venueDetails, getVenueDetails, isLoading } = useContext(EventContext);
   
    const { id } = useParams();
  
    
    console.log({ venueDetails });

    useEffect(() => {
        getVenueDetails(id)
    }, [])

   
    if (isLoading) {
        return <LoadingComponent />
    }
    return (
        <main className="min-h-[100dvh] mb-10">
            <MainNav />
            <div className="container flex flex-col gap-24">
                <section>
                    <SectionHead
                        title={venueDetails?.name}
                    />
                    <div className="container flex items-center justify-center gap-10 px-[24px]">
                        <div className="imgDiv w-[50%] object-cover shadow-lg p-4 rounded-sm" >
                            <img src={venueDetails?.featured_image
                            } alt={`${venueDetails?.name} Image`} className="h-[420px] w-full rounded-lg" />
                        </div>
                        <div className="text-div flex flex-col gap-6">
                            <p> <span className="font-bold">Description:</span> {venueDetails?.short_desc}</p>
                            <p> <span className="font-bold">Venue:</span> {venueDetails?.name}</p>
                            <p> <span className="text-secondary">{venueDetails?.maximum_capacity}</span> People can Stay Here</p>
                            <p> Ticket Price: <span className="text-secondary font-bold ">{venueDetails?.price}</span> TK</p>
                           </div>
                    </div>
                    <div className="due">More Images Slider Here </div>
                </section>
                <section>
                    <SectionHead
                        title='Google Map Location'
                    />
                    <div id="map-location" className="h-[600px] w-[1200px] mx-auto  shadow-2xl" dangerouslySetInnerHTML={{ __html: venueDetails?.location }}></div>
                </section>
            </div>
        </main>
    );
};

export default VenueDetails;