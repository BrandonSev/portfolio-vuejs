<template>
  <div style="position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: #00000080;
    backdrop-filter: blur(4px);
    z-index: 2"
  >
  <div class="modal">
    <div class="modal_header">
      <swiper
          :slides-per-view="1"
          :space-between="16"
          :modules="[Autoplay]"
          :autoplay="{ delay: 7000 }"
      >
        <swiper-slide v-for="image in project.images" :key="image.id">
          <img
              :src="'http://localhost:8000/images/' + image.src"
              :alt="image.alt"
          />
        </swiper-slide>
      </swiper>
    </div>
    <div class="modal_body">
      <p class="technology">{{ project.technology }}</p>
      <h2>{{ project.title }}</h2>
      <p class="description">{{ project.description }}</p>
      <div class="modal_button">
        <a :href="project.url" rel="noreferrer noopener" target="_blank" class="button button_small pulse">
        Visiter le site web
        </a>
      </div>
    </div>
    <div class="modal_close pulse" @click="$emit('closeModal')">
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="var(--background-light)"
        class="bi bi-x"
        viewBox="0 0 16 16"
    >
      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
    </svg>
    </div>
  </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper";

defineProps({
  project: Object
})

defineEmits(['closeModal'])

</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  left: 0;
  top: 7vh;
  bottom: 0;
  right: 0;
  width: 90%;
  max-height: fit-content;
  max-width: fit-content;
  margin: 0 auto;
  border-radius: 25px;
  background-color: var(--background);
  box-shadow: 1px 0 20px #000000AC;
  animation: scaleIn .3s both;
  z-index: 3;

&.hidden {
   animation: scaleOut .3s both !important;
 }

.modal_header {
  position: relative;
  border-radius: 15px 15px 0 0;
  overflow: hidden;

img {
  width: 100%;
  height: 230px;
  max-height: 230px;
  object-fit: cover;
}

.slick-dots {
  bottom: 10px;

.slick-active {
button:before {
  color: var(--secondary)
}
}

button:before {
  font-size: .8rem;
  color: var(--primary);
  opacity: 1;
}
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

.modal_body {
  padding: 1.5rem;
  background-color: var(--background);
  color: var(--primary);
  border-radius: 0 0 15px 15px;

.technology {
  color: var(--secondary);
  padding-bottom: 1rem;
  font-size: .9rem;
}

h2 {
  font-size: 26px;
}

p.description {
  color: var(--primary);
  opacity: .8;
  margin: 2rem 0;
  font-size: .98rem;
  line-height: 1.4;
  max-height: 205px;
  overflow: auto;
}

.modal_button {
  display: flex;
  justify-content: flex-end;
  color: var(--primary);
  font-size: 0.98rem;
}
}

.modal_close {
  position: absolute;
  top: -21px;
  right: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: .4rem;
  background-color: var(--primary);
  border-radius: 50%;
  border: 2px solid var(--secondary);
  z-index: 2;
  cursor: pointer;

svg {
  width: 26px;
}
}
}

@media (min-width: 768px) and (max-width: 1024px) {
  .modal {
    top: 11vh;
    width: 65%;
  }
}

@media screen and (min-width: 1024px) {
  .modal {
    top: 14vh;
    min-width: 700px;
    width: 40%;
  }
}

@keyframes scaleIn {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes scaleOut {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
</style>