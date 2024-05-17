import axios from "axios";
import { createContext, useState } from "react";
import PropTypes from 'prop-types'

import { toast } from "react-toastify";
export const EventContext = createContext({});

const EventContextProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(false)
    const [allEvents, setAllEvents] = useState();
    const [eventDetails, setEventDetails] = useState();
    const [paymentDetails, setPaymentDetails] = useState();
    // Get all the events
    const getAllEvents = async () => {
        setIsLoading(true)
        try {
            const res = await axios.get('/all/events');
            setAllEvents(res.data)
            setIsLoading(false)
        } catch (error) {
            console.log("error", error);
        }
    };

    const getEventDetails=async(id)=>{
        setIsLoading(true);
        try {
            const res = await axios.get('/event/' +id);
            setEventDetails(res.data)
        } catch (error) {
            toast.error("Error Fetching Data", error)
        }
    }

    const getPaymentDetails=async(id)=>{
        setIsLoading(true);
        try {
            const res = await axios.get('/payment/details/' +id);
            setPaymentDetails(res.data)
        } catch (error) {
            toast.error("Error Fetching Data", error)
        }
    }

    return (
        <EventContext.Provider value={
            {
                isLoading,
                allEvents,
                eventDetails,
                paymentDetails,
                getAllEvents,
                getEventDetails,
                getPaymentDetails
            }
        }>
            {children}
        </EventContext.Provider>
    );
};

export default EventContextProvider;

EventContextProvider.propTypes = {
    children: PropTypes.any,
}