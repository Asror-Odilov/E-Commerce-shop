export const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CARD":
            return {...state, cart: [...state.cart, {...action.payload, qty: 1}]};
        case "REMOVE_FROM_CARD":
            return {...state, cart: state.cart.filter((c) => c.id !== action.payload.id)}    
        case 'ABOUT_PRODUCT':
            return {...state, product: [{...action.payload}]};
        default:
            return state
    }
}