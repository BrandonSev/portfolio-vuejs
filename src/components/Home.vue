<template>
  <section id="hero">
    <Hero
      titre="Je suis <br/> <span class='blue'> Brandon Seveste </span>"
      description="Passionné de développement, je me suis autoformé sur différents types de languages de manière autodidacte, j'ai décidé de rejoindre une formation à la Wild Code School en septembre 2021 en tant que développeur web et mobile afin de faire de ma passion, mon métier."
    />
  </section>
  <section class="skills" id="skills">
    <div class="container">
      <h2 class="active">Mes compétences</h2>
      <div class="skills_wrapper" v-if="categories.length">
        <div
          :class="`skills_${category.title.toLowerCase()}`"
          v-for="category in categories"
          :key="category.id"
        >
          <span class="skills_badge">{{ category.title }}</span>
          <div
            :class="`skills_${category.title.toLowerCase()}__language`"
            v-for="underCategory in category.underCategories"
            :key="underCategory.id"
          >
            <p>{{ underCategory.title }}</p>
            <ul v-if="underCategory.technologies.length">
              <li
                v-for="technology in underCategory.technologies"
                :key="technology.id"
              >
                <img
                  :src="`http://localhost:8000/images/${technology.logo}
                  `"
                  :alt="technology.name"
                />
                {{ technology.name }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Hero from "./Hero/Hero.vue";
import axios from "axios";
import { onMounted, ref } from "vue";

const categories = ref({});

onMounted(() => {
  axios
    .get(
      `http://localhost:8000/api/categories?underCategories=true&technologies=true`
    )
    .then((res) => (categories.value = res.data))
    .catch((err) => console.log(err));
});
</script>

<style lang="scss" scoped>
.skills {
  padding: 3rem 0rem 3rem;
  background-color: var(--primary-light);

  h2 {
    font-size: 30px;
    font-weight: bold;
  }

  .skills_wrapper {
    .skills_frontend,
    .skills_backend {
      position: relative;
      margin-top: 3rem;
      padding: 1.5rem;
      background-color: var(--background);
      border: 1px solid #3d3d3d;
      border-radius: 5px;

      .skills_badge {
        position: absolute;
        background-color: var(--secondary);
        padding: 0.5rem 3rem;
        border-radius: 6px;
        top: -17.9px;
        right: 40px;
      }
      p {
        margin-top: 2rem;
        font-weight: bold;
      }

      ul {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem 1rem;
        margin-top: 2rem;

        > * {
          display: flex;
          align-items: center;
        }
      }

      img {
        width: 20px;
        margin-right: 1rem;
      }

      .skills_frontend__framework {
        margin-top: 2rem;
      }
    }

    .skills_backend {
      .skills_badge {
        right: initial;
        left: 40px;
      }
    }
  }
}

@media screen and (min-width: 992px) {
  .skills {
    .skills_wrapper {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 0 3rem;

      .skills_frontend,
      .skills_backend {
        img {
          width: 24px;
          margin-right: 1rem;
        }
      }

      .skills_backend {
        .skills_badge {
          right: 40px;
          left: initial;
        }
      }
    }
  }
}
@media screen and (min-width: 768px) {
  .skills {
    h2 {
      font-size: 36px;
    }
    .skills_wrapper {
      .skills_frontend,
      .skills_backend {
        ul {
          grid-template-columns: repeat(3, 1fr);
        }
      }
    }
  }
}
@media screen and (min-width: 465px) {
  .skills {
    .skills_wrapper {
      .skills_frontend,
      .skills_backend {
        img {
          width: 36px;
        }
        ul {
          grid-template-columns: repeat(3, 1fr);
        }
      }
    }
  }
}
</style>
