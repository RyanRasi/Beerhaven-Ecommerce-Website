<template>
<transition appear @enter="enter">
  <div class="home-animated">
    <header>
      <section>
        <div class="hero">
          <img src="../../public/img/home/craftbeerpull.jpg" alt srcset />

          <h1 class="headline">Craft beers sent straight to your home</h1>

        </div>
      </section>
    </header>
    <div class="slider"></div>
  </div>
  </transition>
</template>

<script>
import { TweenMax, TimelineLite, Power2 } from "gsap/TweenMax";

export default {
  name: "Home",
  props: {
    msg: String
  },
  components: {    
  },
  methods: {
    enter: function(el, done) {

 const hero = document.querySelector(".hero");
    const slider = document.querySelector(".slider");
    const headline = document.querySelector(".headline");

    const tl = new TimelineMax();

    tl.fromTo(
      hero,
      1,
      { height: "0%" },
      { height: "80%", ease: Power2.easeInOut }
    )
      .fromTo(hero, 1.2, { width: "100%" }, { width: "95%" })
      .fromTo(slider, 1.2, { x: "-100%" }, { x: "0%" }, "-=1.2")
      .fromTo(
        headline,
        0.5,
        { opacity: 0, x: 90 },
        { opacity: 1, x: 0 },
        "-=0.5"
      );


    done();
  }
}
};
</script>




<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
}

.slider {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: linear-gradient(to left, #3e5151, #decba4);
  z-index: -1;
}



section {
  display: flex;
  height: 80vh;
  justify-content: center;
  align-items: center;
}

.hero {
  height: 100%;
  width: 100%;
  position: relative;
}

.hero img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.headline {
  position: absolute;
  top: 70%;
  margin: 0px 15px 0px;
  margin: 0 auto;
  text-align: center;
  font-size: 6vw;
  left: 5%;
  right: 5%;
  font-family: "Raleway", sans-serif;
  transform: translate(-20%, -70%);
  color: white;
  z-index: 3;
  background: linear-gradient(to left, #3e51517c, #decba47c);
}

.hero::after {
  content: "";
  background: black;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  opacity: 0.3;
  top: 0;
}
</style>
