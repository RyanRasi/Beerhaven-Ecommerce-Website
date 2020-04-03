<template>

  <div class="alert-box">
<div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Free Delivery for Orders Over £50</strong>
  <button type="button" class="close px-2 py-1" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true"><h2>&times;</h2></span>
  </button>
</div>

<nav class="navbar navbar-expand-lg navbar-light bg-light text-center">
  <a class="navbar-brand text-center" href="#">BeerHaven</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto mx-auto">
      <li class="nav-item">
        <router-link to="/" class="nav-link" href="#">HOME</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/productlist" class="nav-link" href="#">BEERS</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/productlist" class="nav-link" href="#">TASTES</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/" class="nav-link" href="#">VISIT THE BREWERY</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/" class="nav-link" href="#">STORIES & EVENTS</router-link>
      </li>
          <li class="nav-item">
        <router-link to="/" class="nav-link" href="#">SUBSCRIPTION</router-link>
      </li>
          <li class="nav-item">
        <router-link to="/about" class="nav-link" href="#">ABOUT</router-link>
      </li>
              <li class="nav-item">
        <router-link to="/" class="nav-link" href="#">CONTACT</router-link>
      </li>
    </ul>

 <form class="form-inline my-2 my-lg-0">
  <!-- Undecided on usage
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
  -->
      <a class="btn btn-outline-info my-2 my-sm-0" data-toggle="modal" data-target="#shoppingCart">Basket<i class="fa fa-shopping-cart"></i></a>
      <p>&nbsp;</p>
      <a class="btn btn-outline-success my-2 my-sm-0" data-toggle="modal" data-target="#login">Login</a>
    </form>

  </div>
  
</nav>

  </div>
</template>

<script>

export default {
  name: "Navbar",
  props: {
    msg: String
  },
  components:{}
};
import "../js/loginslide.js";
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
form {
  background-color: rgba(0, 0, 0, 0)
}
.alert {
  margin-bottom: 0;
  border-radius: 0;
}
</style>
