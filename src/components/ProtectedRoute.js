import React, { Component } from 'react'
import { Route, Redirect } from "react-router-dom"
import Auth from './Auth'


export default function ProtectedRoute ({ Component: component, ...rest })  {
    return (
        <Route {...rest} render={
            (props) => {
                if (Auth.isAuthenticated()) {
                    return <Component {...props} />
                } else {
                    return <Redirect to={
                        {
                            pathname: "/",
                            state: { from: props.location }
                        }
                    }
                    />
                }

            }
        }
        />
    );
}

