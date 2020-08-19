<template>
  <div>
    <!-- PRODUCT : START -->
    <div class="media product">
      <div class="media-left">
        <a href="#">
          <img class="media-object" :src="urlSrc" alt="charmander" />
        </a>
      </div>
      <div class="media-body">
        <h4 class="media-heading">{{item.title}}</h4>
        <p>{{item.description}}</p>
        <template v-if="item.canBuy">
          <input v-model="quantity" type="number" value="1" min="1" />
          <a
            @click.prevent="handleBuyProduct()"
            data-product="1"
            href="#"
            class="price"
          >{{formatprice}}</a>
        </template>

        <span v-else class="price">{{formatprice}}</span>
      </div>
      <hr />
    </div>
    <!-- PRODUCT : END -->
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { toCurrency, validateQuantity } from "../helpers";
import { NOTI_GREATER_THAN_ONE } from "../helpers/config";
export default {
  name: "c-productItem",
  props: {
    item: { type: Object, default: null },
  },
  data() {
    return {
      quantity: 1,
    };
  },
  computed: {
    urlSrc() {
      let src = "/dist/images/" + this.item.image;
      return src;
    },
    formatprice() {
      return toCurrency(this.item.price);
    },
  },
  methods: {
    ...mapActions({
      actBuyProduct: "cart/actBuyProduct",
    }),
    handleBuyProduct() {
      const check = validateQuantity(this.quantity);
      if (check) {
        let data = {
          quantity: parseInt(this.quantity),
          product: this.item,
        };
        //this.$store.dispatch('actBuyProduct',data);
        this.actBuyProduct(data);
      } else {
        this.$notify(NOTI_GREATER_THAN_ONE);
      }
    },
  },
};
</script>


