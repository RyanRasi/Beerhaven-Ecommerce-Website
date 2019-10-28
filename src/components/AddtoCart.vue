<template>
  <div class="add-to-cart">
    
    <button class="btn btn-primary mt-3" @click="addToCart">Add to Cart</button>

  </div>
</template>

<script>
export default {
  name: "add-to-cart",
  props: {
    name: String,
    price: String,
    image: String,
    productId: String
  },
  data() {
    return {
      item: {
        productName: this.name,
        productImage: this.image,
        productPrice: this.price,
        productId: this.productId,
        productQuantity: 1
      }
    };
  },
  methods: {
    addToCart() {
      $("#shoppingCart").modal("show");
      /*
      if (this.price > 4.50) {
        this.name = this.name + " Multipack"
        this.$store.commit("addToCart", this.item);
      } else {
        this.$store.commit("addToCart", this.item);
      }
      */

      this.$store.commit("addToCart", this.item);

      Toast.fire({
        type: "success",
        title: "Added " + this.name + " to cart!"
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only 
<style scoped lang="scss">

</style>
-->