import Layout from "../../layouts/Layout";


const UserDashboard = () => {
    return (
        <Layout data={adminNav}>
         <div className="flex items-center justify-center h-[400px]">
            User <span className="text-secondary text-3xl ms-3">Dashboard</span>
         </div>
        </Layout>
    );
};

export default UserDashboard;
const adminNav = [
    {
        id: 1,
        name: 'Home',
        link: '/'
    },
    {
        id: 3,
        name: 'My Events',
        link: '/'

    },
  
   
]