<template>
  <nav>
    <div class="container">
      <ul class="navbar">
        <li class="marker" />
        <li>
          <router-link :to="'/'" class="nav_item"> Accueil </router-link>
        </li>
				<li>
          <router-link :to="'/mes-realisations'" class="nav_item"> Réalisations </router-link>
        </li>
				<li>
          <router-link :to="'/contact'" class="nav_item"> Contact </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
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