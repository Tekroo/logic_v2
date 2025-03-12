<template>
  <!-- Landing page -->
  <section class="relative h-[400px] sm:h-screen flex items-center justify-center text-white">
    <div class="absolute inset-0 z-0">
      <img src="@/assets/p2.webp" alt="" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-black opacity-20"></div>
      <!-- Overlay sombre -->
    </div>
    <div class="relative z-10 text-center">
      <h1 class="text-3xl sm:text-5xl font-bold mb-6">Construire l'Avenir, Un Projet à la Fois</h1>
      <button
        class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
      >
        <router-link to="/contact"> Obtenir un Devis Gratuit </router-link>
      </button>
    </div>
  </section>
  <!-- Introduction -->
  <section class="py-12 sm:py-28 sm:px-28 bg-white sm:mx-full">
    <div class="max-w-7xl mx-auto px-4 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center">
        <div class="md:text-left">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
            Bienvenu chez Logic - Votre partenaire de confiance !
          </h2>
          <hr
            class="bg-blue-600 hover:bg-orange-700 py-1 rounded-full transition duration-300 w-1/2 mb-6"
          />
          <p class="text-lg sm:text-xl text-gray-600 mb-8 text-justify">
            Chez Logic, nous sommes des bâtisseurs d'avenir. Depuis notre premier coup de pelle,
            notre engagement envers l'excellence a été le moteur de chaque projet que nous
            entreprenons. Notre histoire est façonnée par des réussites, des défis relevés et des
            partenariats solides.
          </p>
        </div>

        <div class="order-first md:order-last">
          <img
            src="@/assets/description_img.webp"
            alt="Grue de chantier"
            class="hidden sm:block rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped></style>
