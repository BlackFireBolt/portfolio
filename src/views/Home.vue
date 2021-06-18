<template>
  <v-row class="mt-6">
     <v-col align="center" cols="12" md="12" sm="12" xs="12"
      >
    <div class="text-h3 mb-2 primary--text darken-4" >Andrey Boltikov</div>
    <div class="text-subtitle-1 mb-2 primary--text darken-4">Full Stack Web Developer</div>
     </v-col>
    <v-col cols="12" md="6" sm="12" xs="12"
      ><v-img
        max-width="600"
        max-height="700"
        src="https://res.cloudinary.com/dk4xap2wa/image/upload/v1623321910/IMG_20201008_150413_ifc041.jpg"
      ></v-img
    ></v-col>
    <v-col cols="12" md="6" sm="12" xs="12"
      ><div class="text-h4 mb-1 primary--text">About me</div>
      <p class="text-justify">
        I am a beginner Django developer (I have been studying for over a year),
        Django REST, familiar with web layout, HTML, CSS, JS (jQuery, VueJS). I
        have also been developing telegram bots in Python and CRM-system in
        Django. I am familiar with C ++, object C, Java, PHP, Ruby on rails,
        Flask.</p> 
        <p class="text-justify">Was engaged in system administration of local AD, DNS, DHCP,
        proxy servers, remote VPN (pptp, IKEv2, L2TP), mail (pop3, imap, smtp)
        servers, as well as deploying sites to Django and telegrams bots to a
        production server (nginx, gunicorn, daphne).
      </p>
      <p class="text-justify">
        Communicable, active, easy to learn, calm about criticism. I also have
        skills in assembling and setting up a PC, installing software. I have
        experience in providing services in the IT.
      </p>
      <p class="text-justify">I have a master's degree in engineering and technology. In my free time I attend acting courses and learn to play the guitar. 
      </p>
      <div align="center" class="mt-8">
        <div class="text-h4 mb-1 primary--text">My social links</div>
      <v-btn v-for="icon in icons" target="_blank" :href="icon.href" :key="icon.id" class="mx-4" fab dark large color="primary">
          <v-icon dark size="36px">{{ icon.icon }}</v-icon>
        </v-btn></div></v-col
    >
  </v-row>
</template>

<script>
export default {
  name: "Home",
  metaInfo: {
    title: "Home",
    titleTemplate: "Andrey Boltikov - %s",
    meta: [{property: "og:title", content: "Andrey Boltikov"}]
  },
  data(){
    return {
      icons: [
        {href: "https://github.com/BlackFireBolt", icon: "mdi-github"},
        {href: "https://www.linkedin.com/in/andrey-boltikov-9a58911b8/", icon: "mdi-linkedin"},
        {href: "https://www.instagram.com/boltikov.andrey/?hl=ru", icon: "mdi-instagram"},
        {href: "https://stackoverflow.com/users/story/16232652", icon: "mdi-stack-overflow"}
      ]
    }
  }
};
</script>
