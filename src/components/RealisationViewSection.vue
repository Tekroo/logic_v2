<template>
  <section class="bg-gray-50 sm:py-16 lg:py-20 py-12 relative overflow-hidden" data-aos="fade-up">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
        Nos réalisations
      </h2>
      <!-- Titre en bleu foncé -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Réalisation -->
        <div
          v-for="project in Projects"
          :key="project.id"
          class="bg-gray-50 effet rounded-lg shadow-md overflow-hidden"
        >
          <img :src="project.image" :alt="project.titre" class="w-full h-48 object-cover" />
          <div class="p-6">
            <h3 class="text-xl font-semibold text-blue-900 mb-2">{{ project.titre }}</h3>
            <!-- Titre en bleu foncé -->
            <p class="text-gray-600">
              <!-- Texte en gris -->
              {{ project.description }}
            </p>
          </div>
        </div>
      </div>

      <!-- Effet de flou au bas de la section -->
      <div
        class="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white to-transparent backdrop-blur-sm"
      ></div>

      <!-- Bouton "Voir plus de projets" -->
      <div class="text-center mt-8 relative z-10">
        <!-- Ajoutez relative et z-10 ici -->
        <router-link
          to="/realisation"
          class="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Voir plus de projets
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
// Importations des images
import bat2 from '@/assets/bat2.webp'
import latrine2 from '@/assets/latrine2.webp'
import piste_pacer from '@/assets/piste_pacer.webp'

const Projects = ref([
  {
    id: '1',
    image: bat2,
    titre: 'Caserne Allada',
    description:
      'Description concise du projet 3. Mettez en avant les aspects clés de cette réalisation.',
  },
  {
    id: '2',
    image: latrine2,
    titre: 'Mairie de Parakou',
    description:
      'Description concise du projet 3. Mettez en avant les aspects clés de cette réalisation.',
  },
  {
    id: '3',
    image: piste_pacer,
    titre: 'Piste PACER',
    description:
      'Description concise du projet 3. Mettez en avant les aspects clés de cette réalisation.',
  },
])
</script>

<style scoped>
/* Effet de survol pour les cartes */
.effet:hover {
  transform: translateY(-30px);
  transition: transform 0.3s ease;
}
</style>
