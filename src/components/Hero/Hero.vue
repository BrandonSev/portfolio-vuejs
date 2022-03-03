<script setup>
import { defineProps } from "vue";
import ButtonLink from "../ButtonLink/ButtonLink.vue";

defineProps({
  titre: String,
  description: String,
  textButton: String,
  linkButton: {
    type: String,
    default: "/",
  },
});
</script>

<template>
  <div class="container hero">
    <div class="hero_text">
      <h1 v-html="titre" />
      <p>{{ description }}</p>
      <ButtonLink :linkText="textButton" :url="linkButton" />
    </div>
    <div class="hero_image"><img src="/image/Hero.png" alt="hero" /></div>
  </div>
</template>

<style lang="scss">
.hero {
  display: flex;
  flex-direction: column-reverse;
  gap: 3rem 0;
  padding: 4rem 1rem;
  text-align: center;
  .hero_text {
    h1 {
      font-size: 38px;
      font-weight: bold;
      span {
        color: var(--secondary);
      }
    }

    p {
      padding: 2rem 0;
    }
  }

  .hero_image {
    display: flex;
    justify-content: center;
    width: 100%;
    min-width: 320px;
    padding-right: 1rem;
    img {
      max-width: 500px;
      width: 100%;
    }
  }
}

@media screen and (min-width: 768px) {
  .hero {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 3rem;
    text-align: inherit;

    .hero_text {
      min-width: 400px;
      max-width: 300px;
      h1 {
        font-size: 46px;
      }
    }
  }
}
@media screen and (min-width: 1078px) {
  .hero {
    padding: 4rem 1rem;
    .hero_text {
      min-width: 500px;
      h1 {
        font-size: 64px;
      }
    }
  }
}
</style>
