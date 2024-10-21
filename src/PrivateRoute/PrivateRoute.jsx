import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthContextProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation();
    console.log(location.pathname)

    if(loading){
        return <div className='flex justify-center text-blue-500'>
            <span className="loading loading-dots loading-sm"></span>
            <span className="loading loading-dots loading-md"></span>
        </div>
    }

    if(user?.email){
        return children;
    }
    return <Navigate state={location.pathname} to='/login' replace></Navigate>;
};

export default PrivateRoute;