/* eslint-disable react-hooks/exhaustive-deps */

import { useContext, useEffect } from "react";
import { EventContext } from "../context/EventContext";
import { useParams } from "react-router-dom";
import MainNav from "../components/MainNav";
import { UserContext } from "../context/userContext";
import axios from "axios";
import { headers } from "../utils/config";
import { toast } from "react-toastify";


const EventDetails = () => {
    const { eventDetails, getEventDetails } = useContext(EventContext);
    const { user } = useContext(UserContext)
    const { id } = useParams();
    console.log(eventDetails);
    useEffect(() => {
        getEventDetails(id)
    }, [])

    console.log({ eventDetails })

    // initiate Payment route
    const handleInitiatePayment=async()=>{
        const payload = {
            product_name: eventDetails?.name,
            product_profile: eventDetails?.description,
            product_image: eventDetails?.imageURL,
            total_amount: eventDetails?.price,
            cus_name: user?.name,
            cus_email:user?.email
        }
        console.log(headers);
        await axios.post('/init',payload)
        .then(res =>{
            // console.log(res)
             window.location.replace(res?.data)
        })
        .catch(err=>toast.error(err))
       
            
        
    }

    return (
        <div className="min-h-[100dvh]">
            <MainNav />
            <h2 className="text-center py-4 text-primary text-[38px]">Expore Event Details Here </h2>
            <div className="container flex items-center justify-center gap-60 px-[24px]">
                <div className="imgDiv w-2/5" >
                    <img src={eventDetails?.image
                    } alt={`${eventDetails?.venue} Event Image`} />
                </div>
                <div className="text-div flex flex-col gap-6">
                    <h2>{eventDetails?.name}</h2>
                    <p>{eventDetails?.short_desc}</p>
                    <p>AT : {eventDetails?.venue}</p>
                    <p>{eventDetails?.going}+ are joining us!</p>
                    <p>{eventDetails?.price}TK</p>
                    <button className="actionBtn !bg-secondary" onClick={handleInitiatePayment}>Join Now</button>
                </div>
            </div>
            <h2 className="text-center py-4 text-primary text-[38px]"> Google Map Location </h2>
            <div id="map-location" className="h-[600px] w-[1200px] mx-auto" dangerouslySetInnerHTML={{ __html: eventDetails?.location }}></div>
        </div>
    );
};

export default EventDetails;