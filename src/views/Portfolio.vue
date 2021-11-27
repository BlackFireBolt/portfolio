<template>
  <v-row class="mt-12">
    <v-col align="center" cols="12" md="12" sm="12" xs="12">
      <div class="text-h4 mb-1 primary--text">Web portfolio</div>
    </v-col>
    <v-col cols="12" md="12" sm="12" xs="12">
      <v-timeline
        class="my-5"
        align-top
        :dense="$vuetify.breakpoint.smAndDown"
      >
        <v-timeline-item
          v-for="(item, i) in items"
          :key="i"
          :color="item.color"
          :icon="item.icon"
          fill-dot
        >
          <template v-slot:opposite>
            <span>Tus eu perfecto</span>
          </template>
          <v-dialog v-model="dialog" max-width="600px"
            ><template v-slot:activator="{ on }">
              <v-card :color="item.color" dark v-on="on"
                ><v-img
                  height="150"
                  src="https://res.cloudinary.com/dk4xap2wa/image/upload/v1623321910/IMG_20201008_150413_ifc041.jpg"
                ></v-img>
                <v-card-title class="text-h6">
                  {{ item.name }}
                </v-card-title>
              </v-card>
            </template>
            <v-card
              ><v-img
                height="150"
                src="https://res.cloudinary.com/dk4xap2wa/image/upload/v1623321910/IMG_20201008_150413_ifc041.jpg"
              ></v-img>
              <v-card-text>
                <h3 class="headline my-4">
                  <span class="primary--text">Used technologies</span>
                </h3>
                <v-chip class="mr-2" color="secondary" v-for="tech in item.tech" :key="tech">{{tech}}</v-chip>
              </v-card-text>
              <v-card-actions align="center">
                <v-btn text color="teal accent-4" v-if="item.linkGitHub">Git Hub</v-btn>
                <v-btn text color="teal accent-4" v-if="item.linkDemo">Demo</v-btn>
              </v-card-actions></v-card
            >
          </v-dialog>
        </v-timeline-item>
      </v-timeline>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Portfolio",
  metaInfo: {
    title: "Portfolio",
    titleTemplate: "Andrey Boltikov - %s",
    meta: [{ property: "og:title", content: "Andrey Boltikov" }],
  },
  data() {
    return {
      items: [
        {
          name: "BGAI Library",
          color: "red",
          icon: "mdi-library",
          tech: ["Python", "Django", "Bootsrap", "MySQL"],
        },
        {
          name: "Service center",
          color: "blue",
          icon: "mdi-hammer-wrench",
          tech: ["Python", "Django", "Bootsrap"],
        },
        {
          name: "Telegram bots for payment",
          color: "green",
          icon: "mdi-robot",
          tech: ["Python", "pyTelegramBotApi"],
        },
        {
          name: "CRM",
          color: "purple",
          icon: "mdi-solar-panel",
          tech: [
            "Python",
            "Django",
            "Django Channels",
            "Celery",
            "Redis",
            "Bootstrap",
            "Javascript",
            "PostgreSQL",
          ],
        },
        {
          name: "This site",
          color: "primary",
          icon: "mdi-star",
          tech: ["VueJS", "Vue Router", "Vuetify", "Javascript"],
        },
      ],
    };
  },
};
</script>
