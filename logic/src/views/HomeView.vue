<template>
  <div>
    <IntroAccueil />
    <ServiceView />
    <EngagementView />
    <RealisationViewSection />
    <section class="bg-blue-50 py-12 sm:py-16 lg:py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Titre de la section -->
        <h2 class="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
          Notre Impact en Chiffres
        </h2>
  
        <!-- Statistiques -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <!-- Statistique 1 -->
          <div class="text-center bg-white p-8 rounded-lg shadow-md">
            <h3 class="text-5xl font-bold text-blue-600 mb-4">
              + {{ animatedProjects }}
            </h3>
            <p class="text-gray-600">Projets réalisés</p>
          </div>
  
          <!-- Statistique 2 -->
          <div class="text-center bg-white p-8 rounded-lg shadow-md">
            <h3 class="text-5xl font-bold text-blue-600 mb-4">
              + {{ animatedSatisfaction }}
            </h3>
            <p class="text-gray-600">Clients satisfaits</p>
          </div>
  
          <!-- Statistique 3 -->
          <div class="text-center bg-white p-8 rounded-lg shadow-md">
            <h3 class="text-5xl font-bold text-blue-600 mb-4">
              + {{ animatedExperience }}
            </h3>
            <p class="text-gray-600">Années d'expérience</p>
          </div>
        </div>
      </div>
    </section>
    <PartnerView />
  </div>
</template>

<script setup>
import IntroAccueil from '@/components/IntroAccueil.vue'
import ServiceView from '@/components/ServiceView.vue'
import EngagementView from '@/components/EngagementView.vue'
import RealisationViewSection from '@/components/RealisationViewSection.vue'
import PartnerView from '@/components/PartnerView.vue'

import { ref, onMounted } from 'vue';
  
  // Valeurs finales des statistiques
  const finalProjects = 150;
  const finalSatisfaction = 95;
  const finalExperience = 10;
  
  // Valeurs animées
  const animatedProjects = ref(0);
  const animatedSatisfaction = ref(0);
  const animatedExperience = ref(0);
  
  // Durée de l'animation en millisecondes
  const animationDuration = 1000; // 1 seconde
  
  // Fonction pour animer les chiffres
  const animateValue = (start, end, updateCallback) => {
    const range = end - start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(animationDuration / range));
  
    const timer = setInterval(() => {
      start += increment;
      updateCallback(start);
      if (start === end) clearInterval(timer);
    }, stepTime);
  };
  
  // Démarrer l'animation lorsque la section est visible
  onMounted(() => {
    animateValue(0, finalProjects, (value) => (animatedProjects.value = value));
    animateValue(0, finalSatisfaction, (value) => (animatedSatisfaction.value = value));
    animateValue(0, finalExperience, (value) => (animatedExperience.value = value));
  });
</script>

<style></style>
