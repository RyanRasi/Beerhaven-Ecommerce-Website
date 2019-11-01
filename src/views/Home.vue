<template>
  <div class="home">

 <Navbar></Navbar>
<Login></Login>
<shopping-cart></shopping-cart>
<home-animated></home-animated>
<footer-bar></footer-bar>
  </div>
</template>

<script>

// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Login from "@/components/Login.vue";
// import "../js/loginslide.js";

export default {
  name: "home",
  components: {
    HelloWorld,Login
  }
};
</script>
