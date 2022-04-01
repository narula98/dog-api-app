<template>
  <nav class="navbar navbar-expand-sm navC">
    <router-link to="/" class="navbar-brand" href="#">Dog Breed API</router-link>
  </nav>
  <router-view/>
</template>

<script>

export default {
  name: 'App',

};
</script>

<style lang="sass">
@import './app.scss'
</style>
>
