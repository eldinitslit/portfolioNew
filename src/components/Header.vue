<template>
  <v-container>
  <v-toolbar flat
  color="#D6F030">

      <v-toolbar-title>Eldin Labs</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-xs-only">

      <v-btn text>
      <router-link to="/">Hjem</router-link>
      </v-btn>

      <v-btn text>
         <router-link to="/mineprosub">Mine Projekter</router-link>
      </v-btn>

      <v-btn text>
      <router-link to="/lærommig">Lær Om Mig</router-link>
      </v-btn>

      <v-btn text>
       <router-link to="/kontakt">Kontakt</router-link>
      </v-btn>
      </v-toolbar-items>
      <div class="hidden-sm-and-up">
        <v-menu offset-y>
      <template v-slot:activator="{ on }">
          <v-app-bar-nav-icon v-on="on"></v-app-bar-nav-icon>
      </template>
      <v-list class="responsiveMenu">
        <v-list-item>
          <v-list-item-title><router-link to="/">Hjem</router-link></v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title><router-link to="/mineprosub">Mine Projekter</router-link></v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title><router-link to="/lærommig">Lær Om Mig</router-link></v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title><router-link to="/kontakt">Kontakt</router-link></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
      </div>
    </v-toolbar>
  </v-container>
</template>

<script>
  export default {
    name: 'Header',

    data: () => ({
    }),
  }
</script>
