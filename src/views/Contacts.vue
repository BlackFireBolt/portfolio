<template>
<v-container fliud align-center>
  <v-row class="mt-12">
    
    <v-col cols="12" md="12" sm="12" xs="12">
    <div class="text-h4 mb-12 primary--text" align="center">Contact with me:</div>
    </v-col>
    
    
    <v-col cols="7" md="6" sm="7" justify="center">
      
          
        
          <div class="mb-8" align="right"><v-icon class="mr-4" size="46px">mdi-map-marker</v-icon>Poland, <span class="primary--text">Gdańsk</span></div>
        
          <div class="mb-8" align="right"><a href="mailto:andreyboltikov@gmail.com"><v-icon class="mr-4 d-none d-sm-inline" size="46px">mdi-email</v-icon>andreyboltikov@gmail.com</a></div>
        
          <div class="mb-8" align="right"><a href="tel:+48503360984"><v-icon class="mr-4" size="46px">mdi-phone</v-icon>+48 503 360 984</a></div>
        
          <div class="mb-8" align="right"><a href="https://telegram.me/Bollt"><v-icon class="mr-4" size="46px">mdi-send</v-icon>Telegram: <span class="primary--text">@</span>Bollt</a></div>

          <div class="mb-8" align="right"><a href="https://wa.me/48503360984"><v-icon class="mr-4 d-none d-sm-inline" size="46px">mdi-whatsapp</v-icon>WhatsApp: +48 503 360 984</a></div>
    </v-col>
    <v-divider vertical></v-divider>
    <v-col cols="5" md="6" sm="5">
      
          <div class="mb-8" align="left"><a href="https://www.facebook.com/andrew.boltikov"><v-icon class="mr-4" size="46px">mdi-facebook</v-icon>Facebook</a></div>

          <div class="mb-8" align="left"><a href="https://www.linkedin.com/in/andrey-boltikov-9a58911b8/"><v-icon class="mr-4" size="46px">mdi-linkedin</v-icon>LinkedIn</a></div>
        
          <div class="mb-8" align="left"><a href="https://github.com/BlackFireBolt"><v-icon class="mr-4" size="46px">mdi-github</v-icon>GitHub</a></div>
        
          <div class="mb-8" align="left"><a href="https://www.instagram.com/boltikov.andrey/?hl=ru"><v-icon class="mr-4" size="46px">mdi-instagram</v-icon>Instagram</a></div>

          <div class="mb-8" align="left"><a href="https://stackoverflow.com/users/story/16232652"><v-icon class="mr-4" size="46px">mdi-stack-overflow</v-icon>StackOverflow</a></div>
        
    </v-col>
  </v-row></v-container>
</template>

<script>
//import {send} from "emailjs-com";

export default {
  name: "Contacts",
  metaInfo: {
    title: "Contacts",
    titleTemplate: "Andrey Boltikov - %s",
    meta: [{property: "og:title", content: "Andrey Boltikov"}]
  },
  data() {
    return {
      name: "",
      email: "",
      message: "",
      valid: false,
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 20) || "Name must be less than 20 characters",
      ],
      emailRules: [
        (v) => !!v || "Email is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      messageRules: [
        (v) => !!v || "Message is required",
        (v) =>
          !(v && v.length <= 20) || "Name must be at least 20 characters long",
        (v) =>
          (v && v.length <= 200) || "Name must be less than 200 characters",
      ],
    };
  },
  watch: {
    name: function () {
      this.validateField();
    },
    email: function () {
      this.validateField();
    },
    message: function () {
      this.validateField();
    },
  },
  methods: {
    validateField() {
      this.$refs.form.validate();
    },
    sendEmail() {
      /*send(
        "service_g8ar2w8",
        "template_naj55z7",
        {message: this.message},
        "user_CZHtOyu4O3krWJ1noRXUK"
      ).then((response) => {
        console.log('SUCCESS!!', response.status);
      }, (err) => {
        console.log('FAILED', err)
      });*/

      this.name = "";
      this.email = "";
      this.message = "";
    },
    reset(){
      this.$refs.form.reset()
    }
  },
};
</script>

<style scoped>
a:link { text-decoration: none; }

a:visited { text-decoration: none; }

a:hover { text-decoration: none; }

a:active { text-decoration: none; }
</style>