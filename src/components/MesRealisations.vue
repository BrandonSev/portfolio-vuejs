<template>
  <Hero
    titre="Mes réalisations"
    description="Vous trouverez ci-dessous tous les projets auxquels j'ai participé sur le plan professionel, scolaire ou personnel."
    textButton="Me contacter"
    linkButton="/contact"
  />
  <div className="project">
    <div className="container">
      <div className="project_wrapper">
        <h2 className="active">Projets</h2>
        <swiper
          :slides-per-view="1"
          :space-between="16"
          :breakpoints="breakpoints"
          :modules="[Autoplay]"
          :autoplay="{ delay: 7000 }"
        >
          <swiper-slide v-for="project in projects" :key="project.id">
            <div className="project_card">
              <div className="project_card__header">
                <img
                  :src="`http://localhost:8000/images/${project.images[0].src}`"
                  :alt="project.images.alt"
                />
              </div>
              <div className="project_card__body">
                <p className="technology">{{ project.tags }}</p>
                <h3>{{ project.title }}</h3>
                <p>
                  {{ project.description.slice(0, 140) }}
                  {{ project.description.length > 140 ? "..." : "" }}
                </p>
                <div className="project_card__button">
                  <button className="button button_small pulse">
                    En savoir plus
                  </button>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script setup>
import Hero from "../components/Hero/Hero.vue";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/autoplay";
import { onMounted, ref } from "vue";
import axios from "axios";

const projects = ref({});
const breakpoints = {
  320: {
    slidesPerView: 1,
  },
  770: {
    slidesPerView: 2,
  },

  968: {
    slidesPerView: 3,
  },
};

onMounted(() => {
  axios
    .get("http://localhost:8000/api/projects?active=true")
    .then((res) => (projects.value = res.data))
    .catch((err) => console.log(err));
});
</script>

<style lang="scss" scoped>
.project {
  padding: 3rem 0;
  background: var(--primary-light);
  position: relative;

  .project_wrapper {
    h2 {
      font-weight: bold;
      font-size: 30px;
      margin-bottom: 3rem;
    }

    .project_card {
      background-color: var(--background);
      border-radius: 10px;
      border: 1px solid #3d3d3d;
      overflow: hidden;

      img {
        max-height: 300px;
        width: 100%;
        aspect-ratio: 16 / 9;
        object-fit: cover;
      }

      h3 {
        font-size: 1.3rem;
      }

      .slick-list {
        margin-top: 0;
      }

      .project_card__header {
        .slick-slide {
          padding: 0;
        }
      }

      p:not(.technology) {
        color: var(--primary);
        opacity: 0.8;
        padding: 1.5rem 0;
        font-size: 0.98rem;
        max-height: 111px;
        overflow: hidden;
        text-overflow: ellipsis;
        flex: 1;
        line-height: 1.4;
      }

      .project_card__body {
        padding: 1.5rem;
        display: flex;
        flex-direction: column;

        .technology {
          color: var(--secondary);
          padding-bottom: 1rem;
          font-size: 0.9rem;
        }

        .project_card__button {
          display: flex;
          justify-content: flex-end;
          margin-top: 2rem;
          justify-self: flex-end;
        }
      }
    }

    .slick-list {
      margin-top: 3rem;

      .slick-slide {
        padding: 0 0.5rem;
      }
    }

    .slick-dots {
      bottom: -34px;

      .slick-active {
        button:before {
          color: var(--secondary);
        }
      }

      button:before {
        font-size: 0.8rem;
        color: var(--primary);
        opacity: 1;
      }
    }
  }
  .dots {
    margin-top: 2rem;
    display: flex;
    padding: 10px 0;
    justify-content: center;
  }

  .dot {
    border: none;
    width: 10px;
    height: 10px;
    background: var(--primary);
    border-radius: 50%;
    margin: 0 5px;
    padding: 5px;
    cursor: pointer;
  }

  .dot:focus {
    outline: none;
  }

  .dot.active {
    background: var(--secondary);
  }
}
</style>
