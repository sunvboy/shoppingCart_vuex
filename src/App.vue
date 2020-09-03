<template>
  <div id="app">
   <div class="container" >
    <c-loading :class="{showLoading : isloading}"></c-loading>

		<!-- TITLE : START -->
		<c-title></c-title>
		<!-- TITLE : END -->

		<div class="row">
			<!-- LIST PRODUCT : START -->
			<c-product></c-product>
			<!-- LIST PRODUCT : END -->
			<!-- CART : START -->
      <c-cart></c-cart>
			<!-- CART : END -->
		</div>
	</div>
  <notifications group="foo" />

  </div>
</template>

<script>
import { mapState } from 'vuex';
import CTitle from './components/c-title';
import CProduct from './components/c-product';
import CCart from './components/c-cart';
import CLoading from './components/c-loading';
export default {
  name: 'app',
  components:{
    CTitle,CProduct,CCart,CLoading
  },
  data () {
    return {
     
    }
  },
  computed: mapState(['isloading'])
}
</script>

<style>

</style>
