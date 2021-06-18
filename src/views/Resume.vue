<template>
  <v-row class="mt-12">
    <v-col align="center" cols="12" md="12" sm="12" xs="12">
      <div class="text-h4 mb-1 primary--text">My skills</div>
    </v-col>
    <v-col
      cols="12"
      md="4"
      sm="6"
      xs="12"
      v-for="item in itemsSkills"
      :key="item.name"
      ><v-hover v-slot="{ hover }">
        <v-card>
          <v-img height="150" :src="item.image">
            <v-expand-transition>
              <div
                v-if="hover"
                class="
                  d-flex
                  transition-fast-in-fast-out
                  secondary
                  v-card--reveal
                  text-h4
                  white--text
                  justify-center align-center
                "
                style="height: 100%"
              >
                {{ item.name }}
              </div>
            </v-expand-transition>
          </v-img>
        </v-card></v-hover
      >
    </v-col>
    <v-col align="center" cols="12" md="12" sm="12" xs="12">
      <v-divider></v-divider>
    </v-col>
    <v-col align="center" cols="12" md="12" sm="12" xs="12">
      <div class="text-h4 mb-1 primary--text">Familiar with</div>
    </v-col>
    <v-col
      cols="12"
      md="4"
      sm="6"
      xs="12"
      v-for="item in itemsFamiliar"
      :key="item.name"
    >
      <v-hover v-slot="{ hover }">
        <v-card>
          <v-img height="150" :src="item.image">
            <v-expand-transition>
              <div
                v-if="hover"
                class="
                  d-flex
                  transition-fast-in-fast-out
                  secondary
                  v-card--reveal
                  text-h4
                  white--text
                  justify-center align-center
                "
                style="height: 100%"
              >
                {{ item.name }}
              </div>
            </v-expand-transition>
          </v-img>
        </v-card></v-hover
      >
    </v-col>
    <v-col class="my-5" align="center" cols="12" md="12" sm="12" xs="12">
      <v-btn x-large dark color="primary"><v-icon>mdi-download</v-icon>Download resume</v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Resume",
  metaInfo: {
    title: "Resume",
    titleTemplate: "Andrey Boltikov - %s",
    meta: [{property: "og:title", content: "Andrey Boltikov"}]
  },
  data() {
    return {
      itemsSkills: [
        { name: "Python", image: "http://placehold.it/300x150" },
        { name: "Django", image: "http://placehold.it/300x150"  },
        { name: "Django REST", image: "http://placehold.it/300x150"  },
        { name: "Django Channels", image: "http://placehold.it/300x150"  },
        { name: "HTML/CSS", image: "http://placehold.it/300x150" },
        { name: "JavaScript", image: "http://placehold.it/300x150"  },
        { name: "VueJS", image: "http://placehold.it/300x150"  },
        { name: "Vuetify", image: "http://placehold.it/300x150"  },
        { name: "Flask", image: "http://placehold.it/300x150"  },
        { name: "Nginx", image: "http://placehold.it/300x150"  },
      ],
      itemsFamiliar: [
        { name: "C++", image: "http://placehold.it/300x150"  },
        { name: "Java", image: "http://placehold.it/300x150"  },
        { name: "Ruby on Rails", image: "http://placehold.it/300x150"  },
        { name: "Object C", image: "http://placehold.it/300x150"  },
        { name: "PowerShell", image: "http://placehold.it/300x150"  },
      ],
    };
  },
};
</script>
