<template>
  <div class="checkout">
    <Navbar></Navbar>
    <Login></Login>
    <shopping-cart></shopping-cart>
    <div class="container-fluid mt-5 pt-5">
      <div class="row">
        <div class="col-md-9">
          <h4 class="py-4">Checkout Page</h4>
          <ul>
            <li v-for="item in $store.state.cart" :key="item">
              <hr>
              <img
                :src="item.productImage"
                width="80px"
                class="float-left mr-3"
                alt="Product Image"
              />
              <div class="media-body">
                <h5 class="mt-0">
                  {{item.productName}}
                  <span
                    id="delete"
                    class="float-right"
                    @click="$store.commit('removeFromCart',item)"
                  >&#10006;</span>
                </h5>
                <p class="mt-0">Price: {{item.productPrice | currency('£')}}</p>
                <br />
                <p class="float-left">Quantity : {{item.productQuantity }}</p>
                <p
                  class="align-center"
                >Sub Price : {{item.productQuantity * item.productPrice | currency('£')}}</p>
              </div>
              
            </li>
          </ul>
        </div>
        <div class="col-md-3">
          <hr />
          <h6 class="py-4">Quantity : ( {{ this.$store.getters.totalQuantity}} item/items):</h6>
          <hr />
          <p>Subtotal : {{ this.$store.getters.subPrice | currency('£') }}</p>
          <hr />
          <p>Tax (20%) : {{ this.$store.getters.totalTax | currency('£') }}</p>
          <hr />
          <p>Total : {{ this.$store.getters.totalPrice | currency('£') }}</p>
          <a href="./checkoutpage" class="btn btn-warning">Proceed to Checkout</a>
        </div>
      </div>
    </div>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import Login from "@/components/Login.vue";
import "../js/loginslide.js";

export default {
  name: "checkout",
  components: {
    Login
  }
};
</script>

<style scoped lang="scss">
.checkout {
  background: linear-gradient(to left, #3e5151, #decba4);
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.container-fluid{
  background: rgba(255,255,255,0.4);
}
#delete {
font-size: 30px;
}
</style>
