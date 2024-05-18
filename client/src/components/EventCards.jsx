import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

const EventCards = ({eventsData}) => {
    return (
        <>
             {
                    eventsData?.map((data, index) => (
                        <div key={index} className="p-3 shadow-inner pb-2">
                            <img src={data?.image} alt="" className=" w-full object-cover p-2" />
                            <div>
                                <h2 className="py-2 font-bold text-[24px] text-center">{data?.name}</h2>
                                <div className="text-center flex flex-col gap-2 pb-4">
                                <p className="">{data?.short_desc}</p>
                                <p> <span className="text-secondary">{data?.going}</span>+ people already joined.</p>
                                <p> Only <span className="text-secondary font-bold ">{data?.price}</span> TK</p>
                                </div>
                            </div>
                            <Link to={`/eventDetails/${data?._id}/`}>
                                <button className="actionBtn !bg-primary">Join Event</button></Link>
                        </div>
                    ))
                }
        </>
    );
};

EventCards.propTypes={
    eventsData: PropTypes.array.isRequired
}

export default EventCards;

