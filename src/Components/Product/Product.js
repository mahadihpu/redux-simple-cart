import React from 'react';

const Product = (props) => {
    const { product,addToCart} = props;
    const cardStyle = {
        padding: '20px 50px 50px 50px',
        width: '40%',
    }
    return (
        <div className="card mb-3" style={cardStyle}>
            <h5 className="text-center">{product.name}</h5>
            <h6 className="text-center">Price: {product.price}</h6>
            <button className="btn btn-primary" onClick={() =>addToCart(product.id,product.name)}>add to cart</button>
        </div>
    );
};

export default Product;