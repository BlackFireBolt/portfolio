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
            <v-dialog max-width="800px"
              ><template v-slot:activator="{ on }">
                <v-card :color="item.color" dark v-on="on"
                  ><v-img height="150" :src="item.image"></v-img>
                  <v-card-title class="text-h6">
                    {{ item.name }}
                    <v-spacer></v-spacer>
                    <v-btn :color="`${item.color} darken-3`" v-on="on"
                      >More</v-btn
                    >
                  </v-card-title>
                </v-card>
              </template>
              <v-card width="1000"
                ><v-img :src="item.image"></v-img>
                <v-card-text>
                  <h3 class="headline my-4">
                    <span class="primary--text">Used technologies</span>
                  </h3>
                  <v-chip
                    class="mr-2 my-1"
                    color="secondary"
                    v-for="tech in item.tech"
                    :key="tech"
                    >{{ tech }}</v-chip
                  >
                  <div class="my-2 text-justify">{{ item.description }}</div>
                </v-card-text>
                <v-card-actions align="center">
                  <v-btn
                    text
                    color="cyan darken-4"
                    v-if="item.link"
                    :href="item.link"
                    ><v-icon>mdi-github</v-icon>GitHub</v-btn
                  >
                </v-card-actions></v-card
              >
            </v-dialog>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row></v-container
  >
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
          name: "This site",
          color: "cyan",
          image:
            "https://res.cloudinary.com/dk4xap2wa/image/upload/v1656511623/Screenshot_2022-06-29_155655_fnepnr.png",
          icon: "mdi-star",
          date: "September, 2022",
          link: "https://github.com/BlackFireBolt/portfolio",
          description:
            "Full information about my skills, contacts, links on my past projects and my resume. Designed and implemented Javascript code using the VueJs framework. Deployed on VPS server using docker-compose.",
          tech: [
            "Javascript",
            "VueJS",
            "Vue Router",
            "Vuetify",
            "Docker-compose",
          ],
        },
        {
          name: "Production line dashboard",
          color: "teal",
          image:
            "https://res.cloudinary.com/dk4xap2wa/image/upload/v1656511619/kr_cdbzmx.png",
          icon: "mdi-solar-panel",
          date: "February, 2022",
          link: "https://github.com/BlackFireBolt/kristal-dashboard",
          description:
            "Dashboard panel for collection information from the server side (from counters) and view it on charts, send tasks and taxes to counters. Admin panel for creating users (CRUD), control user activity. Dashboard for production lines maintenance. Designed and implemented Python code using the FastAPI framework for Back-end, Javascript code and VueJs framework for Front-end. Developed REST APIs for communication between modules. Tested using unittest module built-in to the Python standard library. Deployed on local corporate server using docker-compose. Trained employee in design & development.",
          tech: [
            "Javasript",
            "VueJS",
            "Vue-Router",
            "Vuetify",
            "Vuex",
            "Python",
            "FastAPI",
            "PostgreSQL",
            "Docker-compose",
          ],
        },

        {
          name: "CRM",
          color: "purple",
          icon: "mdi-solar-panel",
          image:
            "https://res.cloudinary.com/dk4xap2wa/image/upload/v1641770937/2022-01-10_2_zibgxz.png",
          date: "September, 2020",
          link: "https://github.com/BlackFireBolt/crm",
          description:
            "CRM panel for call center. Managers can see information about their clients (CRUD), add notifications and tasks. Admin can see all clients and all notifications and tasks in real time. Designed and implemented Python code using the Django framework. Developed REST APIs for outer sources of clients. Used Celery and Redis for task and notifications. Used Django-channels and Redis for performing real-time updates. Deployed on VPS server using NGINX and gunicorn.",
          tech: [
            "Python",
            "Django",
            "Django-channels",
            "Celery",
            "Redis",
            "HTML",
            "CSS",
            "Bootstrap4",
            "Javacript",
            "PostgreSQL",
            "NGINX",
            "gunicorn",
          ],
        },
        {
          name: "Telegram bots for payment",
          color: "green",
          icon: "mdi-robot",
          image:
            "https://res.cloudinary.com/dk4xap2wa/image/upload/v1641769477/2022-01-10_1_n0gwff.png",
          date: "September, 2020",
          link: "https://github.com/BlackFireBolt/bots_server",
          description:
            "Telegram bots for payments using Freekassa service. Also bot for request call of a specialist. Designed and implemented Python code using the Django framework and pyTelegramBotApi. Deployed on VPS server using NGINX and gunicorn.",
          tech: [
            "Python",
            "Django",
            "pyTelegramBotApi",
            "PostgreSQL",
            "NGINX",
            "gunicorn",
          ],
        },
        {
          name: "BGAI Library",
          color: "red",
          image:
            "https://res.cloudinary.com/dk4xap2wa/image/upload/v1641766169/2021-12-21_ugb7pa.png",
          icon: "mdi-library",
          date: "January, 2020",
          link: "https://github.com/BlackFireBolt/library",
          description:
            "Information about articles, pdf files (stored in sftp). Designed and implemented Python code using the Django framework. Implemented whoosh search engine (platform limitation). Deployed on CPanel.",
          tech: [
            "Python",
            "Django",
            "Bootstrap4",
            "HTML",
            "CSS",
            "Mysql",
            "Haystack",
            "Whoosh",
          ],
        },
        {
          name: "Service center",
          color: "blue",
          icon: "mdi-hammer-wrench",
          image:
            "https://res.cloudinary.com/dk4xap2wa/image/upload/v1641768332/2022-01-10_obcaj6.png",
          date: "December, 2019",
          link: "https://github.com/BlackFireBolt/service_center",
          description:
            "Information about service center, contacts, catalog of devices that can be fixed. Deployed on CPanel and Heroku (for demonstration).",
          tech: ["Python", "Django", "Bootstrap4", "HTML", "CSS"],
        },
      ],
    };
  },
};
</script>
