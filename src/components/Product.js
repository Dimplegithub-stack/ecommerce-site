import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { ProductDataConsumer } from './Context'
import styled from 'styled-components'
// this is to check for the data values and type of it matching the values in data filr
import PropTypes from 'prop-types'


export default class Product extends Component {
    render() {
        const { id, title, img, price, inCart } = this.props.product;
        return (

            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <ProductDataConsumer>
                        {
                            value => (
                                <div className="img-container p-5" onClick={() => value.handleDetail(id)}>
                                    <Link to="/details">
                                        <img src={img} alt="product" className="card-img-top" />
                                    </Link>
                                    <button className="card-btn align-center" disabled={inCart ? true : false} onClick={() => value.addToCart(id)}>
                                        {inCart ? (<p className="text-capitalize mb-0" disabled>Added to Cart</p>) : (<p className="text-capitalize mb-0" disabled>Add to Cart</p>)}
                                    </button>
                                </div>
                            )}

                    </ProductDataConsumer>

                    {/* card footer */}
                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0 font-italic font-weight-bold">
                            {title}
                        </p>
                        <h5 className="text-blue font-italic mb-0"><span className="mr-1">${price}</span></h5>
                    </div>
                </div>
            </ProductWrapper>


        )
    }
}
// it gives the warning saying the type of data properties
Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
    }).isRequired

}
const ProductWrapper = styled.div `
.card{
    border-color:transparent;
    transition:all 1s linear;   
}
.card-footer{
    background: transparent;
    border-top:transparent;
    transition:all 1s linear;   
  
}
&:hover{
    .card{
        border:0.04rem solid rgba(0, 0, 0, 0.2);
        box-shadow:2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
.card-footer{
    background:rgba(247,247,247);
   }
}

.img-container{
    position:relative;
    overflow:hidden;
}
.card-img-top{
    transition:all 1s linear;
}
.img-container:hover .card-img-top{
    transform:scale(1.2);
}
.card-btn{
    position:absolute;
    bottom:0;
    right:0;
    padding:0.2rem 0.4rem;
    background:var(--lightBlue);
    border:none;
    color:var(--mainWhite);
    font-size:1.0rem;
    border-radius:0.5rem 0 0 0;
    transform:translate(100%, 100%);
    transition:all 1s linear;
}
.img-container:hover .card-btn{
    transform:translate(0,0);
}
`;


