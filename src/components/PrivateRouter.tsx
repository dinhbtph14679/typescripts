import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticate } from '../utils/localstorage';


type PrivateRouterProps = {
    chlidren: JSX.Element
}

const PrivateRouter = (props: PrivateRouterProps) => {
   const isAdmin = false;
   if (isAdmin) {
       return <Navigate to="/" /> 
   }
   return props.chlidren
}

export default PrivateRouter