import React, { Children } from 'react';
import { Navigate } from 'react-router-dom';


type PrivateRouter = {
    chlidren: JSX.Element
}

const PrivateRouter = (props: PrivateRouter) => {
    const isAdmin = false;
    if (!isAdmin) {
        return <Navigate to="/login" />
    }
  return props.chlidren
}

export default PrivateRouter