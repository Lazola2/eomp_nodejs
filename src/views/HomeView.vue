<template>
  <div class="backgroundimg">
    <div class="paragraph">
      <h3 class="screen-text">
        <span class="buy">Buy</span> an amazing car<br>at an amazing <span class="price">price</span> 
      </h3>
      <p class="parag">From the smallest compact cars we've got to the biggest SUV's you can think of 
        <span class="orange">
          we've got you covered.
        </span>
      </p>
      <router-link to="/buy">
        <button class="btn-products orange">Buy a car
          <i class="bi bi-arrow-right arrow"></i>
        </button>
      </router-link>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
  .parag {
    font-size: 17px;
    width: 40vw;
    margin-top: 2rem;
  }

  .btn-products {
    background: none;
    border: 2px solid var(--theme-color);
    padding: .5rem 2.5rem;
    margin-top: 1rem;
    position: relative;
    background-size: 90%;
  }

  .btn-products:active .arrow {
    left: 108%;
  }

  .arrow {
    position: absolute;
    font-size: 40px;
    left: 90%;
    top: -20%;
    transition: .2s;
  }

  .btn-products::before {
    content: '';
    width: 0;
    height: 100%;
    background-color: var(--theme-color);
    position: absolute;
  }

  .btn-products:hover{
    animation: fill 1s ease-in-out forwards;
    color: #fff;
    outline: none;
  }

  .arrow:hover {
    color: var(--theme-color)
  }

  @keyframes fill {
    from {
      background: none;
      color: var(--theme-color);
    }

    to {
     background-color: var(--theme-color); 
    }
  }


</style>