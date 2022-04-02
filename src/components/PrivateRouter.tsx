import React, { Children } from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticate } from '../utils/localstorage';
import { Route } from 'react-router-dom'


const PrivateRouter = (props: { children: JSX.Element}) => {
    const user = isAuthenticate();

    if(!user) {
        return <Navigate to="/signin" />
    }
    return props.children
  }

export default PrivateRouter