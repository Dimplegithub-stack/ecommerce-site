import React, { Component } from 'react'
import { Link } from "react-router-dom"
import logo from '../logo.svg'
import styled from 'styled-components'
import Auth from './Auth'
import {ButtonContainer} from './ButtonContainer'

export default function Navbar (props) {
        return (
            <div>
                <NavWrapper className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
                 
                    <Link to='/'><img src={logo} alt="store" className="navbar-brand" /></Link>
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item ml-5">
                            <Link to="/" className="nav-link"> Mobile Products</Link>
                        </li>
                    </ul>
                    <Link to="/Cart" className="ml-auto">
                        <ButtonContainer><span className="<mr-2></mr-2>"><i className="fas fa-cart-plus" /></span>My cart</ButtonContainer>
                    </Link>
                   
                        <button onClick={()=>{
                            Auth.logout(()=>{
                                props.history.push("/");
                            })
                        }}>Logout</button>
                   
                </NavWrapper>
            </div>
        )
    
}

const NavWrapper = styled.nav ` 
background:var(--mainBlue);
.nav-link{
    color:var(--mainWhite) !important;
 font-size:1.3rem; 
 text-transform: capitalize;  
}

`

// export default class Navbar extends Component {
//     render() {
//         return (
//             <div>
//                 <nav className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
                 
//                     <Link to='/'><img src={logo} alt="store" className="navbar-brand" /></Link>
//                     <ul className="navbar-nav align-items-center">
//                         <li className="nav-item ml-5">
//                             <Link to="/" className="nav-link"> Mobile Products</Link>
//                         </li>
//                     </ul>
//                     <Link to="/Cart" className="ml-auto">
//                         <ButtonContainer><span className="mr-2"><i className="fas fa-cart-plus" /></span>My cart</ButtonContainer>
//                     </Link>
                   
//                         <button onClick={()=>{
//                             Auth.logout(()=>{
//                                 this.props.history.push("/");
//                             })
//                         }}>Logout</button>
                   
//                 </nav>
//             </div>
//         )
//     }
// }