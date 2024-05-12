
import { Route, Routes } from "react-router-dom";
import CreateJob from './pages/CreateJob'
import Login from './pages/Login'
import Register from './pages/Register'
import PrivateRoutes from './utils/PrivateRoutes'
import { Fragment, useContext } from "react";
import Home from "./pages/Home";
import Events from "./pages/Events";
import EventDetails from "./pages/EventDetails";
import AllVenues from "./pages/AllVenues";
import Dashboard from "./pages/Dashboard/Dashboard";
import VenueList from "./pages/Admin/VenueList";
import { adminNav, userNav } from "./utils/config";
import Layout from "./layouts/Layout";
import { UserContext } from "./context/userContext";
import MyEvents from "./pages/User/MyEvents";
import NotFound from "./shared/NotFound";
import EventsList from "./pages/Admin/EventsList";
import PaymentList from "./pages/Admin/PaymentList";

const AllRoutes = () => {
  const { user } = useContext(UserContext)
  return (
    <Fragment>
      <Routes>
        <Route element={<PrivateRoutes />}>
          {
            user?.name === "admin" && <Route element={<Layout data={adminNav} />}>
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/venueList' element={<VenueList />} />
              <Route path='/eventList' element={<EventsList />} />
              <Route path='/payment' element={<PaymentList />} />
            </Route>
          }
          {
            user?.name !== "admin" && <Route element={<Layout data={userNav} />}>
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/myEvents' element={<MyEvents />} />
            </Route>
          }
          <Route path='/createjobs' element={<CreateJob />} />
          <Route path='/eventDetails/:_id/' element={<EventDetails />} />
        </Route>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/events' element={<Events />} />
        <Route path='/venues' element={<AllVenues />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Fragment>

  )
}

export default AllRoutes;