<template>
  <section class="py-12 sm:py-16 lg:py-20 bg-blue-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-12">
        Nos Services
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(service, index) in MyService"
          :key="service.id"
          :class="[
            'group relative bg-white rounded-lg shadow-md overflow-hidden sm:transition-transform sm:transform sm:hover:scale-105 hover:shadow-lg min-h-[400px]',
            index === MyService.length - 2 ? 'sm:col-span-1 lg:col-span-1 lg:col-start-1' : '',
            index === MyService.length - 1 ? 'sm:col-span-2 lg:col-span-1 lg:col-start-3' : '',
          ]"
        >
          <!-- Image du service -->
          <img :src="service.image" :alt="service.titre" class="w-full h-48 object-cover" />

          <!-- Contenu du service -->
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ service.titre }}</h3>
            <p class="text-gray-600">
              {{ service.description }}
            </p>
          </div>

          <!-- Bouton "En savoir plus" -->
          <router-link
            to="/services"
            class="absolute bottom-0 left-0 right-0 p-6 bg-white bg-opacity-90 opacity-100 group-hover:opacity-100 transition-opacity"
          >
            <button
              class="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
            >
              En savoir plus
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const MyService = ref([
  {
    id: '1',
    image: 'src/assets/batiment.webp',
    titre: 'Bâtiment Travaux Publics',
    description: " Construction de bâtiments ainsi que la réalisationd'infrastructures publiques.",
    linkformore: '#routelink',
  },
  {
    id: '2',
    image: 'src/assets/beton.webp',
    titre: 'Vente de Béton',
    description:
      "Nous fournissons du béton prêt à l'emploiaux entreprises de construction, auxentrepreneurs et aux particuliers pour leursprojets de construction.",
    linkformore: '#routelink',
  },
  {
    id: '3',
    image: 'src/assets/engins.webp',
    titre: "Location d'engins lourds",
    description:
      "Service de mise à disposition temporaire de machines de construction et d'équipements lourds. ",
    linkformore: '#routelink',
  },
  {
    id: '4',
    image: 'src/assets/prefa.webp',
    titre: 'Préfa',
    description: 'Nous commercialisons des éléments de construction préfabriqués en usine. ',
    linkformore: '#routelink',
  },
  {
    id: '5',
    image: 'src/assets/piste.webp',
    titre: 'Assainissement et Aménagement des pistes',
    description:
      " Comprend la construction, la rénovation ou l'entretien des routes, des chemins de terre et autres.",
    linkformore: '#routelink',
  },
])
</script>

<style></style>
