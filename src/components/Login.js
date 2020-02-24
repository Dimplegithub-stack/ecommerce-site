import React, { Component } from 'react'
import Auth from './Auth'

export default function Login(props)  {
        return (
            <div className="container mx-auto text-center mt-5">
                <h1 className="mb-5">protected react Router</h1>
                <h2>Welcome to Store</h2>
                <button onClick={()=>{
                    Auth.login(()=>{
                        props.history.push("./productlist");
                    })
                }}>Login</button>

                
                
            </div>
        )
    
}
