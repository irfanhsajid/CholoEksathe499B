
import { Route, Routes } from "react-router-dom";
import CreateJob from './pages/CreateJob'
import Dashboard from './pages/Dashboard'
import EditJobs from './pages/EditJobs'
import Login from './pages/Login'
import ManageJobs from './pages/ManageJobs'
import Register from './pages/Register'
import ViewJobs from './pages/ViewJobs'
import PrivateRoutes from './utils/PrivateRoutes'
import { Fragment } from "react";
import Home from "./pages/Home";

const AllRoutes = () => {

  return (

    <Fragment>
      <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/viewjobs' element={<ViewJobs />} />
            <Route path='/createjobs' element={<CreateJob />} />
            <Route path='/managejobs' element={<ManageJobs />} />
            <Route path='/editjobs/:_id' element={<EditJobs />} />
          </Route>
          <Route path='/home' element={<Home />} />
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
    </Fragment>

  )
}

export default AllRoutes;