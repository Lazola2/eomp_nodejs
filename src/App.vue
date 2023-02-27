<template>
   <navbar></navbar>
  <router-view/>
</template>

<script>
import navbar from "@/components/Navbar.vue";

export default {
  name: 'HomeView',
  components: {
    navbar
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}





</style>
