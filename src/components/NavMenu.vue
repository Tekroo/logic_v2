<template>
  <header class="flex justify-between px-3 bg-white text-blue-900 items-center shadow-md h-[50px]">
    <!-- Logo -->
    <div class="font-bold text-4xl">
      <router-link to="/">
        <img src="@/assets/Logic.webp" alt="Logo de l'entreprise" class="h-10" />
        <!-- Ajustez la hauteur ici -->
      </router-link>
    </div>

    <!-- Boutons du menu mobile -->
    <div class="md:hidden">
      <!-- Bouton pour ouvrir le menu -->
      <button @click="openMenu" v-if="!isMenuOpen" class="focus:outline-none">
        <i class="fas fa-bars text-2xl"></i>
      </button>
      <button @click="closeMenu" v-if="isMenuOpen" class="focus:outline-none">
        <i class="fas fa-times text-2xl"></i>
      </button>
    </div>

    <!-- Menu principal -->
    <nav :class="{ hidden: !isMenuOpen, block: isMenuOpen }" class="md:block">
      <ul class="flex flex-col md:flex-row md:space-x-4">
        <!-- Boucle sur les éléments du menu -->
        <li
          v-for="item in Menu"
          :key="item.name"
          class="relative group"
          @mouseenter="openSubMenu(item.name)"
          @mouseleave="closeSubMenu"
        >
          <!-- Lien principal -->
          <router-link
            :to="item.href"
            class="p-2 m-2 border-solid hover:font-bold block"
            @click="closeMenu"
          >
            {{ item.name }}
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'

// État pour gérer l'affichage du sous-menu
const activeSubMenu = ref(null)

// État pour gérer l'ouverture/fermeture du menu mobile
const isMenuOpen = ref(false)

// Ouvrir le sous-menu
const openSubMenu = (menuName) => {
  activeSubMenu.value = menuName
}

// Fermer le sous-menu
const closeSubMenu = () => {
  activeSubMenu.value = null
}

// Ouvrir le menu mobile
const openMenu = () => {
  isMenuOpen.value = true
}

// Fermer le menu mobile
const closeMenu = () => {
  isMenuOpen.value = false
}

// Données du menu
const Menu = ref([
  { href: '/', name: 'Accueil' },
  { href: '/services', name: 'Nos services' },
  { href: '/realisation', name: 'Nos réalisations' },
  { href: '/team', name: 'Notre équipe' },
  { href: '/about', name: 'A propos' },
  { href: '/contact', name: 'Contact' },
])
</script>

<style scoped>
/* Styles pour le menu mobile */
@media (max-width: 767px) {
  nav {
    position: absolute;
    top: 50px; /* Hauteur du header */
    left: 0;
    right: 0;
    background-color: white;
    z-index: 1000;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  ul {
    flex-direction: column;
  }

  li {
    border-bottom: 1px solid #e2e8f0; /* Bordure entre les éléments du menu */
  }

  .group:hover .group-hover\:block {
    display: none; /* Désactive le sous-menu au survol sur mobile */
  }
}
</style>
