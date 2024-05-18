/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { UserContext } from "../../context/userContext";
import { EventContext } from "../../context/EventContext";
import LoadingComponent from "../../components/Loading";
import { Alert } from "keep-react";
import GlobalTable from "../../components/GlobalTable";
// import { View } from "../../../icon";
import { formatDate } from "../../utils/helperFunction";


const columns = [
    {
        field: '',
        fieldName: 'SL',
        width: '10%',
        render: (_, sl) => <span>{sl + 1}</span>
    },
    {
        field: 'cus_name',
        fieldName: 'Name',
        width: '20%',
        render: (value) => <span>{value}</span>
    },
    {
        field: 'cus_email',
        fieldName: 'Email',
        width: '30%',
        render: (value) => <span>{value}</span>
    },
    {
        field: 'product_name',
        fieldName: 'Event Name',
        isAlignmentCenter:true,
        width: '50%',
        render: (value) => <span>{value}</span>
    },
    {
        field: '',
        fieldName: 'Event Date',
        isAlignmentCenter:true,
        width: '20%',
        render: (value) => <span>{ value?.event_date ? formatDate(value?.event_date) : "--"}</span>
    },
    {
        field: '',
        fieldName: 'Paid Amount',
        isAlignmentCenter:true,
        width: '20%',
        render: (value) => <span>{value?.total_amount}</span>
    },
    {
        field: 'payment_status',
        isAlignmentCenter:true,
        fieldName: 'Payment Status',
        width: '25%',
        render: (value) => <span className={ `${value==="successful"?'text-green-600':'text-red-400'}`}>{value}</span>
    },
    // {
    //     field: '',
    //     fieldName: 'Action',
    //     isAlignmentCenter:true,
    //     width: '30%',
    //     render: () => <span>
    //         <View className={'text-secondary'} />
    //     </span>
    // }
];

const MyEvents = () => {
    const { user } = useContext(UserContext)
    const { userEvents, getUserEventsOnly, isLoading } = useContext(EventContext);

    console.log({ userEvents });

    useEffect(() => {
        getUserEventsOnly(user?.email)
    }, [])

    if (isLoading) {
        return <LoadingComponent />
    }
    const handlePaginationControl = ({ page, page_size }) => {
        // Handle pagination control logic here
        console.log(`New page: ${page}, New page size: ${page_size}`);
    };
    return (

        <>
            {
                userEvents?.length > 0 ? <section>
                    <GlobalTable
                        title={`Events Table of ${userEvents?.[0]?.cus_name}`}
                        columns={columns}
                        data={{results:userEvents}}
                        isPagination={false}
                        paginationControl={handlePaginationControl}
                    />
                </section> : <section className="flex items-center justify-center h-50vh text-red-600 mt-20">
                    <Alert severity="info"> No Events Found !</Alert>
                </section>
            }
        </>

    );
};

export default MyEvents;