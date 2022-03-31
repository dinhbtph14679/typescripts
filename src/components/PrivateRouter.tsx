import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticate } from '../utils/localstorage';


type PrivateRouterProps = {
    chlidren: JSX.Element
}

const PrivateRouter = (props: PrivateRouterProps) => {
    const { user } = isAuthenticate();
    if(!user?.role){
        return <Navigate to="/signin" />
    }
    return props.chlidren
}

export default PrivateRouter