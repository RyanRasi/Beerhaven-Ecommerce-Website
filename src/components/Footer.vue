<template>
  <div class="footer">
<div class="container-fluid">
  <div class="row" style="border-bottom: 1px solid white;">
    <div class="col-sm">
      <h5><ins>About Us</ins></h5>
      <p>Our Story</p>
      <p>History</p>
      <p>Careers</p>
      <p>Enjoy Responsibly</p>
    </div>
    <div class="col-sm">
      <h5><ins>Shop</ins></h5>
      <p>Beers</p>
      <p>Mixed & Whole Cases</p>
      <p>Spirits</p>
      <p>Fermented Sodas</p>
      <p>Merchandise</p>
    </div>
    <div class="col-sm">
      <h5><ins>Customer Service</ins></h5>
      <p>Contact Us</p>
      <p>Delivery</p>
      <p>Terms & Conditions</p>
      <p>Refunds & Returns</p>
      <p>Buying Guides</p>
      <p>Privacy & Cookie Policies</p>
      <p>Login</p>
    </div>
        <div class="col-sm">
<form style="background-color: white;">
  <div class="form-group">
    <h5 style="color: black;">BeerHaven Newsletter</h5>
    <label for="exampleInputEmail1">First Name</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter First Name">

    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
  </div>
</div>
<h6>Please drink responsibly drinkaware.co.uk for the facts</h6>
<h5>©2019 - 2020 BEERHAVEN CRAFT BREW</h5>
<h6>WEBSITE PROUDLY DESIGNED & BREWED BY Ryan Maxwell Rasi. <a href="https://github.com/RyanRasi"><ins>Github.com/RyanRasi</ins></a></h6>
  </div>
</template>

<script>

export default {
  name: "Footer",
  props: {
    msg: String
  },
  components:{}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
p, h1, h2, h3, h4, h5, h6 {
  color: white;
}
a {
  color: white;
}
h6 {
margin-bottom: 0px;
}
.footer {
background: black;
}
</style>
