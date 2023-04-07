<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
</script>

<template>
  <v-app>
    <v-main>
      <v-container class="py-15">
        <HomeView />
      </v-container>
    </v-main>
  </v-app>
  <!-- <RouterLink to="/">Home</RouterLink> -->
  <!-- <RouterView /> -->
</template>