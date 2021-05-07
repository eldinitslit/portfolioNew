<template>
  <v-container>
    <div class="heroBlock">
   <v-carousel cycle>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition">
      <v-row
            class="fill-height title"
            align="center"
            justify="center"
          >
            <div>
             {{ item.title }}
            </div>
      </v-row>
      </v-carousel-item>
  </v-carousel></div>
  </v-container>
</template>

<script>
  export default {
    name: 'Hero',

    data () {
      return {
        items: [
          {
            src: require("../assets/images/iaminnovative.jpg"),
            title: "I am innovative"
          },
          {
            src: require("../assets/images/iamopenminded.jpg"), 
            title: "I am openminded"
          },
        ],
      }
    },
  };
</script>
