<template>
  <section
    class="relative h-80 md:h-[300px] flex items-center justify-center text-white overflow-hidden"
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
    <div class="relative z-10 text-center">
      <!-- Titre principal -->
      <h1 class="text-4xl md:text-6xl font-bold mb-4">Notre Équipe</h1>

      <!-- Sous-titre -->
      <p class="text-lg md:text-xl italic mb-6">Construisons un monde solide et durable</p>
    </div>
  </section>

  <div class="container mx-auto px-4 py-16">
    <!-- Mot du directeur -->
    <div
      class="bg-gray-100 p-8 rounded-lg shadow-md flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-8"
    >
      <!-- Photo du directeur -->
      <div class="w-48 h-48 rounded-lg overflow-hidden flex-shrink-0">
        <img
          src="@/assets/directeur.webp"
          alt="Photo du directeur"
          class="w-full h-full object-cover"
        />
      </div>
      <!-- Texte du directeur -->
      <div class="text-center md:text-left">
        <h2 class="text-2xl font-semibold mb-4">Mot du Directeur</h2>
        <p class="text-gray-700 mb-6 text-justify">
          Chez Logic, nous croyons fermement en la puissance de la construction pour façonner un
          avenir meilleur. Depuis notre fondation, nous nous sommes engagés à fournir des services
          de qualité exceptionnelle, à réaliser des projets qui transforment les communautés et à
          construire des relations solides avec nos clients et partenaires. Nous sommes fiers de
          notre équipe talentueuse et dévouée, qui travaille sans relâche pour réaliser les
          aspirations et les visions de nos clients. Que ce soit pour construire des infrastructures
          essentielles, rénover des bâtiments historiques ou développer des solutions innovantes,
          nous sommes là pour répondre à tous vos besoins en matière de construction. En parcourant
          notre site, j'espère que vous découvrirez notre passion pour l'excellence, notre
          engagement envers la durabilité et notre détermination à réaliser des projets qui font la
          différence. N'hésitez pas à nous contacter pour discuter de vos projets et découvrir
          comment nous pouvons vous accompagner dans leur réalisation.
        </p>
        <!-- Nom et titre du directeur -->
        <div>
          <p class="text-lg font-semibold">Bonaventure AHEHEHINNOU</p>
          <p class="text-gray-600">Directeur Général</p>
        </div>
      </div>
    </div>

    <!-- Section Notre Équipe -->
    <h2 class="text-3xl font-bold text-center mt-16 mb-8">Notre Équipe</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Carte Membre 1 -->
      <div class="bg-white p-6 rounded-lg shadow-md text-center">
        <!-- Icône du métier -->
        <div class="flex items-center justify-center mx-auto mb-4">
          <img
            src="@/assets/equipe1.webp"
            alt="equiîer1"
            class="w-24 h-24 rounded-full border-2 border-cyan-950"
          />
        </div>
        <!-- Nom et rôle -->
        <h3 class="text-xl font-semibold mb-2">Jean Dupont</h3>
        <p class="text-gray-600 mb-4">Chef de Projet</p>
        <!-- Icônes des réseaux sociaux -->
        <div class="flex justify-center space-x-4">
          <a
            href="https://www.linkedin.com/in/logic-842323301?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            class="hover:text-white bg-slate-300 p-1 rounded-full"
            aria-label="LinkedIn"
          >
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61557700384107"
            target="_blank"
            class="hover:text-white bg-slate-300 p-1 rounded-full"
            aria-label="Facebook"
          >
            <i class="fab fa-facebook-f"> </i>
          </a>
        </div>
      </div>

      <!-- Carte Membre 2 -->
      <div class="bg-white p-6 rounded-lg shadow-md text-center">
        <!-- Icône du métier -->
        <div class="flex items-center justify-center mx-auto mb-4">
          <img
            src="@/assets/equipe2.webp"
            alt="equipier2"
            class="w-24 h-24 rounded-full border-2 border-yellow-600"
          />
        </div>
        <!-- Nom et rôle -->
        <h3 class="text-xl font-semibold mb-2">Marie Curie</h3>
        <p class="text-gray-600 mb-4">Architecte</p>
        <!-- Icônes des réseaux sociaux -->
        <div class="flex justify-center space-x-4">
          <a
            href="https://www.linkedin.com/in/logic-842323301?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            class="hover:text-white bg-slate-300 p-1 rounded-full"
            aria-label="LinkedIn"
          >
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61557700384107"
            target="_blank"
            class="hover:text-white bg-slate-300 p-1 rounded-full"
            aria-label="Facebook"
          >
            <i class="fab fa-facebook-f"> </i>
          </a>
        </div>
      </div>

      <!-- Carte Membre 3 -->
      <div class="bg-white p-6 rounded-lg shadow-md text-center">
        <!-- Icône du métier -->
        <div class="flex items-center justify-center mx-auto mb-4">
          <img
            src="@/assets/equipe3.webp"
            alt="euipier1"
            class="w-24 h-24 rounded-full border-2 border-red-600"
          />
        </div>
        <!-- Nom et rôle -->
        <h3 class="text-xl font-semibold mb-2">Pierre Durand</h3>
        <p class="text-gray-600 mb-4">Ingénieur Structure</p>
        <!-- Icônes des réseaux sociaux -->
        <div class="flex justify-center space-x-4">
          <a
            href="https://www.linkedin.com/in/logic-842323301?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            class="hover:text-white bg-slate-300 p-1 rounded-full"
            aria-label="LinkedIn"
          >
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61557700384107"
            target="_blank"
            class="hover:text-white bg-slate-300 p-1 rounded-full"
            aria-label="Facebook"
          >
            <i class="fab fa-facebook-f"> </i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
/* Ajoutez des styles personnalisés si nécessaire */
</style>
