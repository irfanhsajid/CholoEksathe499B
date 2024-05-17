/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import { EventContext } from "../context/EventContext";
import { useContext, useEffect } from "react";


const PaymentSuccess = () => {
    const { id } = useParams();
    const { loading, paymentDetails, getPaymentDetails } = useContext(EventContext);

    useEffect(() => {
        getPaymentDetails(id)
    }, [id])

    console.log({ paymentDetails })

    loading && <div className="min-h-screen text-28px animate-ping"> Loading...</div>
    return (
        <div className="px-10 py-2">
           <h2 className="text-center text-primary [&]>:text-[28px]">Thanks you <span className="text-secondary">{paymentDetails?.cus_name}</span> for joining us </h2>
           <p>
            Lets meet at {paymentDetails?.product_name}
           
           </p>
        </div>
    );
};

export default PaymentSuccess;