import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Root/Main';
import Home from './page/Home/Home/Home';
import LogIn from './components/LogIn/LogIn';
import Registration from './components/Registration/Registration';
import AuthContextProvider from './AuthProvider/AuthContextProvider';
import { ToastContainer } from 'react-toastify';
import LeftServiceCard from './page/ServiceDetails/LeftServiceCard/LeftServiceCard';
import RightServiceCard from './page/ServiceDetails/RightServiceCard/RightServiceCard';
import ServiceDetail from './page/ServiceDetails/ServiceDetail/ServiceDetail';
import Booking from './page/Booking/Booking';
import MyBooking from './page/Booking/MyBooking';
import PrivateRoute from './PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/servicedetail/:id",
        element: <PrivateRoute><ServiceDetail></ServiceDetail></PrivateRoute>,
      },
      {
        path: "/booking/:id",
        element: <PrivateRoute><Booking></Booking></PrivateRoute>,
      },
      {
        path: "/mybooking",
        element: <PrivateRoute><MyBooking></MyBooking></PrivateRoute>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto'>
    <StrictMode>
      <AuthContextProvider>
          <RouterProvider router={router} />
          <ToastContainer />
      </AuthContextProvider>
  </StrictMode>
  </div>
)
