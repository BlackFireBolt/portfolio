<template>
  <v-footer app absolute padless>
    <v-card flat tile width="100%" class="secondary text-center">
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
