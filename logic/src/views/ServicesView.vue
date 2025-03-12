<template>
  <section
    class="relative h-80 md:h-[300px] flex items-center justify-center text-white overflow-hidden"
  >
    <!-- Image de fond avec overlay -->
    <div class="absolute inset-0 z-0">
      <img src="@/assets/p2.webp" alt="A propos" class="w-full h-full object-cover" />
      <div
        class="absolute inset-0 bg-black opacity-60 transition-opacity duration-300 hover:opacity-50"
      ></div>
      <!-- Overlay sombre avec effet de survol -->
    </div>

    <!-- Contenu -->
    <div class="relative z-10 text-center">
      <!-- Titre principal -->
      <h1 class="text-4xl md:text-6xl font-bold mb-4">Nos services</h1>
    </div>
  </section>

  <section class="bg-gray-50 py-12">
    <div class="container mx-auto px-4">
      <!-- Titre de la section -->
      <!-- Sous-titre -->
      <p class="text-lg text-center md:text-xl italic mb-6">Construisons un monde solide et durable</p>

      <!-- Service 1 : Construction -->
      <div class="mb-12">
        <h3 class="text-2xl font-semibold text-blue-900 mb-4">Bâtiment Travaux Publics</h3>
        <div class="flex flex-col md:flex-row items-center gap-8">
          <div class="w-full md:w-1/2">
            <img
              src="@/assets/batiment1.webp"
              alt="Service de construction"
              class="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>
          <div class="w-full md:w-1/2">
            <p class="text-gray-600 mb-4">
              Nous réalisons des projets de construction résidentiels et commerciaux, en respectant
              les normes de qualité et les délais. Nos équipes expérimentées utilisent des matériaux
              de haute qualité pour garantir la durabilité et la sécurité de vos bâtiments.
            </p>
            <ul class="list-disc list-inside text-gray-600">
              <li>Construction de maisons individuelles</li>
              <li>Bâtiments commerciaux et industriels</li>
              <li>Gestion de projet clé en main</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Service 2 : Vente de Béton -->
      <div class="mb-12">
        <h3 class="text-2xl font-semibold text-blue-900 mb-4">Vente de Béton</h3>
        <div class="flex flex-col md:flex-row items-center gap-8">
          <div class="w-full md:w-1/2">
            <img
              src="@/assets/batiment1.webp"
              alt="Service de rénovation"
              class="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>
          <div class="w-full md:w-1/2">
            <p class="text-gray-600 mb-4">
              Nous rénovons vos espaces pour les moderniser tout en conservant leur charme et leur
              authenticité. Que ce soit pour une rénovation complète ou partielle, nous vous
              accompagnons à chaque étape du projet.
            </p>
            <ul class="list-disc list-inside text-gray-600">
              <li>Rénovation de maisons et appartements</li>
              <li>Modernisation de bureaux</li>
              <li>Travaux de décoration intérieure</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Service 3 : Assainissement et Aménagement des pistes -->
      <div class="mb-12">
        <h3 class="text-2xl font-semibold text-blue-900 mb-4">Assainissement et Aménagement des pistes</h3>
        <div class="flex flex-col md:flex-row items-center gap-8">
          <div class="w-full md:w-1/2">
            <img
              src="@/assets/batiment1.webp"
              alt="Service d'assainissement"
              class="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>
          <div class="w-full md:w-1/2">
            <p class="text-gray-600 mb-4">
              Nous proposons des solutions d'assainissement efficaces pour garantir un environnement
              sain et durable. Nos services incluent l'installation et la maintenance de systèmes
              d'assainissement adaptés à vos besoins.
            </p>
            <ul class="list-disc list-inside text-gray-600">
              <li>Installation de systèmes d'évacuation</li>
              <li>Traitement des eaux usées</li>
              <li>Maintenance préventive et curative</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Service 4 : Préfa -->
      <div class="mb-12">
        <h3 class="text-2xl font-semibold text-blue-900 mb-4">Préfa </h3>
        <div class="flex flex-col md:flex-row items-center gap-8">
          <div class="w-full md:w-1/2">
            <img
              src="@/assets/batiment1.webp"
              alt="Service de béton préfabriqué"
              class="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>
          <div class="w-full md:w-1/2">
            <p class="text-gray-600 mb-4">
              Nous fabriquons et installons des éléments en béton préfabriqué pour des constructions
              rapides et durables. Nos produits sont conçus pour répondre aux normes les plus
              strictes en matière de qualité et de sécurité.
            </p>
            <ul class="list-disc list-inside text-gray-600">
              <li>Fabrication de dalles et poutres</li>
              <li>Installation de murs préfabriqués</li>
              <li>Solutions sur mesure pour vos projets</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Service 5 : Location d'engins lourds -->
      <div class="mb-12">
        <h3 class="text-2xl font-semibold text-blue-900 mb-4">Location d'engins lourds</h3>
        <div class="flex flex-col md:flex-row items-center gap-8">
          <div class="w-full md:w-1/2">
            <img
              src="@/assets/batiment1.webp"
              alt="Service de location de matériel"
              class="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>
          <div class="w-full md:w-1/2">
            <p class="text-gray-600 mb-4">
              Nous mettons à votre disposition du matériel de construction de haute qualité pour vos
              projets. Que vous ayez besoin d'outils, d'équipements lourds ou de matériel
              spécialisé, nous avons ce qu'il vous faut.
            </p>
            <ul class="list-disc list-inside text-gray-600">
              <li>Location de pelleteuses et bulldozers</li>
              <li>Matériel de levage et de transport</li>
              <li>Service de livraison sur site</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Aucune logique spécifique nécessaire pour cette page
</script>

<style scoped>
/* Ajoutez des styles personnalisés si nécessaire */
</style>
