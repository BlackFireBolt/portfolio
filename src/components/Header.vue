<template>
  <div>
    <v-navigation-drawer v-model="sidebar" app>
      <v-list nav dense>
        <v-list-item link
          v-for="item in itemsList"
          :key="item.title"
          :to="item.path"
        ><v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
          {{ item.title }}
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar flat color="white">
      <span class="hidden-sm-and-up"
        ><v-app-bar-nav-icon @click="sidebar = !sidebar"></v-app-bar-nav-icon
      ></span>
      <v-toolbar-title
        ><router-link to="/" tag="span" style="cursor: pointer"
          >Andrey <span class="primary--text">Boltikov</span></router-link
        ></v-toolbar-title
      >
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          active-class="secondary--text"
          text
          v-for="item in itemsList"
          :key="item.title"
          :to="item.path"
        >
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      sidebar: false,
      itemsList: [
        { title: "HOME", path: "/", icon: "mdi-home" },
        { title: "RESUME", path: "/resume", icon: "mdi-file-account" },
        { title: "PORTFOLIO", path: "/portfolio", icon: "mdi-palette" },
        { title: "CONTACTS", path: "/contacts", icon: "mdi-contacts" },
      ],
    };
  },
};
</script>
