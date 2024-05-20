import axios from "axios";
import { createContext, useState } from "react";
import PropTypes from 'prop-types'

import { toast } from "react-toastify";
import Swal from "sweetalert2";
export const EventContext = createContext({});

const EventContextProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(false)
    const [allEvents, setAllEvents] = useState();
    const [allVenues, setAllVenues] = useState();
    const [eventDetails, setEventDetails] = useState();
    const [allPayments, setAllPayments] = useState();
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

    const getEventDetails = async (id) => {
        setIsLoading(true);
        try {
            const res = await axios.get('/event/' + id);
            setEventDetails(res.data)
        } catch (error) {
            toast.error("Error Fetching Data", error)
        } finally {
            setIsLoading(false)
        }
    }

    // delete an event 
    const deleteEvent = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const res = await axios.delete('/event/' + id);
                    console.log(res);
                    setAllEvents((prev) => prev.filter((event) => event._id !== id));
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your Data has been deleted.",
                        icon: "success"
                    });
                } catch (error) {
                    Swal.fire({
                        title: "Error!",
                        text: "There was a problem deleting your file.",
                        icon: "error"
                    });
                }
            }
        });
    }
    // delete an event 
    const deleteVenue = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const res = await axios.delete('/venueDelete/' + id);
                    setAllVenues((prev) => prev.filter((venue) => venue._id !== id));
                    console.log(res);
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your Data has been deleted.",
                        icon: "success"
                    });
                } catch (error) {
                    Swal.fire({
                        title: "Error!",
                        text: "There was a problem deleting your file.",
                        icon: "error"
                    });
                }
            }
        });
    }


    const getPaymentDetails = async (id) => {
        setIsLoading(true);
        try {
            const res = await axios.get('/payment/details/' + id);
            setPaymentDetails(res.data)
        } catch (error) {
            toast.error("Error Fetching Data", error)
        }
        finally {
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
    const getVenueDetails = async (id) => {
        setIsLoading(true);
        try {
            const res = await axios.get('/venueGet/' + id);
            setVenueDetails(res.data)
        } catch (error) {
            toast.error("Error Fetching Data", error)
        } finally {
            setIsLoading(false)
        }
    }
    // get users events only by mail 
    const getUserEventsOnly = async (email) => {
        setIsLoading(true);
        try {
            const res = await axios.get('/user/event/' + email);
            setUserEvents(res.data)
        } catch (error) {
            // toast.error("No Data Found for this User", error)
            setUserEvents([])
        } finally {
            setIsLoading(false)
        }
    }


    // get all payment info's 
      // Get all the events
      const getAllPayments = async () => {
        setIsLoading(true);
        try {
            const res = await axios.get('/payment/all');
            setAllPayments(res.data);
        } catch (error) {
            console.log("error", error);
            toast.error("Error fetching events");
        } finally {
            setIsLoading(false);
        }
    };

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
                allPayments,
                setAllEvents,
                getAllEvents,
                getEventDetails,
                getPaymentDetails,
                getAllVenues,
                getVenueDetails,
                getUserEventsOnly,
                deleteEvent,
                getAllPayments,
                deleteVenue,
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