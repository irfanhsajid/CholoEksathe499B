/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import { EventContext } from "../context/EventContext";
import { useContext, useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import MainNav from "../components/MainNav";
import { formatDate } from "../utils/helperFunction";


const PaymentSuccess = () => {
    const { id } = useParams();
    const { loading, paymentDetails, getPaymentDetails } = useContext(EventContext);


    useEffect(() => {
        getPaymentDetails(id)
    }, [id])

    console.log({ paymentDetails })

    loading && <div className="min-h-screen text-28px animate-ping"> Loading...</div>
    return (
        <main className="px-10 py-2 min-h-screen">
            <MainNav />
            <section className="flex items-center justify-center mt-32">
                <FaCheckCircle className="size-[100px] text-green-500 animate-bounce" />
            </section>

            <section className="border-t-4 w-1/2 mx-auto border-secondary">

                <div className="py-4 text-center flex flex-col gap-2">
                    <h2 className=" text-primary title">Thanks you <span className="!text-secondary title">{paymentDetails?.cus_name}</span> for joining us </h2>
                    <p className="">
                        We have received Tk <strong>{paymentDetails?.total_amount}</strong> for the Event <strong> {paymentDetails?.product_name} </strong> on <strong> {formatDate(paymentDetails?.event_date)}</strong>. Wishing you All the Best. <br />
                        Cheers!
                    </p>
                </div>

            </section>
        </main>
    );
};

export default PaymentSuccess;