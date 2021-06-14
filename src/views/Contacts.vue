<template>
  <v-row class="mt-12">
    <v-col cols="12" md="6" sm="12" xs="12">
      <v-row>
        <v-col cols="12" md="12" sm="12" xs="12">
          <h1>Contact wit me:</h1>
        </v-col>
        <v-col cols="12" md="12" sm="12" xs="12">
          <p>Republic of Belarus, Minsk</p>
        </v-col>
        <v-col cols="12" md="12" sm="12" xs="12">
          <p>andreyboltikov@gmail.com</p>
        </v-col>
        <v-col cols="12" md="12" sm="12" xs="12">
          <p>+375 33 319 69 35</p>
        </v-col>
        <v-col cols="12" md="12" sm="12" xs="12">
          <p>@Bollt</p>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" md="6" sm="12" xs="12">
      <v-row>
        <v-col cols="12" md="12" sm="12" xs="12">
          <h1>Contact form:</h1>
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
              :disabled="!valid || name === '' || email === '' || message === ''"
              color="success"
              class="mr-4"
              @click="validate"
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
export default {
  name: "Contacts",
  data() {
    return {
      name: "",
      email: "",
      message: "",
      valid: false,
      nameRules: [
          v => !!v || 'Name is required', 
          v => (v && v.length <= 20) || 'Name must be less than 20 characters',
      ],
      emailRules: [
          v => !!v || 'Email is required',
          v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
      messageRules: [
          v => !!v || 'Message is required',
          v => !(v && v.length <= 20) || 'Name must be at least 20 characters long',
          v => (v && v.length <= 200) || 'Name must be less than 200 characters',
      ]
    };
  },
  watch: {
    name: function() {
      this.validateField();
    },
    email: function() {
      this.validateField();
    },
    message: function() {
      this.validateField();
    }
  },
  methods: {
    validateField() {
      this.$refs.form.validate();
    }
  }
};
</script>