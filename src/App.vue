<template>
  <NavMenu/>
  <router-view /> <!-- Affiche les composants des routes -->
  <FooterView/>
</template>

<script setup>
  import NavMenu from './components/NavMenu.vue';
  import FooterView from './components/FooterView.vue';

</script>

<style scoped>
</style>
