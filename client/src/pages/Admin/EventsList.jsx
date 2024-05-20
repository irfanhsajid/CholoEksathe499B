/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { EventContext } from "../../context/EventContext";
import LoadingComponent from "../../components/Loading";
import { Alert } from "keep-react";
import GlobalTable from "../../components/GlobalTable";
// import { View } from "../../../icon";
import { formatDate } from "../../utils/helperFunction";
import { FiEdit } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoIosAddCircleOutline } from "react-icons/io";

const EventList = () => {
    const { allEvents, getAllEvents, isLoading, deleteEvent } = useContext(EventContext);
    console.log({ allEvents });
    useEffect(() => {
        getAllEvents();
    }, [])

    if (isLoading) {
        return <LoadingComponent />
    }
    const handlePaginationControl = ({ page, page_size }) => {
        // Handle pagination control logic here
        console.log(`New page: ${page}, New page size: ${page_size}`);
    };

    const columns = [
        {
            field: '',
            fieldName: 'SL',
            width: '10%',
            render: (_, sl) => <span>{sl + 1}</span>
        },
        {
            field: 'name',
            fieldName: 'Event Name',
            width: '30%',
            render: (value) => <span className="truncate w-full overflow-x-clip">{value}</span>
        },
        {
            field: 'access_token',
            fieldName: 'Token',
            width: '10%',
            render: (value) => <span>{value}</span>
        },
        {
            field: '',
            fieldName: 'Event Date',
            isAlignmentCenter:true,
            width: '25%',
            render: (value) => <span>{ value?.date ? formatDate(value?.date) : "--"}</span>
        },
        {
            field: '',
            fieldName: 'Price',
            isAlignmentCenter:true,
            width: '10%',
            render: (value) => <span>{value?.price}</span>
        },
        {
            field: 'going',
            isAlignmentCenter:true,
            fieldName: 'Already Joined',
            width: '25%',
            render: (value) => <span className={ `${value==="successful"?'text-green-600':'text-red-400'}`}>{value}</span>
        },
        {
            field: '',
            fieldName: 'Action',
            isAlignmentCenter:true,
            width: '30%',
            render: (value) => <span className="flex-icon !gap-4">
               <Link to={`/editEvent/${value?._id}`}><FiEdit className="text-green-500 " /> </Link>
               <MdDeleteForever className="text-red-500 text-xl" onClick={()=>deleteEvent(value?._id)} />
            </span>
        }
    ];
    return (

        <>
            {
                allEvents?.length > 0 ? <section className="">
                    <Link to={'/event/new'}><button className="actionBtn !bg-secondary flex-icon w-48 float-end right-4 mt-2 absolute"> <IoIosAddCircleOutline /> Add New Event</button></Link>
                    <GlobalTable
                        title={`All Active Events List`}
                        columns={columns}
                        data={{results:allEvents}}
                        isPagination={true}
                        paginationControl={handlePaginationControl(1,3)}
                    />
                </section> : <section className="flex items-center justify-center h-50vh text-red-600 mt-20">
                    <Alert severity="info"> No Events Found !</Alert>
                </section>
            }
        </>

    );
};

export default EventList;