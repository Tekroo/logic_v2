<template>
  <section
    class="relative h-80 md:h-[500px] flex items-center justify-start text-white overflow-hidden"
  >
    <!-- Image de fond avec overlay -->
    <div class="absolute inset-0 z-0">
      <img
        src="@/assets/p2.webp"
        alt="Nos réalisations en construction"
        class="w-full h-full object-cover"
      />
      <div
        class="absolute inset-0 bg-black opacity-60 transition-opacity duration-300 hover:opacity-50"
      ></div>
      <!-- Overlay sombre avec effet de survol -->
    </div>

    <!-- Contenu -->
    <div class="relative z-10 ml-10 md:ml-20 max-w-2xl">
      <!-- Titre principal -->
      <h1 class="text-4xl md:text-6xl font-bold mb-4">RÉALISATIONS</h1>

      <!-- Sous-titre -->
      <p class="text-lg md:text-xl italic mb-6">
        Découvrez notre expertise à travers des projets concrets et innovants.
      </p>
    </div>
  </section>

  <section class="bg-white py-12">
    <div class="container mx-auto px-4" data-aos="fade-up">
      <h2 class="text-3xl font-bold text-center text-blue-900 mb-8">Nos réalisations</h2>

      <!-- Filtres par catégorie -->
      <div class="flex justify-center mb-8">
        <!-- Version mobile : menu déroulant -->
        <select
          v-model="selectedCategory"
          @change="filterProjects"
          class="p-2 border border-gray-300 rounded-lg w-full max-w-xs md:hidden"
        >
          <option value="">Toutes les catégories</option>
          <option v-for="category in categories" :key="category" :value="category">
            {{ category }}
          </option>
        </select>

        <!-- Version ordinateur -->
        <div class="hidden md:flex space-x-4">
          <!-- Bouton "Toutes les catégories" en premier -->
          <button
            @click="selectCategory('')"
            :class="[
              'px-4 py-2 rounded-lg transition-colors',
              selectedCategory === ''
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300',
            ]"
          >
            Toutes les catégories
          </button>

          <!-- Boutons pour chaque catégorie -->
          <button
            v-for="category in categories"
            :key="category"
            @click="selectCategory(category)"
            :class="[
              'px-4 py-2 rounded-lg transition-colors',
              selectedCategory === category
                ? 'bg-orange-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300',
            ]"
          >
            {{ category }}
          </button>
        </div>
      </div>

      <!-- Liste des projets -->
      <div v-for="(project, index) in paginatedProjects" :key="project.id" class="mb-12">
        <!-- Alternance basée sur l'index -->
        <div
          :class="[
            'flex flex-col md:flex-row items-center gap-6',
            index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse',
          ]"
        >
          <!-- Image -->
          <div class="w-full md:w-1/2" data-aos="fade-right">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md"
            />
          </div>

          <!-- Texte -->
          <div class="w-full md:w-1/2" data-aos="fade-left">
            <h3 class="text-2xl font-semibold text-blue-900 mb-4">{{ project.title }}</h3>
            <p class="text-gray-600 mb-4">{{ project.description }}</p>
            <router-link
              :to="`/realisations/${project.id}`"
              class="text-blue-500 hover:text-blue-700 font-semibold"
            >
              En savoir plus →
            </router-link>
          </div>
        </div>
      </div>

      <!-- Pagination -->
      <div class="flex justify-center mt-8">
        <button
          @click="currentPage = currentPage - 1"
          :disabled="currentPage === 1"
          class="mx-1 px-4 py-2 rounded-lg bg-gray-200 text-gray-700 disabled:opacity-50"
        >
          Précédent
        </button>
        <button
          v-for="page in visiblePages"
          :key="page"
          @click="currentPage = page"
          :class="[
            'mx-1 px-4 py-2 rounded-lg',
            currentPage === page ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700',
          ]"
        >
          {{ page }}
        </button>
        <button
          @click="currentPage = currentPage + 1"
          :disabled="currentPage === totalPages"
          class="mx-1 px-4 py-2 rounded-lg bg-gray-200 text-gray-700 disabled:opacity-50"
        >
          Suivant
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

// Données des projets
const projects = ref([
  {
    id: 1,
    title: 'Latrine Mairie Parakou',
    description:
      "  Explorez notre projet de construction de latrines à la mairie de Parakou. Ce projet a été conçu pour améliorer les conditions sanitaires et l'hygiène pour les employés et visiteurs de la mairie. Nous avons utilisé des matériaux durables et des conceptions ergonomiques pour assurer une utilisation pratique et une longue durée de vie. Ce travail incarne notre engagement à fournir des solutions infrastructurelles essentielles qui répondent aux besoins de la communauté. ",
    image: '/images/latrine/image (1).webp',
    category: 'Bâtiment',
  },
  {
    id: 2,
    title: 'Caserne Allada',
    description:
      " Voici notre réalisation de la construction d’un magasin de stockage. Ce projet a été conçu pour maximiser l'espace de stockage et assurer une gestion efficace des inventaires. En intégrant des solutions architecturales modernes et des matériaux de qualité, nous avons créé une structure capable de résister aux conditions les plus exigeantes tout en offrant une flexibilité optimale pour divers besoins de stockage. Ce projet souligne notre capacité à répondre aux besoins spécifiques de nos clients avec des solutions sur mesure. ",
    image: '/images/caserne/image (1).webp',
    category: 'Assainissement',
  },
  {
    id: 3,
    title: 'Pavage Kalalé',
    description:
      ' Admirez notre projet d’aménagement de pavés dans la ville de Kalalé. En transformant les voies urbaines, nous avons contribué à une meilleure qualité de vie pour les habitants. Chaque pavé a été minutieusement installé pour offrir une surface robuste et esthétique, reflétant notre expertise et notre dévouement à la durabilité. Ce travail est une preuve de notre capacité à réaliser des infrastructures de premier ordre, alliant fonctionnalité et beauté pour un développement urbain harmonieux. ',
    image: '/images/pave/image (1).webp',
    category: 'Préfa',
  },
  {
    id: 4,
    title: 'Démolition batiment HASSAN II',
    description:
      " Voici un aperçu de notre projet de démolition de bâtiment à Hassan II. Ce chantier a été exécuté avec un respect rigoureux des normes de sécurité et des procédures environnementales. Grâce à notre équipement moderne et notre savoir-faire technique, nous avons démantelé la structure de manière efficace et sécurisée, préparant le terrain pour de futurs développements. Ce projet démontre notre capacité à gérer des démolitions complexes tout en minimisant les impacts sur l'environnement et la communauté. ",
    image: '/images/hassan/image (1).webp',
    category: 'Préfa',
  },
  {
    id: 5,
    title: 'Photo magsin de stockage',
    description:
      " Voici notre réalisation de la construction d’un magasin de stockage. Ce projet a été conçu pour maximiser l'espace de stockage et assurer une gestion efficace des inventaires. En intégrant des solutions architecturales modernes et des matériaux de qualité, nous avons créé une structure capable de résister aux conditions les plus exigeantes tout en offrant une flexibilité optimale pour divers besoins de stockage. Ce projet souligne notre capacité à répondre aux besoins spécifiques de nos clients avec des solutions sur mesure. ",
    image: '/images/magasin/image (1).webp',
    category: 'Préfa',
  },
  {
    id: 6,
    title: 'Photo pistes PACER',
    description:
      ' Découvrez notre projet de construction de piste à PACER. Cette infrastructure a été réalisée pour améliorer la connectivité et faciliter le transport dans la région. En utilisant des techniques de construction avancées et des matériaux robustes, nous avons créé une piste durable et fiable qui répond aux exigences des utilisateurs. Ce projet illustre notre dévouement à améliorer les infrastructures de transport pour soutenir le développement économique et social. ',
    image: '/images/piste/image (1).webp',
    category: 'Préfa',
  },
  {
    id: 7,
    title: 'Bâtiment PDPIM',
    description:
      " Admirez notre construction du bâtiment PDPIM. Ce projet a été conçu pour fournir un espace fonctionnel et moderne pour les besoins administratifs et opérationnels. En mettant l'accent sur la durabilité et l'efficacité énergétique, nous avons utilisé des matériaux écologiques et des conceptions innovantes. Ce bâtiment est une preuve de notre capacité à livrer des projets de haute qualité qui répondent aux attentes des clients tout en respectant l'environnement. ",
    image: '/images/pdpim/image (1).webp',
    category: 'Préfa',
  },
  {
    id: 8,
    title: 'Chantier Aguégué',
    description:
      " Voici notre projet d’aménagement de voie à Aguégué. Cette initiative visait à améliorer l'accessibilité et la sécurité des déplacements pour les résidents locaux. Nous avons utilisé des techniques d'aménagement modernes et des matériaux de qualité pour créer une voie durable et esthétique. Ce projet témoigne de notre engagement à améliorer les infrastructures locales pour un développement urbain harmonieux et durable. ",
    image: '/images/chantier/image (1).webp',
    category: 'Préfa',
  },
  {
    id: 9,
    title: 'Travaux de démolition derrière la Présidence',
    description:
      " Découvrez notre projet de démolition derrière la présidence. Ce chantier a été mené avec un souci constant de sécurité et de minimisation des impacts environnementaux. Grâce à notre expertise et à nos équipements spécialisés, nous avons démantelé les structures existantes de manière efficace et respectueuse des normes en vigueur. Ce projet met en avant notre compétence à gérer des démolitions complexes tout en préservant l'intégrité du site pour les futurs développements. ",
    image: '/images/presidence/image (1).webp',
    category: 'Préfa',
  },
  // Ajoutez d'autres projets ici
])

// Catégories disponibles
const categories = ref(['Bâtiment', 'Assainissement', 'Préfa', 'Béton', 'Location'])

// Filtre sélectionné
const selectedCategory = ref('')

// Projets filtrés
const filteredProjects = computed(() => {
  if (!selectedCategory.value) return projects.value
  return projects.value.filter((project) => project.category === selectedCategory.value)
})

// Pagination
const itemsPerPage = 3 // Nombre de projets par page
const currentPage = ref(1)

const totalPages = computed(() => Math.ceil(filteredProjects.value.length / itemsPerPage))

const paginatedProjects = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return filteredProjects.value.slice(start, end)
})

// Pages visibles dans la pagination (adapté pour mobile)
const visiblePages = computed(() => {
  const pages = []
  const maxVisible = 3 // Nombre maximum de pages visibles
  let start = Math.max(1, currentPage.value - 1)
  let end = Math.min(totalPages.value, start + maxVisible - 1)

  if (end - start + 1 < maxVisible) {
    start = Math.max(1, end - maxVisible + 1)
  }

  for (let i = start; i <= end; i++) {
    pages.push(i)
  }
  return pages
})

// Fonction pour sélectionner une catégorie
const selectCategory = (category) => {
  selectedCategory.value = category
  currentPage.value = 1 // Réinitialiser la pagination après un filtre
}
</script>

<style scoped>
/* Styles pour la section */
.container {
  max-width: 1200px; /* Largeur maximale du contenu */
}

/* Styles pour les boutons de pagination */
button:hover {
  opacity: 0.8;
}
</style>
