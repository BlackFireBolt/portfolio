<template>
<v-container fliud align-center>
  <v-row class="mt-12">
    <v-col align="center" cols="12" md="12" sm="12" xs="12">
      <v-card color="grey lighten-4" class="mb-3" tile flat>
        <v-row align="center">
<v-col cols="12" md="4">
      <v-card-title class="text-h4  mb-1 primary--text justify-center">About me</v-card-title>
</v-col>
<v-divider vertical></v-divider>
<v-col cols="12" md="8">

      <v-card-text class="description">
      <p class="text-justify font-weight-medium">
        I am JS (VueJS) and Python (FastAPI) developer. I have knowledge in
        Django, Django REST, and Flask. In the future i want to learn Flutter(Dart) and GoLang. 
        </p>
              <p class="text-justify font-weight-medium">
        I worked as system administrator, managed local
        AD, DNS, DHCP, proxy servers, remote VPN (pptp, IKEv2, L2TP), mail
        (pop3, imap, smtp) servers, deployed sites on Django and telegrams of
        bots to a production server (docker, docker-compose, nginx, gunicorn,
        daphne).
      </p>
      <p class="text-justify font-weight-medium">
        Communicable, active, easy to learn, calm about criticism. I also have
        skills in assembling and setting up a PC, installing software. I have
        experience in providing services in the IT field.
      </p>

      <p class="text-justify font-weight-medium">
        I have a master's degree in engineering and technology. In my free time
        I attend acting courses, ride a bike and love jogging in the morning.
      </p>
</v-card-text>
</v-col>
</v-row>
</v-card>
    </v-col>
    <v-col align="center" cols="12" md="12" sm="12" xs="12">
      <div class="text-h4 mb-1 primary--text">My skills</div>
    </v-col>
    <v-col class="my-5" align="center" cols="12" md="12" sm="12" xs="12">
      <v-btn x-large dark color="primary" :href="`${publicPath}cv.pdf`" target="_blank"
        ><v-icon>mdi-download</v-icon>Download resume</v-btn>
    </v-col>
    <v-col
      cols="6"
      md="3"
      sm="4"
      
      v-for="item in itemsSkills"
      :key="item.name"
      ><v-hover v-slot="{ hover }">
        <v-card flat>
          <v-img height="200" :src="item.image" contain>
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
                  justify-center
                  align-center
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
      cols="6"
      md="3"
      sm="4"
      v-for="item in itemsFamiliar"
      :key="item.name"
    >
      <v-hover v-slot="{ hover }">
        <v-card flat >
          <v-img height="200" :src="item.image" contain>
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
                  justify-center
                  align-center
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
  </v-row></v-container>
</template>

<script>
export default {
  name: "Resume",
  metaInfo: {
    title: "Resume",
    titleTemplate: "Andrey Boltikov - %s",
    meta: [{ property: "og:title", content: "Andrey Boltikov" }],
  },
  data() {
    return {
      publicPath: process.env.BASE_URL,
      itemsSkills: [
        {
          name: "Python",
          image:
            "https://res.cloudinary.com/dk4xap2wa/image/upload/v1641747947/Python_logo_and_wordmark.svg_kbfda3.png",
        },{
          name: "FastAPI",
          image:
            "https://res.cloudinary.com/dk4xap2wa/image/upload/v1641747946/doal9rooo82-mno5pquw8eeijcu_ouleli.png",
        },{
          name: "VueJS",
          image:
            "https://res.cloudinary.com/dk4xap2wa/image/upload/v1641761616/images_v57mkx.png",
        },{
          name: "Docker",
          image:
            "https://res.cloudinary.com/dk4xap2wa/image/upload/v1641761275/Docker-Vector-Logo_jpyw5c.png",
        },
        {
          name: "Flask",
          image:
            "https://res.cloudinary.com/dk4xap2wa/image/upload/v1641747946/1200px-Flask_logo.svg_qqnr9t.png",
        },
        
        {
          name: "Django",
          image:
            "https://res.cloudinary.com/dk4xap2wa/image/upload/v1641747946/1200px-Django_logo.svg_fwwflo.png",
        },
        {
          name: "Django REST",
          image:
            "https://res.cloudinary.com/dk4xap2wa/image/upload/v1641747946/index_lfyqwm.png",
        },

        
        {
          name: "Vuetify",
          image:
            "https://res.cloudinary.com/dk4xap2wa/image/upload/v1641747945/images2_rkac8w.jpg",
        },
        {
          name: "Nginx",
          image:
            "https://res.cloudinary.com/dk4xap2wa/image/upload/v1641747945/index43_tsgxvh.png",
        },
        
        {
          name: "Django Channels",
          image:
            "https://res.cloudinary.com/dk4xap2wa/image/upload/v1641747946/1_0p8C3M7zGtt2HANUZH_37A_nrtwdt.png",
        },
        {
          name: "HTML/CSS",
          image:
            "https://res.cloudinary.com/dk4xap2wa/image/upload/v1641760628/html5_dckdz5.png",
        },
        {
          name: "JavaScript",
          image:
            "https://res.cloudinary.com/dk4xap2wa/image/upload/v1641747946/JavaScript-1_mouy0a.jpg",
        },
      ],
      itemsFamiliar: [
        {
          name: "C++",
          image:
            "https://res.cloudinary.com/dk4xap2wa/image/upload/v1641762810/C_-Logo.wine_yjjvnu.png",
        },
        {
          name: "Ruby on Rails",
          image:
            "https://res.cloudinary.com/dk4xap2wa/image/upload/v1641762409/Ruby_on_Rails-Logo.wine_ine1mc.png",
        },
        {
          name: "PowerShell",
          image:
            "https://res.cloudinary.com/dk4xap2wa/image/upload/v1641763019/PowerShell-on-Arch-Linux-678x235_yqkuuw.png",
        },
        {
          name: "Node.js",
          image:
            "https://res.cloudinary.com/dk4xap2wa/image/upload/v1641762810/node-js_nyhxkp.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped>
.description {
  font-family: "Rubik", sans-serif;
  font-size: 18px;
}
</style>