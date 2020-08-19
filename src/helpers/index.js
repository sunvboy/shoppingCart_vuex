//giá sản phẩm
const toCurrency = function(value,unit="USD",dir="right"){
    if(dir === 'right') return value + ' ' + unit;
    else return unit + ' ' + value;
}

//kiểm tra xem string ep về int hợp lệ hay không? check quantity > 1hay không
const validateQuantity = function(value){

    let quantity = parseInt(value);
    if(quantity == value && !isNaN(quantity)){
        return quantity >= 1;
    }
    return false;
}

export {
    toCurrency,validateQuantity
}
