<template>
  <v-app>
    <v-main
      ><v-container fliud align-center>
        <header-comp />

          <router-view></router-view>
  
         </v-container
    ></v-main><footer-comp />
  </v-app>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

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
</style>
