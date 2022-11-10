<template>
  <section>
    <v-row>
      <v-col class="my-11" md="12" align="center" justify="center"
        ><div class="text-h4 mb-2 pt-4 primary--text darken-4">
          Andrey Boltikov
        </div></v-col
      >
      <v-col md="12" align="center" justify="center">
        <div style="position: relative;justify-content:center; display: flex; ">
          <v-img src="https://res.cloudinary.com/dk4xap2wa/image/upload/v1656514297/b4_ktb4q9.jpg" height="200" style="position: relative;">
            </v-img><v-avatar
              style="
              display: block;
                position: absolute;
                
                top: -25%;
                border: 3px solid teal;
              "
              size="300"
            >
              <v-img src="https://res.cloudinary.com/dk4xap2wa/image/upload/v1656514343/photo2_awyczh.webp"></v-img> </v-avatar
          >
        </div>
      </v-col>
      <v-col md="12" class="my-11" align="center" justify="center">
        <div class="text-h4 mb-2 primary--text darken-4">
          Full Stack Web Developer
        </div>
        <div class="text-subtitle-1  primary--text darken-4">
          Vue js + Python (FastAPI, Django, Flask)
        </div>
      </v-col></v-row
    >
  </section>
</template>

<script>
export default {
  name: "Home",
  metaInfo: {
    title: "Home",
    titleTemplate: "Andrey Boltikov - %s",
    meta: [{ property: "og:title", content: "Andrey Boltikov" }],
  },
  data() {
    return {
      icons: [
        { href: "https://github.com/BlackFireBolt", icon: "mdi-github" },
        {
          href: "https://www.linkedin.com/in/andrey-boltikov-9a58911b8/",
          icon: "mdi-linkedin",
        },
        {
          href: "https://www.instagram.com/boltikov.andrey/?hl=ru",
          icon: "mdi-instagram",
        },
        {
          href: "https://stackoverflow.com/users/story/16232652",
          icon: "mdi-stack-overflow",
        },
      ],
    };
  },
  computed: {
    size() {
      const size = { xs: "small", sm: "small", lg: "large", xl: "x-large" }[
        this.$vuetify.breakpoint.name
      ];
      return size ? { [size]: true } : {};
    },
  },
};
</script>
