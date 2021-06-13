<template>
  <v-app>
    <v-main
      ><v-container fliud align-center>
        <bar-comp />

          <router-view></router-view>
  
         </v-container
    ></v-main><footer-comp />
  </v-app>
</template>

<script>
import Bar from "./components/Bar.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    "footer-comp": Footer,
    "bar-comp": Bar,
  },
};
</script>

<style>
  .container {
    max-width: 1200px;
  }
</style>
