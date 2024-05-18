/* eslint-disable react-hooks/exhaustive-deps */

import { useContext, useEffect, useState } from "react";
import { EventContext } from "../context/EventContext";
import { useParams } from "react-router-dom";
import MainNav from "../components/MainNav";
import { UserContext } from "../context/userContext";
import axios from "axios";
import { headers } from "../utils/config";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { FaRegCheckCircle } from "react-icons/fa";
import { LuAlertTriangle } from "react-icons/lu";
import SectionHead from "../components/SectionHead";
import LoadingComponent from "../components/Loading";


const EventDetails = () => {
    const { eventDetails, getEventDetails, isLoading } = useContext(EventContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: 'all',
        reValidateMode: "onChange"
    });

    const { user } = useContext(UserContext)
    const { id } = useParams();
    const errorState = errors?.token?.message;
    const [successMessage, setSuccessMessage] = useState('');
    
    console.log({ eventDetails });

    useEffect(() => {
        getEventDetails(id)
    }, [])

    // initiate Payment route
    const handleInitiatePayment = async (data) => {
        const payload = {
            product_name: eventDetails?.name,
            product_profile: eventDetails?.description,
            event_image: eventDetails?.imageURL,
            total_amount: eventDetails?.price,
            cus_name: user?.name,
            cus_email: user?.email,
            access_token: data?.token,
            event_date:eventDetails?.date,
        }
        console.log(headers);
        await axios.post('/init', payload)
            .then(res => {
                // console.log(res)
                window.location.replace(res?.data)
            })
            .catch(err => toast.error(err?.response.data.message))
    }
    if (isLoading) {
        return <LoadingComponent />
    }
    return (
        <main className="min-h-[100dvh] mb-10">
            <MainNav />
            <div className="container flex flex-col gap-24">
                <section>
                    <SectionHead
                        title={eventDetails?.name}
                    />
                    <div className="container flex items-center justify-center gap-10 px-[24px]">
                        <div className="imgDiv w-[50%] object-cover shadow-lg p-4 rounded-sm" >
                            <img src={eventDetails?.image
                            } alt={`${eventDetails?.venue} Event Image`} className="h-[420px] w-full rounded-lg" />
                        </div>
                        <div className="text-div flex flex-col gap-6">
                            <p> <span className="font-bold">Description:</span> {eventDetails?.short_desc}</p>
                            <p> <span className="font-bold">Venue:</span> {eventDetails?.venue}</p>
                            <p> <span className="text-secondary">{eventDetails?.going}</span>+ people are joining us.</p>
                            <p> Ticket Price: <span className="text-secondary font-bold ">{eventDetails?.price}</span> TK</p>
                            <label htmlFor="token">Event Secret Token:</label>
                            <input type="text" {...register("token", {
                                required: "Event Secret Code is Required",
                                validate: (value) => {
                                    if (!value) {
                                        return "Event Code is Required"
                                    }
                                    if (value !== eventDetails?.access_token) {
                                        return "Event Code Doesn't Matched"
                                    }
                                    setSuccessMessage("Event Code Matched, You're Good To Go")
                                    return true;
                                }
                            })}
                                data-error={errorState}
                                placeholder="Enter your key here"
                            />
                            {
                                successMessage && !errorState && <span className="text-green-600  -mt-2 flex gap-2 items-center animate-pulse"><FaRegCheckCircle className="text-xl " /> {successMessage}</span>}
                            {errorState && <span className="text-red-500 -mt-2  flex gap-2 items-center"><LuAlertTriangle className="text-xl animate-bounce" />{errorState}</span>}
                            <button
                                disabled={errorState}
                                className={`actionBtn ${errorState ? '!bg-gray-400 cursor-not-allowed' : '!bg-secondary'}`} onClick={handleSubmit(handleInitiatePayment)}>Proceed To Payment</button>
                        </div>
                    </div>
                </section>
                <section>
                    <SectionHead
                        title='Google Map Location'
                    />
                    <div id="map-location" className="h-[600px] w-[1200px] mx-auto  shadow-2xl" dangerouslySetInnerHTML={{ __html: eventDetails?.location }}></div>
                </section>
            </div>
        </main>
    );
};

export default EventDetails;