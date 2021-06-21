import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions';
import Product from '../Product/Product';

const Shop = (props) => {
   const {products,addToCart} = props;
   console.log(props)
    return (
        <div className="ps-5">
            <h4 className="mb-4">Products:</h4>
            {
                products.map(pd => <Product key={pd.id} product={pd} addToCart={addToCart}/>)
            }
        </div>
    );
};

const mapStateToProps = state => {
    return {
        products: state.products
    }
}
const mapDispatchToProps = {
    addToCart: addToCart
}
export default connect(mapStateToProps,mapDispatchToProps)(Shop);