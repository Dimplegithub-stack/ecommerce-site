import React, { Component } from 'react'
import { ProductDataConsumer } from './Context'
import { Link } from "react-router-dom"
import Navbar from './Navbar';
import {ButtonContainer} from './ButtonContainer'


export default class Details extends Component {
    render() {
        return (
            <React.Fragment>
               <Navbar />
            <ProductDataConsumer>
                {(value) => {
                    const { id, BCursor, img, company, price, title, inCart, info } = value.detailProduct;
                    return (
                        <div className="container py-5">
                            {/* title */}
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            {/* title */}
                            {/* product info */}

                            <div className="row">
                                <div className="col-6 col-md-6 mx-auto  my-3">
                                    <img src={img} className="img-fluid" alt="productimg" />
                                </div>
                                <div className="col-6 col-md-6 mx-auto text-capitalize  my-3">
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">Model: {title}
                                        Made by: <span className="text-uppercase">{company}</span></h4>
                                    <h4 className="text-blue"><strong>Price:<span>$</span>{price}</strong></h4>
                                    <p className="text-capitalize font-weight-bold mt-3">Some Info about the product:</p><p className="text-muted lead">{info}</p>

                                    {/* button */}
                                    <div>
                                        <Link to="/productlist"><ButtonContainer>Back to Products</ButtonContainer></Link>
                                        <ButtonContainer disabled={inCart ? "true" : "false"} onClick={()=>{value.addToCart(id)}}> {inCart ? "Added to Cart" : "Add to Cart"}</ButtonContainer></div>
                                    {/* button */}
                                </div>
                            </div>
                            {/* product info */}
                        </div>
                    )

                }}
            </ProductDataConsumer>
            </React.Fragment>
        )
    }
}
