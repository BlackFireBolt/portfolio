<template>
<v-container fliud align-center>
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
            <span class="text-h6">{{ item.date }}</span>
          </template>
          <v-dialog max-width="600px"
            ><template v-slot:activator="{ on }">
              <v-card :color="item.color" dark v-on="on"
                ><v-img
                  height="150"
                  :src="item.image"
                ></v-img>
                <v-card-title class="text-h6">
                  {{ item.name }}
                  <v-spacer></v-spacer>
                  <v-btn :color="`${item.color} darken-3`" v-on="on">More</v-btn>
                </v-card-title>
              </v-card>
            </template>
            <v-card width="1000"
              ><v-img
                
                :src="item.image"
              ></v-img>
              <v-card-text>
                <h3 class="headline my-4">
                  <span class="primary--text">Used technologies</span>
                </h3>
                <v-chip class="mr-2 my-2" color="secondary" v-for="tech in item.tech" :key="tech">{{tech}}</v-chip>
              </v-card-text>
              <v-card-actions align="center">
                <v-btn text color="cyan darken-4" v-if="item.link" :href="item.link"><v-icon>mdi-github</v-icon>GitHub</v-btn>
              </v-card-actions></v-card
            >
          </v-dialog>
        </v-timeline-item>
      </v-timeline>
    </v-col>
  </v-row></v-container>
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
      
      items: [{
          name: "Service center",
          color: "blue",
          icon: "mdi-hammer-wrench",
          image:"https://res.cloudinary.com/dk4xap2wa/image/upload/v1641768332/2022-01-10_obcaj6.png",
          date: "December, 2019",
          link: "https://github.com/BlackFireBolt/service_center",
          tech: ["Python", "Django", "Bootsrap"],
        },
        {
          name: "BGAI Library",
          color: "red",
          image: "https://res.cloudinary.com/dk4xap2wa/image/upload/v1641766169/2021-12-21_ugb7pa.png",
          icon: "mdi-library",
          date: "January, 2020",
          link: "https://github.com/BlackFireBolt/library",
          tech: ["Python", "Django", "Bootsrap", "MySQL"],
        },
        
        {
          name: "Telegram bots for payment",
          color: "green",
          icon: "mdi-robot",
          image: "https://res.cloudinary.com/dk4xap2wa/image/upload/v1641769477/2022-01-10_1_n0gwff.png",
          date: "September, 2020",
          link: "https://github.com/BlackFireBolt/bots_server",
          tech: ["Python", "pyTelegramBotApi"],
        },
        {
          name: "CRM",
          color: "purple",
          icon: "mdi-solar-panel",
          image: "https://res.cloudinary.com/dk4xap2wa/image/upload/v1641770937/2022-01-10_2_zibgxz.png",
          date: "September, 2020",
          link: "https://github.com/BlackFireBolt/crm",
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
          color: "cyan",
          image: "https://res.cloudinary.com/dk4xap2wa/image/upload/v1656511623/Screenshot_2022-06-29_155655_fnepnr.png",
          icon: "mdi-star",
          date: "June, 2021",
          link: "https://github.com/BlackFireBolt/portfolio",
          tech: ["VueJS", "Vue Router", "Vuetify", "Javascript"],
        },
        {
          name: "Production line dashboard",
          color: "teal",
          image: "https://res.cloudinary.com/dk4xap2wa/image/upload/v1656511619/kr_cdbzmx.png",
          icon: "mdi-solar-panel",
          date: "July, 2021",
          link: "https://github.com/BlackFireBolt/kristal-dashboard",
          tech: ["VueJS", "Vue Router", "Vuetify", "Javascript", "Python", "FastAPI"],
        },
      ],
    };
  },
};
</script>
