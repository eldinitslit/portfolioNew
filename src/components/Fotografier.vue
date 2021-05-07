<template>
 
    <div class="block galleryBlock">
      <v-container>
        <h2 class="text-center">Fotografier</h2>
        <h3 class="text-center">Her er nogle af mine fotografier</h3>
  <v-row>
    <v-col
      v-for="item in items"
      :key="item.id"
      class="d-flex child-flex"
      cols="6" md="4"
    >
    <v-card flat tile class="d-flex">
      <v-img
        :src="item.src"
        aspect-ratio="1"
        class="grey lighten-2"
      >
        <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </v-card>
    </v-col>
  </v-row>
  </v-container>
</div>
</template>

<script>
  export default {
    name: 'Fotografier',

    data() {
      return {
        items: [
          {
            id: 1,
            src: require("../assets/images/dragiElmin.png")
          },
          {
            id: 2,
            src: require("../assets/images/hjerting1.jpg")
          },
           {
            id: 3,
            src: require("../assets/images/hjerting2.jpg")
          },
          {
            id: 4,
            src: require("../assets/images/hjerting3.jpg")
          },
          {
            id: 5,
            src: require("../assets/images/hjerting4.jpg")
          },
          {
            id: 6,
            src: require("../assets/images/eldinHjerting.jpg")
          }
        ]
      }
    }
  }
</script>