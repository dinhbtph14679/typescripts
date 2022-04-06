import React, { Children } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { isAuthenticate } from '../utils/localstorage';
import { Route } from 'react-router-dom'


const PrivateRouter = (props: { children: JSX.Element}) => {
    const user = isAuthenticate();
    const navigate = useNavigate();
    if(!user) {
        return (
          <div>
             {navigate('/')}
          </div>
        )
    }
    return props.children
  }

export default PrivateRouter