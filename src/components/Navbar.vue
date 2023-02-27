<template lang="">
    <nav class="navbar navbar-expand-lg w-100">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link to="/">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/buy">Buy a car</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/login">Log in</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/signup">Sign up</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/admin">Admin</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/about">About us</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
</template>
<script>
export default {
  name: 'navbar'  
}
</script>
<style scoped>
    li {
        margin: 0 1rem;
        scale: 1.1;
        font-weight: 100;
    }
</style>