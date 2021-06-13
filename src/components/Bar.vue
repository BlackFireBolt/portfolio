<template>
  <v-app-bar flat color="white">
    <v-toolbar-title>Andrey Boltikov</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-xs-only">
      <v-btn active-class="green--text" text v-for="item in itemsList" :key="item.title" :to="item.path">
        {{ item.title }}
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
export default {
  name: "Bar",
  data(){
      return {
          sidebar: false,
          itemsList: [
              { title: 'HOME', path: '/'},
              { title: 'RESUME', path: '/resume'},
              { title: 'PORTFOLIO', path: '/portfolio'},
              { title: 'CONTACTS', path: '/contacts'}
          ],
      }
  }
};
</script>
