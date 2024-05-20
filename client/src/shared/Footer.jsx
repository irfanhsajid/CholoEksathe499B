import { Link } from 'react-router-dom';
import bgImage from '../assets/images/Home/footer-bg.jpg'
import { MdLocalPhone } from "react-icons/md";
import { FaStreetView } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <div className=" text-white w-full mt-7 px-6  bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="container mx-auto py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="col-span-1">
                        <h4 className="text-lg font-semibold">About Us</h4>
                        <div className="border-b border-secondary w-20 mt-2"></div>
                        <p className="text-sm text-gray-300 mt-2">We the CholoEksathe people offer the best quality of services having top most professional experiences. Youll feel awesome with us In Sha Allah! *,*</p>
                        <div className="flex flex-col gap-2 mt-3">
                            <p className="text-sm font-light flex-icon"><MdLocalPhone className='text-xl text-secondary' key={1}/>015-677-12427</p>
                            <p className="text-sm font-light flex-icon"><FaStreetView className='text-xl text-secondary' key={2}/>184/ka, #4, kuril, Dhaka</p>
                            <p className="text-sm font-light flex-icon"><MdEmail className='text-xl text-secondary' key={3}/>info@CholoEksathe.com</p>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <h4 className="text-lg font-semibold">Important Links</h4>
                        <div className="border-b border-secondary w-40 mt-2"></div>
                        <ul className="p-2">
                            {footerItems?.map((data, index) => (
                                <li key={index} className="py-2">
                                    <Link to={data?.link}> {data.name}  </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-span-1">
                        <h4 className="text-lg font-semibold">Latest Reveiws</h4>
                        <div className="border-b border-secondary w-36 mt-2"></div>
                        <div className="mt-2">
                            {
                                data.map((item, index) => (
                                    <p key={index} className='text-sm font-light text-gray-300 pb-3'>
                                        {item.desc}
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;

const footerItems = [
    {
        id: 1,
        name: 'Home',
        link: '/'
    },
    {
        id: 2,
        name: 'Events',
        link: '/events',

    },
    {
        id: 3,
        name: 'Venues',
        link: '/venues',

    },
    {
        id: 4,
        name: 'Contact Us',
        link: '/contact'
    },
    {
        id: 5,
        name: 'Dashboard',
        link: '/dashboard'

    },
]

const data = [
    {
        id: 1,
        desc: "@janedoe23 Had a fantastic experience! The event was well-organized and the venue was stunning. Highly recommend! https://t.co/abc1234def"
    },
    {
        id: 2,
        desc: "@johnsmith78 Our reunion was unforgettable thanks to you! Excellent service and attention to detail. Will definitely book again. https://t.co/ghi5678jkl"
    },
    {
        id: 3,
        desc: "@emilybrown42 Amazing platform! Easily found and booked the perfect venue for our event. Everything went smoothly. Thank you! https://t.co/mno9012pqr"
    }
]

