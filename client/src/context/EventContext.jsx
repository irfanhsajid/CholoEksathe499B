import axios from "axios";
import { createContext, useState } from "react";
import PropTypes from 'prop-types'

import { toast } from "react-toastify";
export const EventContext = createContext({});

const EventContextProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(false)
    const [allEvents, setAllEvents] = useState();
    const [allVenues, setAllVenues] = useState();
    const [eventDetails, setEventDetails] = useState();
    const [paymentDetails, setPaymentDetails] = useState();
    const [venueDetails, setVenueDetails] = useState();
    const [userEvents, setUserEvents] = useState();
    // Get all the events
    const getAllEvents = async () => {
        setIsLoading(true);
        try {
          const res = await axios.get('/all/events');
          setAllEvents(res.data);
        } catch (error) {
          console.log("error", error);
          toast.error("Error fetching events");
        } finally {
          setIsLoading(false);
        }
      };

    const getEventDetails=async(id)=>{
        setIsLoading(true);
        try {
            const res = await axios.get('/event/' +id);
            setEventDetails(res.data)
        } catch (error) {
            toast.error("Error Fetching Data", error)
        }finally{
            setIsLoading(false)
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
        finally{
            setIsLoading(false)
        }
    }
// Get all the events
const getAllVenues = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get('/venueAll');
      setAllVenues(res.data);
    } catch (error) {
      console.log("error", error);
      toast.error("Error fetching events");
    } finally {
      setIsLoading(false);
    }
  };
  const getVenueDetails=async(id)=>{
    setIsLoading(true);
    try {
        const res = await axios.get('/venueGet/' +id);
        setVenueDetails(res.data)
    } catch (error) {
        toast.error("Error Fetching Data", error)
    }finally{
        setIsLoading(false)
    }
}
// get users events only by mail 
const getUserEventsOnly=async(email)=>{
    setIsLoading(true);
    try {
        const res = await axios.get('/user/event/' +email);
        setUserEvents(res.data)
    } catch (error) {
        // toast.error("No Data Found for this User", error)
        setUserEvents([])
    }finally{
        setIsLoading(false)
    }
}

    return (
        <EventContext.Provider value={
            {
                isLoading,
                allEvents,
                eventDetails,
                allVenues,
                paymentDetails,
                venueDetails,
                userEvents,
                getAllEvents,
                getEventDetails,
                getPaymentDetails,
                getAllVenues,
                getVenueDetails,
                getUserEventsOnly,
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