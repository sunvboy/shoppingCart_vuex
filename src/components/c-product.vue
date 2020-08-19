<template>
  <div>
    <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5">
      <div class="panel panel-primary">
        <div class="panel-heading">
          <h1 class="panel-title">List Products</h1>
        </div>
        <div class="panel-body" id="list-product">
          <!-- PRODUCT : START -->
          <CProduct v-for="(item,index) in products" :key="index" :item="item"></CProduct>
          <!-- PRODUCT : END -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import CProduct from "./c-productItem";
export default {
  name: "c-product",
  components: {
    CProduct,
  },
  data() {
    return {};
  },computed:{
    ...mapState({
      products: state => state.product.productList
    })

  }
};
</script>


