<template>
  <nav>
    <div class="container">
      <ul class="navbar">
        <li class="marker" :style="`height: 3px; width: ${width}px; left: ${left}px`"/>
        <li>
          <router-link :to="'/'" class="nav_item" @click="handleWidth"> Accueil </router-link>
        </li>
				<li>
          <router-link :to="'/mes-realisations'" class="nav_item" @click="handleWidth"> Réalisations </router-link>
        </li>
				<li>
          <router-link :to="'/contact'" class="nav_item" @click="handleWidth"> Contact </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import {onMounted, onUnmounted, ref} from "vue";

const width = ref();
const left = ref();

const handleWidth = (e) => {
  width.value = e.target.offsetWidth
  left.value = e.target.parentNode.offsetLeft + e.target.offsetLeft
}
const checkPathnameAndMoveActive = (pathname) => {
  if(pathname === "/"){
    width.value = 59
    left.value = 0
    return;
  }
  if (pathname === "/mes-realisations"){
    width.value = 97
    left.value = 91
    return;
  }
  if(pathname === "/contact"){
    width.value = 62
    left.value = 222
  }
}
window.addEventListener('activemenu', e => checkPathnameAndMoveActive(e.detail))

onMounted(() => {
  if(window.location.pathname === "/"){
    width.value = 59
    left.value = 0
    return;
  }
  if (window.location.pathname === "/mes-realisations"){
    width.value = 97
    left.value = 91
    return;
  }
  if(window.location.pathname === "/contact"){
    width.value = 62
    left.value = 222
  }
})
onUnmounted(() => {
  window.removeEventListener('activemenu', checkPathnameAndMoveActive)
})
</script>

<style lang="scss" scoped>
nav {
  position: sticky;
  top: 0;
  padding: 1rem 0;
  background-color: var(--primary-light);
  z-index: 2;
  border-bottom: 1px solid #3d3d3d;
  .navbar {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: fit-content;
    max-width: fit-content;

    .marker {
      flex: none;
      position: absolute;
      bottom: -16px;
      height: 4px;
      background-color: #00c4f0;
      width: 0;
      padding: 0;
      transition: left 0.4s cubic-bezier(0.1, 1, 1, 0.99);
    }

    > * {
      position: relative;
      padding: 1rem;

      &:nth-child(2) {
        padding: 1rem 1rem 1rem 0;
      }

      a {
        padding-bottom: 0.5rem;
      }
    }
  }
}
</style>