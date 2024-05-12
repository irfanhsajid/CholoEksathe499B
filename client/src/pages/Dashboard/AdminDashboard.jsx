import { useLocation } from "react-router-dom";
import Layout from "../../layouts/Layout";


const AdminDashboard = () => {
    const location = useLocation();

    // Access the current URL from location object
    const currentUrl = location.pathname;
    console.log("params", currentUrl)
    return (

        <Layout data={adminNav}>
           {/* Admin Routes and Pages will be displayed Here */}
           <div className="flex items-center justify-center h-[400px]">
            ADMIN <span className="text-green-500 text-3xl ms-3"> Dashboard</span>
         </div>
        </Layout>

    );
};

export default AdminDashboard;

const adminNav = [
    {
        id: 1,
        name: 'Home',
        link: '/'
    },
    {
        id: 2,
        name: 'All Venues',
        link: '/venueList',

    },
    {
        id: 3,
        name: 'All Events',
        link: '/eventList'

    },
    {
        id: 4,
        name: 'Payment Info',
        link: '/payment'
    },
   
]