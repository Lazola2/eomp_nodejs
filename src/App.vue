<template>
   <navbar></navbar>
   <userButton></userButton>
  <router-view/>
</template>

<script>
  import navbar from "@/components/Navbar.vue";
  import userButton from "@/components/UserButton.vue"
  export default {
    name: 'HomeView',
    components: {
      navbar,
      userButton
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-family: 'Nunito', sans-serif;
}







</style>
