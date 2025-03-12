<template>
  <section class="relative h-80 md:h-[300px] flex items-center justify-center text-white overflow-hidden">
    <!-- Image de fond avec overlay -->
    <div class="absolute inset-0 z-0">
      <img
        src="@/assets/p2.webp"
        alt="A propos"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black opacity-60 transition-opacity duration-300 hover:opacity-50"></div>
      <!-- Overlay sombre avec effet de survol -->
    </div>

    <!-- Contenu -->
    <div class="relative z-10 text-center">
      <!-- Titre principal -->
      <h1 class="text-4xl md:text-6xl font-bold mb-4">
        ABOUT US
      </h1>

      <!-- Sous-titre -->
      <p class="text-lg md:text-xl italic mb-6">
        Construisons un monde solide et durable 
      </p>
    </div>
  </section>

  <div class="bg-white">
    <!-- Section principale -->
    <section class="py-12 sm:py-16 lg:py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <!-- Texte d'introduction -->
      <p class="text-lg text-gray-600 text-justify sm:text-center max-w-2xl mx-auto mb-12">
        Chez Logic, nous nous engageons à fournir des solutions innovantes et durables pour répondre aux besoins de nos clients. Découvrez notre vision, notre mission et les valeurs qui guident notre entreprise.
      </p>

      <!-- Vision et Mission -->
      <div class="grid md:grid-cols-2 gap-12 lg:gap-16 mb-16">
        <!-- Vision -->
        <div class="bg-gray-50 p-8 rounded-lg shadow-sm">
          <h2 class="text-2xl font-bold text-blue-900 mb-4">Notre Vision</h2>
          <p class="text-gray-600">
            Devenir le leader incontournable dans le domaine de la construction et de l'assainissement en Afrique de l'Ouest, en offrant des solutions innovantes et respectueuses de l'environnement.
          </p>
        </div>

        <!-- Mission -->
        <div class="bg-gray-50 p-8 rounded-lg shadow-sm">
          <h2 class="text-2xl font-bold text-blue-900 mb-4">Notre Mission</h2>
          <p class="text-gray-600">
            Fournir des services de haute qualité, en combinant expertise technique, innovation et engagement envers le développement durable, pour répondre aux besoins de nos clients et contribuer au développement de nos communautés.
          </p>
        </div>
      </div>

      <!-- Valeurs de l'entreprise -->
      <div class="text-center">
        <h2 class="text-3xl font-bold text-blue-900 mb-8">Nos Valeurs</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Carte 1 : Intégrité -->
          <div class="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div class="flex justify-center mb-4">
              <i class="fas fa-handshake text-4xl text-orange-500"></i>
            </div>
            <h3 class="text-xl font-bold text-blue-900 mb-2">Intégrité</h3>
            <p class="text-gray-600">
              Nous agissons avec honnêteté et transparence dans toutes nos relations.
            </p>
          </div>

          <!-- Carte 2 : Innovation -->
          <div class="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div class="flex justify-center mb-4">
              <i class="fas fa-lightbulb text-4xl text-orange-500"></i>
            </div>
            <h3 class="text-xl font-bold text-blue-900 mb-2">Innovation</h3>
            <p class="text-gray-600">
              Nous recherchons constamment des solutions créatives pour répondre aux défis de nos clients.
            </p>
          </div>

          <!-- Carte 3 : Qualité -->
          <div class="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div class="flex justify-center mb-4">
              <i class="fas fa-award text-4xl text-orange-500"></i>
            </div>
            <h3 class="text-xl font-bold text-blue-900 mb-2">Qualité</h3>
            <p class="text-gray-600">
              Nous nous engageons à fournir des services de la plus haute qualité.
            </p>
          </div>

          <!-- Carte 4 : Durabilité -->
          <div class="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div class="flex justify-center mb-4">
              <i class="fas fa-leaf text-4xl text-orange-500"></i>
            </div>
            <h3 class="text-xl font-bold text-blue-900 mb-2">Durabilité</h3>
            <p class="text-gray-600">
              Nous intégrons des pratiques respectueuses de l'environnement dans tous nos projets.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>

  <StatView/>
</template>

<script setup>
// Vous pouvez ajouter ici la logique nécessaire
import StatView from '@/components/StatView.vue';
</script>

<style>
/* Styles personnalisés si nécessaire */
</style>