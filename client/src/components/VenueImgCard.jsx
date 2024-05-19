
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const VenueImgCard = ({ allVenuesData }) => {

    return (
        <main>
            {
                allVenuesData?.map((data, index) => (
                    <section key={index} className={`container pt-2 flex items-center justify-center gap-10 px-[24px] ${index%2==0?'flex-row':'flex-row-reverse'}`}>
                        <div className="imgDiv w-[50%] object-cover shadow-lg p-4 rounded-sm" >
                            <img src={data?.featured_image
                            } alt={`${data?.name} Image`} className="h-[420px] w-full rounded-lg" />
                        </div>
                        <div className="text-div flex flex-col gap-6">
                            <h2 className="title">{data?.name}</h2>
                            <p> <span className="font-bold">Description:</span> {data?.short_desc}</p>
                            <p> <span className="font-bold">Venue:</span> {data?.name}</p>
                            <p> <span className="text-secondary">{data?.maximum_capacity}</span> People can Stay Here</p>
                            <p> Ticket Price: <span className="text-secondary font-bold ">{data?.price}</span> TK</p>
                            <Link to="/contact"><button className='actionBtn !bg-secondary w-44'>Book Now</button></Link>
                        </div>
                    </section>
                ))
            }
        </main>

    );
};

VenueImgCard.propTypes = {
    allVenuesData: PropTypes.array
}

export default VenueImgCard;