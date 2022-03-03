<template>
  <div>
    <Hero
      titre="Me contacter"
      description="Vous désirez me contacter pour des questions spécifiques ou professionnelles, n'hésitez pas à me contacter via le formulaire ci-dessous."
      textButton="A propos de moi"
      linkButton="/"
    />
    <div class="contact">
      <div class="container">
        <h2 class="active">Me contacter</h2>
        <div class="contact_wrapper">
          <div class="contact_image">
            <img src="/image/mail.svg" alt="mail image" />
          </div>
          <form class="contact_form">
            <div class="contact_form__group">
              <label for="name">Nom / Prénom:</label>
              <input
                type="text"
                name="name"
                id="name"
                :class="`input_controll ${prenomError ? 'input-error' : ''}`"
                v-model="prenom"
              />
              <span class="error">{{ prenomError }}</span>
            </div>
            <div class="contact_form__group">
              <label for="email">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                :class="`input_controll ${emailError ? 'input-error' : ''}`"
                v-model="email"
              />
              <span class="error">{{ emailError }}</span>
            </div>
            <div class="contact_form__group">
              <label for="subject">Sujet:</label>
              <input
                type="text"
                name="subject"
                id="subject"
                :class="`input_controll ${subjectError ? 'input-error' : ''}`"
                v-model="sujet"
              />
              <span class="error">{{ subjectError }}</span>
            </div>
            <div class="contact_form__group">
              <label for="message">Votre message:</label>
              <textarea
                rows="10"
                id="message"
                name="message"
                :class="`input_controll ${messageError ? 'input-error' : ''}`"
                v-model="message"

              />
              <span class="error">{{ messageError }}</span>
            </div>
            <div class="contact_form__group">
              <button
                type="submit"
                class="button pulse"
                style="display: flex; align-items: center"
                @click.prevent="handleSubmit"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-arrow-clockwise rotate"
                  viewBox="0 0 16 16"
                  style="display: block; margin-right: 0.5rem"
                  v-if="loading"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
                  />
                  <path
                    d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"
                  />
                </svg>
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Hero from "../components/Hero/Hero.vue";
import {computed, ref} from "vue";
import axios from "axios";
const prenom = ref('')
const email = ref('')
const sujet = ref('')
const message = ref('')
const isSubmited = ref(false)

const prenomError = computed(() => {
  if(!prenom.value && isSubmited.value){
    return "Ce champ est obligatoire";
  }
})
const emailError = computed(() => {
    if(!email.value && isSubmited.value){
      return "Ce champ est obligatoire"
    }
    if(email.value && !email.value.match('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')){
      return "L'email est invalide"
    }
})
const subjectError = computed(() => {
    if(!sujet.value && isSubmited.value){
      return "Ce champ est obligatoire"
    }
})
const messageError = computed(() => {
    if(!message.value && isSubmited.value){
      return "Ce champ est obligatoire"
    }
    if(message.value && message.value.length < 30){
      return "Votre message doit comporter au minimum 30 caractères"
    }
})

const handleSubmit = () => {
  isSubmited.value = true
  if(!prenomError.value && !emailError.value && !subjectError.value && !messageError.value){
    axios.post('http://localhost:8000/api/email/send', {
      name: prenom.value,
      email: email.value,
      message: message.value,
      subject: sujet.value
    })
    .then(res => {
      if(res.status === 200){
        alert('le mail a bien été envoyé')
        isSubmited.value = false
        prenom.value = ""
        email.value = ""
        sujet.value = ""
        message.value = ""
      }else {
        alert('Une erreur est survenue lors de l\'envoi de mail');
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.contact {
  margin-top: 3rem;
  padding: 3rem 0;
  background-color: var(--primary-light);

  h2 {
    font-size: 30px;
    font-weight: bold;
  }

  .contact_wrapper {
    .contact_image {
      display: none;
    }

    .contact_form {
      margin-top: 2rem;
      width: 100%;

      .contact_form__group {
        margin-bottom: 2rem;

        &:last-child {
          margin-bottom: 0;
        }

        label {
          display: block;
          padding-bottom: 1rem;
        }

        .input_controll {
          padding: 1rem;
          width: 100%;
          border-radius: 5px;
          outline: none;
          background-color: hsla(0, 0%, 100%, 0.04);
          border: 1px solid #ffffff33;
          font-family: "Roboto", sans-serif;
          color: var(--primary);
          font-size: 1rem;
          transition: border 1s;

          &:focus {
            border: 1px solid var(--secondary);
          }

          &:-webkit-autofill,
          &:-webkit-autofill:hover,
          &:-webkit-autofill:focus,
          &:-webkit-autofill:active {
            transition: background-color 5000s ease-in-out 0s;
            -webkit-text-fill-color: var(--primary);
          }
        }

        .button {
          display: block;
          width: 100%;
        }
      }
    }
  }
}

@media screen and (min-width: 768px) {
  .contact {
    padding: 3rem 0;
    background-color: var(--primary-light);

    h2 {
      font-size: 30px;
      font-weight: bold;
    }

    .contact_wrapper {
      display: flex;
      align-items: center;
      .contact_image {
        display: block;
        width: 100%;
        margin-top: 2rem;
      }

      .contact_form {
        margin-top: 2rem;
        width: 100%;

        .contact_form__group {
          margin-bottom: 2rem;

          &:last-child {
            margin-bottom: 0;
          }

          label {
            display: block;
            padding-bottom: 1rem;
          }

          .input_controll {
            padding: 1rem;
            width: 100%;
            border-radius: 5px;
            outline: none;
            background-color: rgba(255, 255, 255, 0.04);
            border: 1px solid #ffffff33;
            font-family: "Roboto", sans-serif;
            color: var(--primary);
            font-size: 1rem;

            &:focus {
              border: 1px solid var(--secondary);
            }

            &:-webkit-autofill,
            &:-webkit-autofill:hover,
            &:-webkit-autofill:focus,
            &:-webkit-autofill:active {
              transition: background-color 5000s ease-in-out 0s;
              -webkit-text-fill-color: var(--primary);
            }
          }

          .button {
            display: block;
            width: 100%;
            margin-left: auto;
            max-width: fit-content;
          }
        }
      }
    }
  }
}
</style>
