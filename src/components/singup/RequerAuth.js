import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loader from '../sherd/Loader';

const RequerAuth = ({children}) => {
    const [user,loading] = useAuthState(auth);
    const location = useLocation()
    if(!user){
        if(loading){
            return <Loader />
        }
        return <Navigate to="/" state={{from: location}} replace />
    } 
    return children;
};

export default RequerAuth;