export default {
    BUY_PRODUCT: (state, data) => {
        state.listCarts.push(data);
    }
}