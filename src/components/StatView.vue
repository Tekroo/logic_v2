<template>
  <section class="bg-gray-50 py-16 sm:py-32" data-aos="fade-up">
    <div class="container mx-auto px-4">
      <!-- Avis Clients -->
      <h2 class="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
        Ce Que Disent Nos Clients
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Avis 1 -->
        <div class="bg-white p-6 rounded-lg shadow-md">
          <div class="flex items-center mb-4">
            <img src="@/assets/client1.webp" alt="Client 1" class="w-12 h-12 rounded-full mr-4" />
            <div>
              <h4 class="font-semibold text-blue-900">Jean Dupont</h4>
              <p class="text-sm text-gray-500">Directeur, Entreprise XYZ</p>
            </div>
          </div>
          <p class="text-gray-600 italic">
            "Une équipe professionnelle et réactive. Leur expertise nous a permis de réaliser notre
            projet dans les délais et avec une qualité exceptionnelle."
          </p>
        </div>

        <!-- Avis 2 -->
        <div class="bg-white p-6 rounded-lg shadow-md">
          <div class="flex items-center mb-4">
            <img src="@/assets/client2.webp" alt="Client 2" class="w-12 h-12 rounded-full mr-4" />
            <div>
              <h4 class="font-semibold text-blue-900">Marie Curie</h4>
              <p class="text-sm text-gray-500">Architecte, Cabinet ABC</p>
            </div>
          </div>
          <p class="text-gray-600 italic">
            "Leur approche innovante et leur attention aux détails ont fait toute la différence. Je
            recommande vivement !"
          </p>
        </div>

        <!-- Avis 3 -->
        <div class="bg-white p-6 rounded-lg shadow-md">
          <div class="flex items-center mb-4">
            <img src="@/assets/client3.webp" alt="Client 3" class="w-12 h-12 rounded-full mr-4" />
            <div>
              <h4 class="font-semibold text-blue-900">Pierre Durand</h4>
              <p class="text-sm text-gray-500">Ingénieur, Société DEF</p>
            </div>
          </div>
          <p class="text-gray-600 italic">
            "Un partenaire de confiance pour des projets complexes. Leur équipe est toujours à
            l'écoute et propose des solutions adaptées."
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Valeurs finales des statistiques
const finalProjects = 150
const finalSatisfaction = 95
const finalExperience = 10

// Valeurs animées
const animatedProjects = ref(0)
const animatedSatisfaction = ref(0)
const animatedExperience = ref(0)

// Durée de l'animation en millisecondes
const animationDuration = 1000 // 1 seconde

// Fonction pour animer les chiffres
const animateValue = (start, end, updateCallback) => {
  const range = end - start
  const increment = end > start ? 1 : -1
  const stepTime = Math.abs(Math.floor(animationDuration / range))

  const timer = setInterval(() => {
    start += increment
    updateCallback(start)
    if (start === end) clearInterval(timer)
  }, stepTime)
}

// Démarrer l'animation lorsque la section est visible
onMounted(() => {
  animateValue(0, finalProjects, (value) => (animatedProjects.value = value))
  animateValue(0, finalSatisfaction, (value) => (animatedSatisfaction.value = value))
  animateValue(0, finalExperience, (value) => (animatedExperience.value = value))
})
</script>

<style scoped>
/* Ajoutez des styles personnalisés si nécessaire */
</style>
