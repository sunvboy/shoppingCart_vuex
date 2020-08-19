<template>
  
  <!-- CART BODY -->
    <tr>
      <th scope="row">{{index+1}}</th>
      <td>{{item.product.title}}</td>
      <td>{{toCurrency}}</td>
      <td>
        <input  type="number" :value="item.quantity" min="1" />
      </td>
      <td>
        <strong>{{toTotal}}</strong>
      </td>
      <td>
        <a class="label label-info update-cart-item" href="#" data-product>Update</a>
        <a class="label label-danger delete-cart-item" href="#" data-product>Delete</a>
      </td>
    </tr>
</template>

<script>
import {toCurrency} from '../../helpers';
export default {
  name: "c-cartItem",
  props:{
    item:{type:Object,default:null},
    index:{type:Number,default:0},
  },
  data() {
    return {

    };
  },
  computed:{
    toCurrency(){
      return toCurrency(this.item.product.price);
    },
    toTotal(){
      return toCurrency(this.item.product.price*this.item.quantity);
    }
  }
};
</script>

<style>
</style>
