<script setup>
  import Navbar from "./components/Navbar/Navbar.vue"
  import Footer from "./components/Footer/Footer.vue"
  import './assets/styles/index.scss'
</script>

<template>
  <Navbar />
  <router-view></router-view>
  <Footer />
</template>

<style scoped>
</style>
