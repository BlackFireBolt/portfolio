<template>
  <v-app :style="{background: $vuetify.theme.themes[theme].background}">
    <v-main 
      ><v-container fliud align-center>
        <header-comp /></v-container>
        <transition
          name="router-animation"
          mode="out-in"
          enter-active-class="animated fadeIn fast"
          leave-active-class="animated fadeOut faster"
        >
          <router-view></router-view>
        </transition> </v-main
    ><footer-comp />
  </v-app>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import "animate.css";

export default {
  name: "App",
  metaInfo: {
    title: "Home",
    titleTemplate: "Andrey Boltikov - %s",
    meta: [{ property: "og:title", content: "Andrey Boltikov" }],
  },
  components: {
    "footer-comp": Footer,
    "header-comp": Header,
  },
  computed:{
    theme(){
      return (this.$vuetify.theme.dark) ? 'dark' : 'light'
    }}
};
</script>

<style>
.container {
  max-width: 1200px;
}

@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css";
</style>