<template>
  <section class="sm:py-16 lg:py-20 bg-white py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
        Nos engagements
      </h2>
      <div class="flex flex-col md:flex-row md:justify-around items-center gap-8">
        <!-- Photo -->
        <div class="w-full md:w-1/2">
          <img
            src="@/assets/en.webp"
            alt="Nos engagements"
            class="rounded-lg shadow-md w-full h-72 md:h-96"
          />
        </div>

        <!-- Texte -->
        <div class="w-full md:w-1/2">
          <h3 class="text-2xl font-semibold text-blue-900 mb-4">Notre engagement envers vous</h3>
          <p class="text-gray-600 mb-4 text-justify">
            <i>Logic</i> est connu pour son engagement absolu envers l'excellence, l'intégrité et le
            respect de l'environnement. Nous nous positionnons en tant que l'un des meilleurs
            fournisseurs des solutions de construction de la plus haute qualité, répondant aux
            normes les plus strictes de sécurité et de durabilité. Notre équipe dévouée, composée
            d'experts, travaille sans relâche pour réaliser chaque projet avec précision et
            fiabilité. La structure s'investit également dans la responsabilité sociale en cherchant
            activement à contribuer positivement à sa communauté locale et minimiser ses empreintes
            environnementales .
          </p>
          <router-link to="/a-propos" class="text-blue-500 hover:text-blue-700 font-semibold">
            En savoir plus →
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Aucune logique spécifique nécessaire pour cette section
</script>

<style scoped>
/* Styles pour la section */
.container {
  max-width: 1200px; /* Largeur maximale du contenu */
}

/* Effet de survol pour le lien */
.text-blue-500:hover {
  text-decoration: underline;
}

/* Styles pour l'image */
.rounded-lg {
  border-radius: 0.5rem;
}
.shadow-md {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
