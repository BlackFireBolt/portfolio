<template>
    <v-row class="mt-12">
      <v-col align="center" cols="12" md="12" sm="12" xs="12">
      <p>Web portfolio:</p>
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
</template>

<script>
export default {
    name: "Portfolio",
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