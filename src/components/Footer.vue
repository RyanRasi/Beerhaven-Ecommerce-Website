<template>
  <div class="footer">
<h4>PLEASE DRINK RESPONSIBLY</h4>
<h5>drinkaware.co.uk</h5>
<h6>for the facts</h6>
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
h4, h5, h6 {
  color: white;
}
h6 {
margin-bottom: 0px;
}
</style>
