<template>

     <v-container>
      <v-footer
    padless

  >
    <v-card
      flat
      tile
      class="text-center"

    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="pt-0">
        All rights reserved. No part of this webpage may be reproduced or used in any manner without written permission of the copyright owner except for the use of quoatations in a review. This is a portfolio work. Names, pictures and videos are the owner's own work.
      </v-card-text>

    <v-divider></v-divider>

      <v-card-text class="">
        {{ new Date().getFullYear() }} — <strong>Eldin Colic © Portfolio</strong>
      </v-card-text>
    </v-card>
  </v-footer> 
  </v-container>
</template>

<script>
  export default {
    name: 'Footer',

      data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>