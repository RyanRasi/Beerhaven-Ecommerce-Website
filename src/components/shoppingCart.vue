<template>
  <div class="shopping-cart">
    <!-- Modal -->
    <div
      class="modal fade"
      id="shoppingCart"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">My Basket</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <ul>
              <li v-for="item in $store.state.cart" :key="item">
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
                <hr />
              </li>
            </ul>
          </div>
          Total Tax (20%) : {{ this.$store.getters.totalTax | currency('£') }}
          <br />
          {{ this.$store.getters.totalQuantity}} Items || Total Price : {{ this.$store.getters.totalPrice | currency('£') }}
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Continue Shopping</button>
            <button type="button" class="btn btn-primary" @click="checkout">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "shoppingCart",
  props: {
    msg: String
  },
  methods: {
    checkout() {
      $("#shoppingCart").modal("hide");
      this.$router.push("/checkout");
    }
  }
};
</script>

<style scoped lang ="scss">
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
#delete {
font-size: 30px;
}
</style>