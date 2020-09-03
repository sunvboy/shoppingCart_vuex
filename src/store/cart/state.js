let initlocalStorage = window.localStorage.getItem('cart');
initlocalStorage = JSON.parse(initlocalStorage).listCarts || [];

export default {
    listCarts: initlocalStorage
}