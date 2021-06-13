<template>
  <v-row class="mt-12">
      <v-col align="center" cols="12" md="12" sm="12" xs="12">
      <p>My skills:</p>
    </v-col>
    <v-col
      cols="12"
      md="4"
      sm="6"
      xs="12"
      v-for="item in itemsSkills"
      :key="item.name"
    >
      <v-card>
        <v-card-text align="center">{{ item.name }}</v-card-text>
      </v-card>
    </v-col>
    <v-divider></v-divider>
    <v-col align="center" cols="12" md="12" sm="12" xs="12">
      <p>Familiar with:</p>
    </v-col>
    <v-col
      cols="12"
      md="4"
      sm="6"
      xs="12"
      v-for="item in itemsFamiliar"
      :key="item.name"
    >
      <v-card>
        <v-card-text align="center">{{ item.name }}</v-card-text>
      </v-card>
    </v-col>
    <v-col align="center" cols="12" md="12" sm="12" xs="12">
      <v-btn>Download resume</v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Resume",
  data() {
    return {
      itemsSkills: [
        { name: "Python" },
        { name: "Django" },
        { name: "Django REST" },
        { name: "HTML/CSS"},
        { name: "JavaScript" },
        { name: "VueJS" },
        { name: "Vuetify" },
        { name: "Flask" },
        { name: "Nginx"}
      ],
      itemsFamiliar: [
          { name: "C++" },
          { name: "Java" },
          { name: "Ruby on Rails" },
          { name: "Object C" },
          { name: "PowerShell" },
      ]
    };
  },
};
</script>
