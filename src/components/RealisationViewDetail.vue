<template>
  <section
    class="relative h-80 md:h-[300px] flex items-center justify-center text-white overflow-hidden"
  >
    <!-- Image de fond avec overlay -->
    <div class="absolute inset-0 z-0">
      <img src="@/assets/p2.webp" alt="Details realisation" class="w-full h-full object-cover" />
      <div
        class="absolute inset-0 bg-black opacity-60 transition-opacity duration-300 hover:opacity-50"
      ></div>
      <!-- Overlay sombre avec effet de survol -->
    </div>

    <!-- Contenu -->
    <div class="relative z-10 text-start">
      <div class="flex items-center mb-3">
        <router-link to="/" class="hover:text-blue-700 font-semibold"> Accueil > </router-link>
        <router-link to="/realisation" class="ml-2 hover:text-blue-700 font-semibold">
          Réalisations >
        </router-link>
        <p class="text-sm md:text-base ml-2">{{ realisation?.title }}</p>
      </div>
    </div>
  </section>

  <section class="bg-white py-12" data-aos="fade-up">
    <div class="container mx-auto px-4">
      <h1 class="text-3xl font-bold text-center text-blue-900 mb-8">{{ realisation?.title }}</h1>
      <div class="flex flex-col md:flex-row items-center gap-8">
        <div class="w-full md:w-1/2">
          <img
            :src="realisation?.image"
            :alt="realisation?.title"
            class="w-full h-64 sm:h-96 object-cover rounded-lg shadow-md"
          />
        </div>
        <div class="w-full md:w-1/2">
          <p class="text-gray-600 mb-4">{{ realisation?.description }}</p>
          <p class="text-gray-600"><strong>Catégorie :</strong> {{ realisation?.category }}</p>
          <p class="text-gray-600"><strong>Date :</strong> {{ realisation?.date }}</p>
          <p class="text-gray-600"><strong>Lieu :</strong> {{ realisation?.location }}</p>
        </div>
      </div>
      <div class="text-center mt-8">
        <router-link to="/realisation" class="text-blue-500 hover:text-blue-700 font-semibold">
          ← Retour aux réalisations
        </router-link>
      </div>
    </div>
  </section>

  <!-- Section galerie -->
  <section class="bg-gray-50 py-12" data-aos="fade-up">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-8">Notre Galerie</h2>

      <!-- Galerie d'images -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="cursor-pointer overflow-hidden rounded-lg shadow-md"
          @click="openLightbox(index)"
           data-aos="flip-left"
        >
          <img
            :src="image.thumbnail"
            :alt="image.alt"
            class="w-full h-48 object-cover transform transition-transform duration-300 hover:scale-110"
          />
        </div>
      </div>

      <!-- Lightbox -->
      <div
        v-if="isLightboxOpen"
        class="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
        @click="closeLightbox"
      >
        <!-- Bouton pour fermer la lightbox -->
        <button class="absolute top-4 right-4 text-white text-2xl" @click.stop="closeLightbox">
          &times;
        </button>

        <!-- Bouton précédent -->
        <button
          class="absolute left-4 text-white text-2xl bg-black bg-opacity-50 p-2 rounded-full"
          @click.stop="prevImage"
        >
          &#10094;
        </button>

        <!-- Image agrandie -->
        <img
          :src="images[activeIndex].fullSize"
          :alt="images[activeIndex].alt"
          class="max-w-full max-h-full"
        />

        <!-- Bouton suivant -->
        <button
          class="absolute right-4 text-white text-2xl bg-black bg-opacity-50 p-2 rounded-full"
          @click.stop="nextImage"
        >
          &#10095;
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const realisationId = parseInt(route.params.id); // Convertir en nombre

const realisation = ref({
  title: '',
  description: '',
  image: '',
  category: '',
  date: '',
  location: '',
  images: [], // Les images seront chargées dynamiquement
});

// Fonction pour charger les images d'un projet
const loadProjectImages = (projectName, imageCount) => {
  const images = [];
  for (let i = 1; i <= imageCount; i++) {
    images.push({
      thumbnail: `/images/${projectName}/image (${i}).webp`,
      fullSize: `/images/${projectName}/image (${i}).webp`,
      alt: `Image ${i}`,
    });
  }
  realisation.value.images = images;
};

// Charger les données du projet
const fetchRealisation = () => {
  const realisations = [
    {
      id: 1,
      title: 'Latrine Mairie Parakou',
      description:
        " Explorez notre projet de construction de latrines à la mairie de Parakou. Ce projet a été conçu pour améliorer les conditions sanitaires et l'hygiène pour les employés et visiteurs de la mairie. Nous avons utilisé des matériaux durables et des conceptions ergonomiques pour assurer une utilisation pratique et une longue durée de vie. Ce travail incarne notre engagement à fournir des solutions infrastructurelles essentielles qui répondent aux besoins de la communauté. ",
      image: '/images/latrine/image (2).webp',
      category: 'Bâtiment',
      date: '2023-01-15',
      location: 'Cotonou, Bénin',
      folder: 'latrine', // Nom du dossier contenant les images
      imageCount: 10, // Nombre d'images dans le dossier
    },
    {
      id: 2,
      title: 'Caserne Allada',
      description:
        " Voici notre réalisation de la construction d’un magasin de stockage. Ce projet a été conçu pour maximiser l'espace de stockage et assurer une gestion efficace des inventaires. En intégrant des solutions architecturales modernes et des matériaux de qualité, nous avons créé une structure capable de résister aux conditions les plus exigeantes tout en offrant une flexibilité optimale pour divers besoins de stockage. Ce projet souligne notre capacité à répondre aux besoins spécifiques de nos clients avec des solutions sur mesure. ",
      image: '/images/caserne/image (2).webp',
      category: 'Bâtiment',
      date: '2023-01-15',
      location: 'Cotonou, Bénin',
      folder: 'caserne', // Nom du dossier contenant les images
      imageCount: 8, // Nombre d'images dans le dossier
    },
    {
      id: 3,
      title: 'Pavage Kalalé',
      description:
        " Admirez notre projet d’aménagement de pavés dans la ville de Kalalé. En transformant les voies urbaines, nous avons contribué à une meilleure qualité de vie pour les habitants. Chaque pavé a été minutieusement installé pour offrir une surface robuste et esthétique, reflétant notre expertise et notre dévouement à la durabilité. Ce travail est une preuve de notre capacité à réaliser des infrastructures de premier ordre, alliant fonctionnalité et beauté pour un développement urbain harmonieux. ",
      image: '/images/pave/image (2).webp',
      category: 'Bâtiment',
      date: '2023-01-15',
      location: 'Cotonou, Bénin',
      folder: 'pave', // Nom du dossier contenant les images
      imageCount: 11, // Nombre d'images dans le dossier
    },
    {
      id: 4,
      title: 'Démolition batiment HASSAN II',
      description:
        " Voici un aperçu de notre projet de démolition de bâtiment à Hassan II. Ce chantier a été exécuté avec un respect rigoureux des normes de sécurité et des procédures environnementales. Grâce à notre équipement moderne et notre savoir-faire technique, nous avons démantelé la structure de manière efficace et sécurisée, préparant le terrain pour de futurs développements. Ce projet démontre notre capacité à gérer des démolitions complexes tout en minimisant les impacts sur l'environnement et la communauté. ",
      image: '/images/hassan/image (2).webp',
      category: 'Bâtiment',
      date: '2023-01-15',
      location: 'Cotonou, Bénin',
      folder: 'hassan', // Nom du dossier contenant les images
      imageCount: 10, // Nombre d'images dans le dossier
    },
    {
      id: 5,
      title: 'Photo magsin de stockage',
      description:
        " Voici notre réalisation de la construction d’un magasin de stockage. Ce projet a été conçu pour maximiser l'espace de stockage et assurer une gestion efficace des inventaires. En intégrant des solutions architecturales modernes et des matériaux de qualité, nous avons créé une structure capable de résister aux conditions les plus exigeantes tout en offrant une flexibilité optimale pour divers besoins de stockage. Ce projet souligne notre capacité à répondre aux besoins spécifiques de nos clients avec des solutions sur mesure. ",
      image: '/images/magasin/image (2).webp',
      category: 'Bâtiment',
      date: '2023-01-15',
      location: 'Cotonou, Bénin',
      folder: 'magasin', // Nom du dossier contenant les images
      imageCount: 8, // Nombre d'images dans le dossier
    },
    {
      id: 6,
      title: 'Photo pistes PACER',
      description:
        " Découvrez notre projet de construction de piste à PACER. Cette infrastructure a été réalisée pour améliorer la connectivité et faciliter le transport dans la région. En utilisant des techniques de construction avancées et des matériaux robustes, nous avons créé une piste durable et fiable qui répond aux exigences des utilisateurs. Ce projet illustre notre dévouement à améliorer les infrastructures de transport pour soutenir le développement économique et social. ",
      image: '/images/piste/image (2).webp',
      category: 'Bâtiment',
      date: '2023-01-15',
      location: 'Cotonou, Bénin',
      folder: 'piste', // Nom du dossier contenant les images
      imageCount: 19, // Nombre d'images dans le dossier
    },
    {
      id: 7,
      title: 'Bâtiment PDPIM',
      description:
        " Admirez notre construction du bâtiment PDPIM. Ce projet a été conçu pour fournir un espace fonctionnel et moderne pour les besoins administratifs et opérationnels. En mettant l'accent sur la durabilité et l'efficacité énergétique, nous avons utilisé des matériaux écologiques et des conceptions innovantes. Ce bâtiment est une preuve de notre capacité à livrer des projets de haute qualité qui répondent aux attentes des clients tout en respectant l'environnement. pdpim",
      image: '/images/pdpim/image (2).webp',
      category: 'Bâtiment',
      date: '2023-01-15',
      location: 'Cotonou, Bénin',
      folder: 'pdpim', // Nom du dossier contenant les images
      imageCount: 4, // Nombre d'images dans le dossier
    },
    {
      id: 8,
      title: 'Chantier Aguégué',
      description:
        " Voici notre projet d’aménagement de voie à Aguégué. Cette initiative visait à améliorer l'accessibilité et la sécurité des déplacements pour les résidents locaux. Nous avons utilisé des techniques d'aménagement modernes et des matériaux de qualité pour créer une voie durable et esthétique. Ce projet témoigne de notre engagement à améliorer les infrastructures locales pour un développement urbain harmonieux et durable. chantier",
      image: '/images/chantier/image (1).webp',
      category: 'Bâtiment',
      date: '2023-01-15',
      location: 'Cotonou, Bénin',
      folder: 'chantier', // Nom du dossier contenant les images
      imageCount: 20, // Nombre d'images dans le dossier
    },
    {
      id: 9,
      title: 'Travaux de démolition derrière la Présidence',
      description:
        " Découvrez notre projet de démolition derrière la présidence. Ce chantier a été mené avec un souci constant de sécurité et de minimisation des impacts environnementaux. Grâce à notre expertise et à nos équipements spécialisés, nous avons démantelé les structures existantes de manière efficace et respectueuse des normes en vigueur. Ce projet met en avant notre compétence à gérer des démolitions complexes tout en préservant l'intégrité du site pour les futurs développements. presidence",
      image: '/images/presidence/image (2).webp',
      category: 'Bâtiment',
      date: '2023-01-15',
      location: 'Cotonou, Bénin',
      folder: 'presidence', // Nom du dossier contenant les images
      imageCount: 5, // Nombre d'images dans le dossier
    },

    // Ajoutez d'autres projets...
  ];

  const found = realisations.find((r) => r.id === realisationId);
  if (found) {
    realisation.value = { ...found, images: [] }; // Initialiser avec un tableau vide
    loadProjectImages(found.folder, found.imageCount); // Charger les images du dossier
  } else {
    router.push('/notfound'); // Redirection si l'ID n'existe pas
  }
};

// Lightbox
const isLightboxOpen = ref(false);
const activeIndex = ref(0);

const openLightbox = (index) => {
  activeIndex.value = index;
  isLightboxOpen.value = true;
};

const closeLightbox = () => {
  isLightboxOpen.value = false;
};

const prevImage = () => {
  activeIndex.value = (activeIndex.value - 1 + images.value.length) % images.value.length;
};

const nextImage = () => {
  activeIndex.value = (activeIndex.value + 1) % images.value.length;
};

const images = computed(() => realisation.value.images || []);

onMounted(() => {
  fetchRealisation();
});
</script>

<style scoped>
/* Styles pour la lightbox */
img {
  max-width: 90vw;
  max-height: 90vh;
}
</style>