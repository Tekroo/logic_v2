<template>
  <section
    class="relative h-80 md:h-[300px] flex items-center justify-center text-white overflow-hidden"
  >
    <!-- Image de fond avec overlay -->
    <div class="absolute inset-0 z-0">
      <img src="@/assets/p2.webp" alt="Contact" class="w-full h-full object-cover" />
      <div
        class="absolute inset-0 bg-black opacity-60 transition-opacity duration-300 hover:opacity-50"
      ></div>
      <!-- Overlay sombre avec effet de survol -->
    </div>

    <!-- Contenu -->
    <div class="relative z-10 text-center">
      <!-- Titre principal -->
      <h1 class="text-4xl md:text-6xl font-bold mb-4">CONTACT</h1>

      <!-- Sous-titre -->
      <p class="text-lg md:text-xl italic mb-6">Construisons un monde solide et durable</p>
    </div>
  </section>

  <section class="bg-gray-50">
    <div class="py-12 sm:py-16 lg:py-20 px-4 sm:px-20 mx-auto max-w-7xl">
      <div class="mb-12 sm:mb-16">
        <h1 class="text-3xl font-bold text-blue-900 mb-6">Contact information</h1>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 text-gray-700">
          <div class="p-4 bg-white rounded-lg shadow-sm">
            <h3 class="font-bold text-lg mb-2">ADRESSE</h3>
            <p>03BP 468 Jericho Cotonou<br />Logic Bénin</p>
          </div>
          <div class="p-4 bg-white rounded-lg shadow-sm">
            <h3 class="font-bold text-lg mb-2">TÉLÉPHONE</h3>
            <p>
              <a href="tel:+22921322151" class="text-blue-500 hover:text-blue-700">+229 21322151</a
              ><br />
              <a href="tel:+22995819769" class="text-blue-500 hover:text-blue-700">+229 95819769</a>
            </p>
          </div>
          <div class="p-4 bg-white rounded-lg shadow-sm">
            <h3 class="font-bold text-lg mb-2">EMAIL</h3>
            <a href="mailto:contact@logic.bj" class="text-blue-500 hover:text-blue-700"
              >contact@logic.bj</a
            >
          </div>
        </div>
      </div>

      <div class="grid md:grid-cols-2 gap-8 lg:gap-12">
        <!-- Formulaire -->
        <div class="space-y-6 order-2 md:order-1">
          <h2 class="text-2xl font-bold text-blue-900 mb-6">Envoyez-nous un message</h2>
          <form class="space-y-6">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label for="nom" class="block text-sm font-medium text-gray-700 mb-2">Prénom</label>
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div>
                <label for="prenom" class="block text-sm font-medium text-gray-700 mb-2">Nom</label>
                <input
                  type="text"
                  id="prenom"
                  name="prenom"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
            </div>

            <div>
              <label for="company" class="block text-sm font-medium text-gray-700 mb-2"
                >Entreprise</label
              >
              <input
                type="text"
                id="company"
                name="company"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>

            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 mb-2"
                >Message</label
              >
              <textarea
                id="message"
                name="message"
                rows="5"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="Votre message..."
              ></textarea>
            </div>

            <button
              type="submit"
              class="w-full bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors font-medium"
            >
              Envoyer le message
            </button>
          </form>
        </div>

        <!-- Carte -->
        <div class="h-96 md:h-auto order-1 md:order-2">
          <div class="bg-white p-4 rounded-lg shadow-sm h-full">
            <h2 class="text-2xl font-bold text-blue-900 mb-4">Notre localisation</h2>
            <div class="rounded-lg overflow-hidden h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7930.303543147563!2d2.423117988369694!3d6.374399324463294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sJ%C3%A9richo%20Cotonou!5e0!3m2!1sfr!2sbj!4v1712671248183!5m2!1sfr!2sbj"
                width="100%"
                height="100%"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                class="rounded-lg"
              >
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Vous pouvez ajouter ici la logique de soumission du formulaire
</script>

<style>
/* Ajoutez des styles personnalisés si nécessaire */
</style>
