<template>
  <v-footer app absolute padless>
    <v-card flat tile width="100%" class="red lighten-1 text-center">
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4" icon>
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} —
        <strong>developed by Andrey Boltikov</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      icons: ["mdi-home", "mdi-email", "mdi-calendar", "mdi-delete"],
    };
  },
};
</script>
