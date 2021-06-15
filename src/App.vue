<template>
  <v-app>
    <v-main
      ><v-container fliud align-center>
        <header-comp />
<transition name="router-animation"
          mode="out-in"
          enter-active-class="animated fadeIn fast"
          leave-active-class="animated fadeOut faster">
          <router-view></router-view>
  </transition>
         </v-container
    ></v-main><footer-comp />
  </v-app>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import "animate.css"

export default {
  name: "App",
  components: {
    "footer-comp": Footer,
    "header-comp": Header,

  },
};
</script>

<style>
  .container {
    max-width: 1200px;
  }

@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css";

</style>