import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../redux/actions/cartActions';

const Cart = (props) => {
    const {cart,removeFromCart} = props;
    return (
        <div>
            <h4>Cart: </h4>
            <div>
           <ul style={{listStyle:'square'}}>
           {
               cart.map(pd => <li className="mb-2">{pd.name}<button className="btn btn-danger ms-3" onClick={() =>removeFromCart(pd.cartId)}>X</button></li>)
           } 
           </ul>
        </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        cart: state.cart,
    }
}
const mapDispatchToProps = {
    removeFromCart: removeFromCart
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart);