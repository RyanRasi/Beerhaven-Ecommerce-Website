<template>
  <div class="checkoutpage">
<h1>Checkout</h1>
<div class="container-fluid">
  <div class="row">
    <div class="col-sm-8">

<div class="col">
  
  <div style="margin-top:5%">

      <div class="form-group">
    <label for="exampleInputEmail1">Debit or Credit Card Number</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Example &quot;4242 4242 4242 4242&quot;">
    <small id="emailHelp" class="form-text text-muted">We'll never share your card details with anyone else.</small>
  </div>
  <div class="row">
<div class="col-4">
  <div class="form-group">
    <label for="exampleInputEmail1">Expiry Date Month</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="MM E.g. &quot;01&quot;">

  </div>
  </div>
  <div class="col-4">
  <div class="form-group">
        <label for="exampleInputEmail1">Expiry Date Year</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="YY E.g. &quot;12&quot;">
  </div>
  </div>
    <div class="col-4">
  <div class="form-group">
    <label for="exampleInputEmail1">CVV Code</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="E.g. &quot;001&quot;">
  </div>
  </div>
  </div>
<h5>Billing Address</h5>

  <div class="row">
    <div class="col-md-6">
      <input type="text" class="form-control" placeholder="First name">
    </div>
    <div class="col-md-6">
      <input type="text" class="form-control" placeholder="Last name">
    </div>
  </div>




  <div class="form-group col-md-8" style="display: inline-block;">
    <label for="inputAddress">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
  </div>
  <div class="form-group col-md-8" style="display: inline-block;">
    <label for="inputAddress2">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
  </div>
  
  <div class="form-group col-md-8" style="display: inline-block;">
      <label for="inputCity">City</label>
      <input type="text" class="form-control" id="inputCity" placeholder="London">
    </div>

    </div>

    <div class="row">
    <div class="col-md-6">
      <label for="inputState">County</label>
      <input type="text" class="form-control" id="inputCounty" placeholder="Greater London">
    </div>
    
    <div class="col-md-6">
      <label for="inputZip">Postcode</label>
      <input type="text" class="form-control" id="inputZip">
    </div>
</div>
  </div>
    </div>
    
      
    <div class="col-sm-4">
          <h6 class="py-4">Quantity : ( {{ this.$store.getters.totalQuantity}} item/items):</h6>
          <hr />
          Estimated delivery time: 3-5 working days
          <hr />
          <p>Subtotal : {{ this.$store.getters.subPrice | currency('£') }}</p>
          <hr />
          <p>Tax (20%) : {{ this.$store.getters.totalTax | currency('£') }}</p>
          <hr />
          <p>Total : {{ this.$store.getters.totalPrice | currency('£') }}</p>
    
    </div>
    </div>
  </div>
</div>

</template>

<script>
export default {
  name: "checkoutpage",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
body,html {
  height: 100vh;
}

</style>
