<template>
  <section class="relative py-12 sm:py-32 lg:py-36 sm:my-0" data-aos="fade-up">
    <!-- Image de fond -->
    <div class="absolute inset-0">
      <img
        src="@/assets/partenaire.webp"
        alt="Arrière-plan partenaires"
        class="w-full h-full object-cover"
      />
      <!-- Superposition pour améliorer la lisibilité -->
      <div class="absolute inset-0 bg-black bg-opacity-50"></div>
    </div>

    <!-- Contenu de la section -->
    <div class="container mx-auto px-4 relative z-10">
      <h2 class="text-3xl font-bold md:text-4xl text-center text-white mb-8">Nos partenaires</h2>

      <!-- Carrousel Swiper -->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div v-for="(partner, index) in partners" :key="index" class="swiper-slide">
            <div
              class="bg-white p-4 rounded-lg shadow-md flex items-center justify-center hover:shadow-lg transition-shadow h-full"
            >
              <img
                :src="partner.image"
                :alt="partner.name"
                class="max-w-full max-h-24 object-contain"
              />
            </div>
          </div>
        </div>

        <!-- Pagination -->
        <div class="swiper-pagination"></div>

        <!-- Boutons de navigation -->
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import Swiper from 'swiper'
import 'swiper/swiper-bundle.css' // Importez les styles de Swiper

// Importation des images
import ola from '@/assets/ola.webp'
import sirat from '@/assets/sirat.webp'
import mtc from '@/assets/mtc.webp'
import bsbtp from '@/assets/bsbtp.webp'

const partners = [
  { name: 'Partenaire 1', image: ola },
  { name: 'Partenaire 2', image: sirat },
  { name: 'Partenaire 3', image: mtc },
  { name: 'Partenaire 4', image: bsbtp },
  { name: 'Partenaire 5', image: sirat }, // Réutilisation de la même image
]

// Initialisation du carrousel après le rendu du composant
onMounted(() => {
  new Swiper('.swiper-container', {
    loop: true, // Boucle infinie
    slidesPerView: 1, // Nombre de slides visibles par défaut
    spaceBetween: 20, // Espace entre les slides
    pagination: {
      el: '.swiper-pagination', // Pagination
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next', // Bouton suivant
      prevEl: '.swiper-button-prev', // Bouton précédent
    },
    breakpoints: {
      // Responsive breakpoints
      640: {
        slidesPerView: 2, // 2 slides visibles sur les écrans >= 640px
      },
      1024: {
        slidesPerView: 3, // 3 slides visibles sur les écrans >= 1024px
      },
      1280: {
        slidesPerView: 4, // 4 slides visibles sur les écrans >= 1280px
      },
    },
  })
})
</script>

<style scoped>
/* Styles pour la section */
.container {
  max-width: 1200px; /* Largeur maximale du contenu */
  margin: 0 auto; /* Centrer le contenu */
}

/* Styles pour Swiper */
.swiper-container {
  position: relative;
  padding: 20px 0;
  overflow: hidden; /* Empêcher le débordement */
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto; /* Ajuster la hauteur automatiquement */
}

.swiper-button-next,
.swiper-button-prev {
  color: white; /* Couleur des boutons de navigation */
  background-color: rgba(0, 0, 0, 0.5); /* Fond pour améliorer la visibilité */
  border-radius: 50%; /* Boutons ronds */
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.swiper-button-next::after,
.swiper-button-prev::after {
  font-size: 20px; /* Taille des icônes */
}

.swiper-pagination-bullet {
  background: white; /* Couleur des points de pagination */
  opacity: 0.5; /* Transparence */
}

.swiper-pagination-bullet-active {
  background: #3b82f6; /* Couleur du point actif */
  opacity: 1; /* Pleine opacité */
}
</style>
