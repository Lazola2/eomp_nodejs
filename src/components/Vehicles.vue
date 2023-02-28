<template lang="">
    <div class="vehicles-container w-100" v-if="vehicles">
        <div v-for="vehicle in vehicles" :key="vehicle">
            <!-- <h1>{{vehicle.model}}</h1> -->
            <div class="car">
                <div class="image"
                :style="{width: skillsItem.rate}"></div>
                <div class="price_model">
                    <p>Price:R {{vehicle.price}}</p>
                    <p>Model: {{vehicle.model}}</p>
                </div>
                
            </div>
        </div>
    </div>
    <div v-else>
        <!-- <h1 class="text-white">No vehicle found</h1> -->
    </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex';
export default {
    name: 'Vehicles',
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
    .car {
        width: 18rem;
        height: 24rem;
        background-color: rgba(255, 255, 255, 0.553);
        border-radius: 0.3rem;
        margin: 1rem;
        display: flex;
        flex-direction: column;
    }

    .price_model {
        display: flex;
        justify-content: space-between;
    }

    .image {
        width: 100%;
        height: 40%;
        object-fit: cover;
        background-size: cover;
    }
</style>