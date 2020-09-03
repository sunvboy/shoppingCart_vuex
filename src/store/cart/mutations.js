export default {
    BUY_PRODUCT: (state, data) => {
        state.listCarts.push(data);
    },
    CHANGE_QUANTITY: (state, data) => {
        if(data.replace){
            state.listCarts[data.index].quantity = data.quantity;

        }else{
            state.listCarts[data.index].quantity += data.quantity;
        }
    },
    CHANGE_LIST_CART_DELETED: (state, newArrayCart) => {
        state.listCarts = newArrayCart;
    },
}