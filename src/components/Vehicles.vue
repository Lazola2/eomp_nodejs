<template lang="">
    <div class="vehicles-container w-100 d-flex flex-wrap px-lg-5  pt-5 justify-content-center" v-if="vehicles">
        <div class="filter-box mb-4 d-flex flex-column justify-content-center align-items-center rounded-3">
            <h2 class="text-white mb-3">Filter</h2>
            <form class="d-flex gap-4 px-3 w-75">
                <!-- brand -->
                <select name="brand" id="brand" class="form-control" v-model="brand">
                    <option value="Brand">Brand</option>
                    <option value="Mercedes-Benz">Mercedes-Benz</option>
                    <option value="BMW">BMW</option>
                    <option value="AUDI">AUDI</option>
                    <option value="HAVAL">HAVAL</option>
                </select>

                <!-- type -->
                <select name="type" id="type" class="form-control" v-model="type">
                    <option value="Type">Type</option>
                    <option value="Coup'e">Coup'e</option>
                    <option value="SUV">SUV</option>
                    <option value="Truck">Truck</option>
                    <option value="Sedan">Sedan</option>
                    <option value="Hatchback">Hatchback</option>
                </select>

                 <!-- Condition -->
                 <select name="condition" id="condition" class="form-control" v-model="condition">
                    <option value="Condition">Condition</option>
                    <option value="New">New</option>
                    <option value="Pre-Owned">Pre-Owned</option>
                </select>

                 <!-- color -->
                 <select name="color" id="color" class="form-control" v-model="color">
                    <option value="Color">Color</option>
                    <option value="Black">Black</option>
                    <option value="Orange">Orange</option>
                    <option value="Silver">Silver</option>
                    <option value="White">White</option>
                    <option value="Red">Red</option>
                </select>

                <button class="btn btn-dark text-white px-5" @click.prevent=filterByBrand> Filter </button>
            </form>
        </div>
        <div v-for="vehicle in vehicles" :key="vehicle">
            <!-- <h1>{{vehicle.model}}</h1> -->
            <div class="car position-relative">
                <div class="condition px-3 py-1 rounded-1 d-inline position-absolute">
                    {{vehicle.is_new ? 'New' : 'Pre-Owned'}}
                </div>
                <div class="image-holder">
                    <div class="image" :style="{backgroundImage: `url(${vehicle.image})`}">
                </div>
                </div>
                <div class="brand_model p-2">
                    <p><span>{{vehicle.brand}}</span> <span>{{vehicle.model}}</span></p>
                    <p><span>Price: </span> <span>R {{vehicle.price}}</span></p>    
                    <p><span>Type:</span><span>{{vehicle.type}}</span></p>
                    <p><span>Color:</span><span>{{vehicle.color}}</span></p>
                </div>
                <button class="btn_more">View more</button>
                
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
        filterByBrand(){
            let vehicles = this.vehicles;
            
            // filter by brand
            let filteredByBrand = this.brand === 'Brand' ? vehicles :
                vehicles.filter(vehicle => vehicle.brand === this.brand);
         
            // filter by color
            let filteredByColor = this.color === 'Color' ? filteredByBrand  :
            filteredByBrand.filter(vehicle => vehicle.color === this.color);    
            

            // filter by type
            let filteredByType = this.type === 'Type' ? filteredByColor :
                filteredByColor.filter(vehicle => vehicle.type === this.type);
                
                // filter by condition
                let filteredByCondition = this.condition === 'Condition' ? filteredByType :
                filteredByType.filter(vehicle => vehicle.condition === this.condition);  
                console.log(filteredByCondition);
           
            // console.log(filteredByCondition); 
        }
    },
    created(){
        this.fetchVehicles();
        this.fetchVehicle();
    },

    data(){
        return {
            brand: 'Brand',
            color:'Color',
            type: 'Type',
            condition: 'Condition'
        }
    }
}
</script>
<style scoped>
    .car {
        width: 18rem;
        height: 25rem;
        background-color: rgba(0, 0, 0, 0.687);
        border-radius: 0.3rem;
        margin: 1rem;
        display: flex;
        flex-direction: column;
        box-shadow: 0 0 20px 0 rgba(255, 200, 0, 0.144);
        overflow: hidden;
        z-index: 1000;
        align-items: center;
    }

    .condition {
        background-color: rgba(0, 0, 0, 0.8);
        color: rgb(252, 153, 39);
    }

    .brand_model {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin: 0 .3rem;
        gap: 0.5rem;
        width: 90%;
    }

    .image-holder {
        height: 40%;
        width: 100%;
        overflow: hidden;
    }

    .image {
        height: 100%;
        width: 100%;
        background-position: center;
        object-fit: cover;
        background-size: cover;
        z-index: -1;
    }

    .image:hover {
        scale: 1.16;
        transition: .3s ease-in-out;
        rotate: 2deg;
    }

    .vehicles-container {
        overflow-y: auto;
    }

    p {
        color: rgb(252, 153, 39);
    }

    .brand_model > p {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin: 0 .3rem;

    }

    .condition {
        right: 0;
        margin: 0.8rem;
    }

    .filter-box {
        width: 88%;
        height: 25%;
        background: rgba(41, 41, 41, 0.42);
    }

    .btn_more {
        margin-top: 1.5rem ;
        width: 70%;
        height: 2rem;
        background-color: rgb(252, 153, 39);
        color: white;
        border-radius: 0.2rem;
        border:none;

    }

</style>