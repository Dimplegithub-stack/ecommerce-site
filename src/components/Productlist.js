import React, { Component } from 'react'
 import Product from './Product'
 import Navbar from './Navbar';
import Title from './Title'
import { ProductDataConsumer } from './Context'

export default class Productlist extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>

                <React.Fragment>
                    <div className="py-5">
                        <div className="container">
                        <Navbar {...this.props} />
                            <Title name="our" title="Products" />
                            <div className="row">
                         
                                <ProductDataConsumer>
                                    {
                                        value => {
                                            return value.products.map(product=>{
                                            return <Product product={product} key={product.id} />
                                            })
                                        }
                                    }
                                </ProductDataConsumer>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            </div>
        )
    }
}
