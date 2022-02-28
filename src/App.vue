<script setup>
  import Navbar from "./components/Navbar/Navbar.vue"
  import './assets/styles/index.scss'
</script>

<template>
  <Navbar />
  <router-view></router-view>
  <footer>
    Mon footer
  </footer>
</template>

<style scoped>
</style>
