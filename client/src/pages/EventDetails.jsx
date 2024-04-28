/* eslint-disable react-hooks/exhaustive-deps */

import { useContext, useEffect } from "react";
import { EventContext } from "../context/EventContext";
import { useParams } from "react-router-dom";
import MainNav from "../components/MainNav";


const EventDetails = () => {
 const {eventDetails, getEventDetails} = useContext(EventContext);
 const {_id}=useParams();
 console.log(eventDetails);
 useEffect(()=>{
    getEventDetails(_id)
 }, [])
    return (
        <div className="min-h-[100dvh]">
            <MainNav/>
            <div id="map-location" className="h-[600px] w-[1200px] mx-auto" dangerouslySetInnerHTML={{ __html: eventDetails?.location }}></div>
        </div>
    );
};

export default EventDetails;