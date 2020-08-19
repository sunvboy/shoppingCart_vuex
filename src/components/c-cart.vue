<template>
  <!-- CART : START -->
  <div class="col-xs-12 col-sm-12 col-md-7 col-lg-7">
    <div class="panel panel-info">
      <div class="panel-heading">
        <h1 class="panel-title">Your Cart</h1>
      </div>
      <div class="panel-body">
        <table class="table">
          <thead>
            <tr>
              <th width="4%">#</th>
              <th>Pokemon</th>
              <th width="15%">Price</th>
              <th width="4%">Quantity</th>
              <th width="20%">Subtotal</th>
              <th width="25%">Action</th>
            </tr>
          </thead>
          <tbody v-if="items.length" id="my-cart-body">
            <c-cartItem 
                v-for="(item, index) in items" 
                :index="index"
                :key="item.product.id"
                :item="item">
                </c-cartItem>
          </tbody>
          <tr v-else>
            <th colspan="6">{{ NOTI_EMPTY_PRODUCT }}</th>
          </tr>
          <c-cartFooter></c-cartFooter>
        </table>
      </div>
    </div>
  </div>
  <!-- CART : END -->
</template>

<script>
import CCartItem from "./cart/c-cartItem";
import CCartFooter from "./cart/c-cartFooter";
import { mapState } from "vuex";
import { NOTI_EMPTY_PRODUCT } from '../helpers/config';

export default {
  name: "c-cart",
  components: {
    CCartItem,
    CCartFooter,
  },
  data() {
    return {
		  NOTI_EMPTY_PRODUCT
	  }
  },
  computed: {
    ...mapState({
      items: (state) => state.cart.listCarts,
	}),
	
  },
};
</script>

<style>
</style>
