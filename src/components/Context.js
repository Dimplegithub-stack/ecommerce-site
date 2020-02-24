import React, { Component } from 'react'
import { storeProducts, detailProduct } from '../data'

const ProductContext = React.createContext();

//provider
//consumer

class ProductDataProvider extends Component {
    state = {
        // products: storeProducts,To get the freash data we gonna change as mentioned below
        products: [],
        detailProduct: detailProduct
    }
    // its utility method get the detailon id
    getItem= (id) => {
        const product = this.state.products.find(item =>item.id=== id);
        return product;
    }
    handleDetail = (id) => {
        const product = this.getItem(id);
        this.setState(()=>{
            return {detailProduct: product}
        })
    }
    addToCart = () => {
        console.log("hello from add to cart")
    }
    componentDidMount() {
        this.setProducts();
    }
    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = { ...item };
            tempProducts = [...tempProducts, singleItem];
        })
        this.setState(() => {
            return { products: tempProducts };
        })

    }
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}
const ProductDataConsumer = ProductContext.Consumer;
export { ProductDataProvider, ProductDataConsumer };