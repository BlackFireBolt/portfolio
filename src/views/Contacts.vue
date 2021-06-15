<template>
  <v-row class="mt-12">
    <v-col cols="12" md="6" sm="12" xs="12">
      
          <div class="text-h4 mb-12 primary--text">Contact with me:</div>
        
          <div class="mb-8"><v-icon class="mr-4" size="46px">mdi-map-marker</v-icon>Republic of Belarus, <span class="primary--text">Minsk</span></div>
        
          <div class="mb-8"><v-icon class="mr-4" size="46px">mdi-email</v-icon><span class="primary--text">andreyboltikov</span>@gmail.com</div>
        
          <div class="mb-8"><v-icon class="mr-4" size="46px">mdi-phone</v-icon>+375 33 <span class="primary--text">319 69 35</span></div>
        
          <div class="mb-8"><v-icon class="mr-4" size="46px">mdi-send</v-icon>Telegram: <span class="primary--text">@</span>Bollt</div>
       
    </v-col>
    <v-col cols="12" md="6" sm="12" xs="12">
      <v-row>
        <v-col cols="12" md="12" sm="12" xs="12">
          <div class="text-h4 mb-1 primary--text">Contact form:</div>
        </v-col>
        <v-col cols="12" md="12" sm="12" xs="12">
          <v-form ref="form" lazy-validation v-model="valid">
            <v-text-field
              v-model="name"
              :rules="nameRules"
              label="Name"
              required
            ></v-text-field>
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="Email"
              required
            ></v-text-field>
            <v-textarea
              counter="200"
              label="Message"
              :rules="messageRules"
              v-model="message"
            ></v-textarea>
            <v-btn
              :disabled="
                !valid || name === '' || email === '' || message === ''
              "
              color="primary"
              class="mr-4"
              @click="sendEmail"
            >
              Send message
            </v-btn>

            <v-btn color="error" class="mr-4" @click="reset"> Clear </v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
//import {send} from "emailjs-com";

export default {
  name: "Contacts",
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
