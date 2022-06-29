<template>
  <v-footer app absolute padless>
    <v-card flat tile width="100%" class="grey lighten-4 text-center">
      <v-card-text class="white--text">
        
        <v-btn
          v-for="icon in icons"
          target="_blank"
          :href="icon.href"
          :key="icon.id"
          class="mx-4"
          dark
          icon
          color="primary"
        >
          <v-icon size="24px">
            {{ icon.icon }}
          </v-icon>
        </v-btn>
        
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
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
};
</script>
