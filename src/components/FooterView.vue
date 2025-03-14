<template>
  <footer class="bg-blue-900 text-white py-8">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Section 1 : À propos -->
        <div>
          <h3 class="text-xl font-bold mb-4">À propos de nous</h3>
          <p class="text-sm">
            Logic est une entreprise spécialisée dans la construction, l'assainissement, et bien plus encore. Nous nous engageons à fournir des services de qualité à nos clients.
          </p>
        </div>

        <!-- Section 2 : Liens utiles -->
        <div>
          <h3 class="text-xl font-bold mb-4">Liens utiles</h3>
          <ul class="space-y-2">
            <li>
              <router-link to="/" class="hover:text-blue-300">Accueil</router-link>
            </li>
            <li>
              <router-link to="/about" class="hover:text-blue-300">A propos</router-link>
            </li>
            <li>
              <router-link to="/team" class="hover:text-blue-300">Notre équipe</router-link>
            </li>
            <li>
              <router-link to="/contact" class="hover:text-blue-300">Contact</router-link>
            </li>
          </ul>
        </div>

        <!-- Section 3 : Contact -->
        <div>
          <h3 class="text-xl font-bold mb-4">Contactez-nous</h3>
          <ul class="space-y-2">
            <li class="flex items-center">
              <i class="fas fa-map-marker-alt mr-2"></i>
              <span> 03BP 468, Jericho, Cotonou Bénin</span>
            </li>
            <li class="flex items-center">
              <i class="fas fa-phone mr-2"></i>
              <a href="tel:+22921322151">+229 21322151 </a> / <a href="tel:+22995819769"> +229 95819769</a>
            </li>
            <li class="flex items-center">
              <i class="fas fa-envelope mr-2"></i>
              <a href="mailto:contact@logic.bj">contact@logic.bj</a>            
            </li>
          </ul>
        </div>
      </div>

      <!-- Section 4 : Copyright et réseaux sociaux -->
      <div class="border-t border-blue-800 mt-8 pt-8 text-center">
        <div class="flex justify-center space-x-8 mb-4">
          <!-- Facebook -->
          <a
            href="https://www.facebook.com/profile.php?id=61557700384107"
            target="_blank"
            class="hover:text-blue-300"
            aria-label="Facebook"
          >
            <i class="fab fa-facebook-f"></i>
          </a>

          <!-- Twitter -->
          <a
            href="https://x.com/LogicBTP?t=o_WHYfROfhQy60uyv4o54A&s=09"
            target="_blank"
            class="hover:text-blue-300"
            aria-label="Twitter"
          >
            <i class="fab fa-twitter"></i>
          </a>

          <!-- LinkedIn -->
          <a
            href="https://www.linkedin.com/in/logic-842323301?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            class="hover:text-blue-300"
            aria-label="LinkedIn"
          >
            <i class="fab fa-linkedin-in"></i>
          </a>
        </div>
        <p class="text-sm">
          &copy; {{ new Date().getFullYear() }} Logic. Tous droits réservés.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Aucune logique spécifique nécessaire pour ce footer
</script>

<style scoped>
/* Styles spécifiques au footer */
footer {
  background-color: #1a365d; /* Couleur de fond du footer */
}

.container {
  max-width: 1200px; /* Largeur maximale du contenu */
}

/* Icônes FontAwesome */
.fab, .fas {
  font-size: 1.25rem; /* Taille des icônes */
}
</style>