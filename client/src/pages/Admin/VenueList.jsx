/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { EventContext } from "../../context/EventContext";
import LoadingComponent from "../../components/Loading";
import { Alert } from "keep-react";
import GlobalTable from "../../components/GlobalTable";
// import { View } from "../../../icon";
import { truncateString } from "../../utils/helperFunction";
import { FiEdit } from "react-icons/fi";

import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoIosAddCircleOutline } from "react-icons/io";




const VenueList = () => {
    const { allVenues, getAllVenues, isLoading, deleteVenue } = useContext(EventContext);
    console.log({ allVenues });
    useEffect(() => {
        getAllVenues();
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
            fieldName: 'Venue Name',
            width: '30%',
            render: (value) => <p className="truncate">{truncateString(value, 20)}</p>
        },
        {
            field: 'maximum_capacity',
            fieldName: 'Max Capacity',
            isAlignmentCenter: true,
            width: '20%',
            render: (value) => <span>{value}</span>
        },
        {
            field: '',
            fieldName: 'Price',
            isAlignmentCenter: true,
            width: '10%',
            render: (value) => <span>{value?.price}</span>
        },
        {
            field: '',
            isAlignmentCenter: true,
            fieldName: 'Status',
            width: '25%',
            render: (value) => (
                <span className={`${value?.status===true?'text-green-500':'text-red-500'}`}>
                    {value?.status ===true? 'Available' : 'Booked'}
                </span>
            )
        },
        {
            field: '',
            fieldName: 'Action',
            isAlignmentCenter: true,
            width: '30%',
            render: (value) => <span className="flex-icon !gap-4">
                <Link to={`/editEvent/${value?._id}`}><FiEdit className="text-green-500 " /> </Link>
                <MdDeleteForever className="text-red-500 text-xl" onClick={() => deleteVenue(value?._id)} />
            </span>
        }
    ];
    return (

        <>
            {
                allVenues?.length > 0 ? <section className="mt-4">
                    <Link to={'/event/new'}><button className="actionBtn !bg-secondary flex-icon w-44 float-end right-4 mt-2 absolute"> <IoIosAddCircleOutline /> Add Venue</button></Link>
                    
                    <GlobalTable
                        title={`All Active Events List`}
                        columns={columns}
                        data={{ results: allVenues }}
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

export default VenueList;