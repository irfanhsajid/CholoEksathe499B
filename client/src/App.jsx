
import axios from 'axios'

import { UserContextProvider } from './context/userContext'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AllRoutes from './routes';
import Footer from './shared/Footer';
import EventContextProvider from './context/EventContext';
//cors policy setup
// axios.defaults.baseURL = 'https://auth-skeleton-api.vercel.app';
axios.defaults.baseURL = 'http://localhost:7000';
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <UserContextProvider>
        {/* <Navbar /> */}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition:Bounce />
        <EventContextProvider>
          <AllRoutes />
        </EventContextProvider>
        <Footer />
      </UserContextProvider>
    </>
  )
}

export default App;
