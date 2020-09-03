<template>
  <tfoot id="my-cart-footer">
    <!-- CART FOOTER -->
    <tr>
      <td colspan="4">
        There are
        <b>{{tfootInfo.countItem}}</b> items in your shopping cart.
      </td>
      <td colspan="2" class="total-price text-left">{{formatprice}}</td>
    </tr>
  </tfoot>
</template>

<script>

import {mapGetters} from 'vuex';
import { toCurrency } from "../../helpers";

export default {
  name: "c-cartFooter",
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      'tfootInfo' : 'cart/tfootInfo'
    }),
    formatprice() {
      return toCurrency(this.tfootInfo.totalPrice);
    }
  }
};
</script>

<style>
</style>
