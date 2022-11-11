<template>
  <v-container fliud align-center>
    <v-layout justify-center align-center class="mt-4 pt-2">
      <div class="message">
        <p>
          404
          <br />
          <small>PAGE NOT FOUND</small>
        </p>
        <v-btn large to="/"><v-icon>mdi-arrow-left</v-icon>GO HOME</v-btn>
      </div>
    </v-layout></v-container
  >
</template>

<script>
export default {
  name: "Error",
  metaInfo() {
    return {
      title: "Error",
      titleTemplate: "Andrey Boltikov - %s",
      meta: [{ property: "og:title", content: "Andrey Boltikov" }],
    };
  },
};
</script>

<style scoped>
.message {
  text-align: center;
  position: relative;
}
.message p {
  font-size: 200px;
  color: green;
  padding-top: 50px;
  position: relative;
  z-index: 9;
  line-height: 100%;
}
.message p small {
  font-size: 40px;
  line-height: 100%;
  vertical-align: top;
}
</style>
