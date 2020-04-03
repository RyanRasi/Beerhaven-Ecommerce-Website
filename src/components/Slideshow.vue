<template>

  <div class="slide-show">
<div class="jumbotron" style="padding-top: 16px; padding-bottom: 16px">
    <h1 class="display-6"><ins>Our Latest Beerios</ins></h1>
</div>

<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
<div class="carousel-item active">
  <img src="https://images.askmen.com/1080x540/2019/03/26-052442-man_goes_on_beer_only_diet_loses_25_pounds.jpg" class="img-fluid" alt="...">
  <div class="carousel-caption d-none d-md-block">
    <h5 class="slideshowText">BeerHovens 5th</h5>
    <p class="slideshowInfo">Try our fith installment of our best selling classic!</p>
  </div>
</div>
<div class="carousel-item">
  <img src="https://www.luxurylifestylemag.co.uk/wp-content/uploads/2019/11/bigstock-Glasses-with-different-sorts-o-265287118.jpg" class="img-fluid" alt="...">
  <div class="carousel-caption d-none d-md-block">
    <h5 class="slideshowText">The Hopper</h5>
    <p class="slideshowInfo">Reinvigorate your tastebuds, it will turn you upside down!</p>
  </div>
</div>
<div class="carousel-item">
  <img src="https://www.beerguild.co.uk/wp-content/uploads/2017/04/flight-of-beer.jpg" class="img-fluid" alt="...">
  <div class="carousel-caption d-none d-md-block">
    <h5 class="slideshowText">Say Yeast to Tuesdays</h5>
    <p class="slideshowInfo">Enjoy 10% Off Every Tuesday</p>
  </div>
</div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

<div class="jumbotron" style="padding-top: 16px; padding-bottom: 16px; margin-bottom: 0px">
    <h1 class="display-6"><ins>Drink in Haven</ins></h1>
    <h3 class="display-6">Discover our farmhouse brewery set in beautiful Buckinghamshire</h3>
    <h3 class="display-6">Born out of a love of fermentation, Barrel-Ageing, and most importantly Flavour!</h3>
    <router-link to="/about" class="nav-link" href="#"><h4><ins>ABOUT US -></ins></h4></router-link>
</div>

  </div>
</template>

<script>

export default {
  name: "Slideshow",
  props: {
    msg: String
  },
  components:{}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h5, h6 {
  color: white;
}
h6 {
margin-bottom: 0px;
}
.slide-show {
background: linear-gradient(to left, #3e5151, #decba4);
}

img {
  width: 1950px;
  height: 500px;
  object-fit: cover;
}
.slideshowText{
  text-align: center;
  font-size: 4vw;
  font-family: "Raleway", sans-serif;
  color: white;
  background: linear-gradient(to left, #3e51517c, #decba47c);
}
.slideshowInfo{
  text-align: center;
  font-size: 2vw;
  font-family: "Raleway", sans-serif;
  color: white;
  background: linear-gradient(to left, #3e51517c, #decba47c);
}
</style>
