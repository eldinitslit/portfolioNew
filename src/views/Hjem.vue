<template>

  <v-content>
    <Hero/>
    <MinStart/>
    <Fotografier/>
    <MineProjekter/>
  </v-content>  
</template>

<script>
import Hero from '../components/Hero.vue';
import MinStart from '../components/MinStart.vue';
import MineProjekter from '../components/MineProjekter.vue';
import Fotografier from '../components/Fotografier.vue';

  export default {
    name: 'Hjem',

     components: { 
    Hero,
    MinStart,
    Fotografier,
    MineProjekter,
   
   },
  };
</script>
