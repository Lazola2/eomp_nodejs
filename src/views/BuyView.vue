<template lang="">
    <div class="backgroundimg">
       <Vehicles/>
        <!-- uzobasi spina -->
       <loader/> 
    </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex';
import Vehicles from '@/components/Vehicles.vue'
import loader from '@/components/Loader.vue'

export default {
    components: {
        Vehicles,
        loader
    },
    computed: {
        ...mapGetters(['vehicles','vehicle']),
    },
    methods: {
        ...mapActions(['fetchVehicles', 'fetchVehicle']),
    },
    created(){
        this.fetchVehicles();
        this.fetchVehicle();
    }
}
</script>
<style scoped>
    .vehicles-container {
        height: 90vh;
        transform: translateY(10vh)
    }
</style>