import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";


const initialState = {
    cart : [],
    products : [
        { name: 'Lenovo laptop',price: 2000, id: 1},
        { name: 'Asus laptop',price: 3000, id: 2},
        { name: 'HP laptop',price: 1800, id: 3},
        { name: 'Mac laptop',price: 4000, id: 4},
        { name: 'Dell laptop',price: 1000, id: 5}
    ]
}
const cartReducer = (state=initialState, action) => {

    switch (action.type){
        case ADD_TO_CART:
            const newItem = {
                productId : action.id ,
                name : action.name,
                cartId: state.cart.length +1 
            }
            const newCart = [...state.cart, newItem];
            return {...state,cart: newCart};
        case REMOVE_FROM_CART:
            const id = action.id;
            const remainingCart = state.cart.filter(item => item.cartId !== id);
            return {...state, cart: remainingCart};
        default: 
            return state;
    }
}

export default cartReducer;