<template>
<v-content>
 <div class="staticHero">
<v-img width="1900px" height="480px" src="../assets/images/project1.jpg">
  <v-row align="end" class="lightbox white--text pa-2 fill-height">
    <v-col>
      <v-container>
      <div class="headline"><h1>Mine projekter</h1></div>
      
      </v-container>
    </v-col>
  </v-row>
</v-img>
 </div>


 <v-container text-center>
   <br>
   <h2><p>Disse er de projekter jeg har beskæftiget mig med igennem min uddannelse.  
    </p></h2>
 </v-container>
    
 
 <div class="block latestPostBlock">
     <v-container>
        <v-row>
          <v-col cols="12" md="4" v-for="item in items" :key="item.id">
  <v-card outlined class="mx-auto"
  
  >
    <v-img
      class="white--text align-end"
      height="400"
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
      <v-btn color="primary" text> More</v-btn>
    </v-card-actions>
  </v-card>
          </v-col>
        </v-row>
  </v-container>
</div>
</v-content>
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
            title: "Idea House",
            subtitle: "Assignment",
            description: "An assignment where we created a logo for our Business Academy's creativity department",
            src: require("../assets/images/ideaHouse.png")
          },
            {
            id: 3,
            title: "Composition",
            subtitle: "Assignment",
            description: "Composed an illustration where the headline and image talks for itself",
            src: require("../assets/images/coronaPoster.png")
          },
          {
            id: 4,
            title: "Welcome to..",
            subtitle: "Assignment",
            description: "Designed a poster for the beloved town 'Hjerting' and presented it for the class",
            src: require("../assets/images/hjerting.jpg")
          },
          {
            id: 4,
            title: "Coro Clothing",
            subtitle: "Assignment",
            description: "In InDesign I sketched a prototype for a modern clothing company",
            src: require("../assets/images/coroclothing.png")
          },
        ]
      };
    }
  };
</script>

<style scoped>
  
</style>