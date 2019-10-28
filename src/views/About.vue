<template>
  <div class="about">
    
 <Navbar></Navbar>
<Login></Login>
<shopping-cart></shopping-cart>

    <h1>This is an about page</h1>
  </div>
</template>

<script>
import Login from "@/components/Login.vue";
import "../js/loginslide.js";

export default {
  name: "about",
    components: {
    Login
  }
};
</script>
<style scoped lang="scss">
    .about {
      background: linear-gradient(to left, #3e5151, #decba4);
    }
</style>