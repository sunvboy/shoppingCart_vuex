<template>
  <!-- CART BODY -->
  <tr>
    <th scope="row">{{index+1}}</th>
    <td>{{item.product.title}}</td>
    <td>{{toCurrency}}</td>
    <td>
      <input @blur="handleUpdate" type="number" :value="item.quantity" min="1" />
    </td>
    <td>
      <strong>{{toTotal}}</strong>
    </td>
    <td>
      <a
        @click.prevent="handleDelete"
        class="label label-danger delete-cart-item"
        href="#"
        data-product
      >Delete</a>
    </td>
  </tr>
</template>

<script>
import { mapActions } from "vuex";
import { NOTI_ACT_DELETE } from "../../helpers/config";
import { toCurrency, validateQuantity } from "../../helpers";
import { NOTI_GREATER_THAN_ONE,NOTI_ACT_UPDATE } from "../../helpers/config";

export default {
  name: "c-cartItem",
  props: {
    item: { type: Object, default: null },
    index: { type: Number, default: 0 }
  },
  data() {
    return {};
  },
  computed: {
    toCurrency() {
      return toCurrency(this.item.product.price);
    },
    toTotal() {
      return toCurrency(this.item.product.price * this.item.quantity);
    }
  },
  methods: {
    ...mapActions({
      actDeleteCart: "cart/actDeleteCart",
      actUpdateCart: "cart/actUpdateCart",
      setLoading: "setLoading"
    }),
    handleDelete() {
      if (confirm("Bạn có muốn xóa đơn hàng này không")) {
        this.actDeleteCart(this.item);
        this.$notify(NOTI_ACT_DELETE);
      }
    },
    handleUpdate(e) {
      this.setLoading(true);
      setTimeout(() => {
        let quantity = e.target.value;
        const check = validateQuantity(quantity);
        if (check) {
          let data = {
            cartUpdate: this.item,
            quantity: parseInt(quantity)
          };
          this.actUpdateCart(data);
        } else {
          e.target.value = this.item.quantity;
          this.$notify(NOTI_GREATER_THAN_ONE);
        }
        this.setLoading(false);
        this.$notify(NOTI_ACT_UPDATE)
      }, 1000);
    }
  }
};
</script>

<style>
</style>
