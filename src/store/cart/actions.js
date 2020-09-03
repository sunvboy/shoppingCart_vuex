export default {
    actBuyProduct({commit, state},data){

        const index = state.listCarts.findIndex(function(cart){
            return cart.product.id === data.product.id;
        });
        if(index === -1){
            //console.log(data);
            commit('BUY_PRODUCT',data);
        }else{
            //console.log(index);
            let quantity = data.quantity;
            commit('CHANGE_QUANTITY',{index,quantity});
        }
    },
    actDeleteCart({commit,state},cartDelete){
        var newArrayCart = state.listCarts.filter(item => {
            return item.product.id !== cartDelete.product.id
        })
        commit('CHANGE_LIST_CART_DELETED',newArrayCart);

    },
    actUpdateCart({commit, state},data){
        const index = state.listCarts.findIndex(function(cart){
            return cart.product.id === data.cartUpdate.product.id;
        });
        if(index !== -1){
            let quantity = data.quantity;
            commit('CHANGE_QUANTITY',{index,quantity,replace:true})
        }
       
    }
}