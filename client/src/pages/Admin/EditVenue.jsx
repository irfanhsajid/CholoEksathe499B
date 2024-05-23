/* eslint-disable react-hooks/exhaustive-deps */

import { useForm } from 'react-hook-form';
import axios from 'axios';
import SectionHead from '../../components/SectionHead';
import { useContext, useEffect } from 'react';
import { EventContext } from '../../context/EventContext';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom'
const EditVenue = () => {

    const { allVenues, setAllVenues, venueDetails, getVenueDetails } = useContext(EventContext)
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        mode: 'all',
        reValidateMode: 'onChange',
    });
    const { id } = useParams();

    useEffect(() => {
        getVenueDetails(id)
    }, [id])


    useEffect(() => {
        if(venueDetails){
            reset(venueDetails);
        }
      }, [venueDetails, reset]);

    const navigate = useNavigate();
    console.log({ venueDetails });
    const onSubmit = async (data) => {
        try {
            const response = await axios.put(`/venueUpdate/${id}/`, data);
            // Handle the successful response
            console.log(response?.data);
            // Handle the successful update response
            const updatedVenue = response?.data?.event;
            if (updatedVenue) {
                // Update the state with the updated Venue
                setAllVenues((prevVenues) =>
                    prevVenues.map((venue) =>
                        venue._id === updatedVenue._id ? updatedVenue : event
                    )
                )}
                toast.success(response?.data?.message || "Venue Updated Successfully")
                reset();
                navigate('/venueList')
            } catch (error) {
                // Handle the error
                console.error(error);
                toast.error(error?.response?.data?.error || "Something went wrong")
            }
        };

        console.log({ allVenues })

        return (
            <main>

            <SectionHead
                title="Edit Venue"
            />

            <form onSubmit={handleSubmit(onSubmit)} className="max-w-[90%] px-20">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-1">
                        Venue Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        {...register('name', { required: "This field is required" })}
                        className="shadow  border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                        data-error={errors?.name?.message}
                    />
                    {errors.name && <span className="text-red-500">This field is required</span>}
                </div>

                <div className="mb-4 w-full">
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-1">
                        Feature Image URL
                    </label>
                    <input
                        type="text"
                        placeholder='E.g: https://i.ibb.co/CBTMDyC/Buetians.jpg'
                        {...register('featured_image', { required: " Feature image is required" })}
                        className="shadow  border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                        data-error={errors?.featured_image?.message}
                    />
                    {errors.image && <span className="text-red-500">{errors?.image?.message}</span>}
                </div>
                <div className="flex gap-20 justify-between w-full mb-4">

                    <div className=" w-full">
                        <label htmlFor="category" className="block text-gray-700 font-bold mb-1">
                        Is Available ?
                        </label>
                        <select name="status" id="category" className='w-full' 
                        {...register('status', {required:"Category is required"})} data-error={errors?.status?.message}>
                            <option value="" disabled selected> Choose Status</option>
                            <option value={true}>YES</option>
                            <option value={false} >NO</option>
                          
                        </select>
                        {errors.status && <span className="text-red-500">{errors?.status?.message}</span>}
                    </div>
                  
                </div>
                <div className="flex gap-3 mb-4 w-full justify-between">

                    <div className="w-full">
                        <label htmlFor="price" className="block text-gray-700 font-bold mb-1">
                            Price
                        </label>
                        <input
                            type="number"
                            id="price"
                            {...register('price', { required: true })}
                            placeholder='50'
                            className="shadow  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-secondary focus:shadow-outline"
                        />
                        {errors.price && <span className="text-red-500">This field is required</span>}
                    </div>
                    <div className="mb-4 w-full">
                        <label htmlFor="maximum_capacity" className="block text-gray-700 font-bold mb-1">
                            Max Capacity Persons
                        </label>
                        <input
                            type="number"
                            id="maximum_capacity"
                            {...register('maximum_capacity', { required: true })}
                            className="shadow  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-secondary focus:shadow-outline"
                        />
                        {errors.maximum_capacity && <span className="text-red-500">This field is required</span>}
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="short_desc" className="block text-gray-700 font-bold mb-1">
                        Short Description
                    </label>
                    <textarea
                        type="text"
                        rows={4}
                        id="short_desc"
                        {...register('short_desc')}
                        className="shadow  border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                    />
                </div>


                <div className="mb-4">
                    <label htmlFor="location" className="block text-gray-700 font-bold mb-1">
                        Map Location
                    </label>
                    <textarea
                        type="text"
                        rows={8}
                        id="location"
                        placeholder='E.g: "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.2354852469525!2d90.66248077506984!3d23.881266978581326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375433c298d21b67%3A0xad53b0d4babc0616!2z4Kah4KeN4Kaw4Ka_4KauIOCmueCmsuCmv-CmoeCnhyDgpqrgpr7gprDgp43gppU!5e0!3m2!1sbn!2sbd!4v1713719654523!5m2!1sbn!2sbd\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>"'
                        {...register('location', { required: false })}
                        className="shadow  border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                    />
                </div>
                
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="actionBtn !bg-secondary font-bold py-2 px-4 rounded"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </main>
        );
    };

    export default EditVenue;