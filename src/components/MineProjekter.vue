<template>
  
    <div class="block latestPostBlock">
     <v-container>
        <h2 class="text-center">Mine Projekter</h2>
        <h3 class="text-center">Dette er et uddrag af mine projekter. Klik videre for at se alle mine projekter</h3>
        <v-row>
          <v-col cols="12" md="4" v-for="item in items" :key="item.id">
  <v-card outlined class="mx-auto"
  
  >
    <v-img
      class="white--text align-end"
      height="200px"
      v-bind:src="item.src"
    >
      <v-card-title>{{ item.title }}</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">
      {{ item.subtitle }}
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>{{ item.description }}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="primary" text> <a href="../views/mineprosub.vue" target="_blank"><button class="btn">See more</button></a></v-btn>
    </v-card-actions>
  </v-card>
          </v-col>
        </v-row>
  </v-container>
</div>
</template>

<script>
  export default {
    name: 'LatestPost',

    data() {
      return {
        items: [
          {
            id: 1,
            title: "Mini Me",
            subtitle: "Project",
            description: "A project at the very start of the education, where we had to draw ourselves as cartoons.",
            src: require("../assets/images/miniMe.png")
          },
          {
            id: 2,
            title: "Coro Clothing",
            subtitle: "Assignment",
            description: "In InDesign I sketched a prototype for a modern clothing company",
            src: require("../assets/images/coroclothing.png")
          },
            {
            id: 3,
            title: "Composition",
            subtitle: "Assignment",
            description: "Composed an illustration where the headline and image talks for itself",
            src: require("../assets/images/coronaPoster.png")
          },
        ]
      };
    }
  };
</script>