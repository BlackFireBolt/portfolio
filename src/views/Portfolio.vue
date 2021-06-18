<template>
<div>
    <v-row class="mt-12">
      <v-col align="center" cols="12" md="12" sm="12" xs="12">
      <div class="text-h4 mb-1 primary--text">Web portfolio</div>
    </v-col>
    <v-col
      cols="12"
      md="4"
      sm="6"
      xs="12"
      v-for="item in items"
      :key="item.name"
    >
      <v-card>
        <v-card-text align="center">{{ item.name }}</v-card-text>
      </v-card>
    </v-col>
  </v-row>
  <v-timeline
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
      <v-card
        :color="item.color"
        dark
      >
        <v-card-title class="text-h6">
          {{name}}
        </v-card-title>
        <v-card-text class="white text--primary">
          <p>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</p>
          <v-btn
            :color="item.color"
            class="mx-0"
            outlined
          >
            Button
          </v-btn>
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</div>
</template>

<script>
export default {
    name: "Portfolio",
    metaInfo: {
    title: "Portfolio",
    titleTemplate: "Andrey Boltikov - %s",
    meta: [{property: "og:title", content: "Andrey Boltikov"}]
  },
    data() {
        return {items: [
        {name: "This site"},
        {name: "BGAI Library"},
        {name: "Service center"},
        {name: "Telegram bots for payment"},
        {name: "CRM"},
    ]}}
}
</script>