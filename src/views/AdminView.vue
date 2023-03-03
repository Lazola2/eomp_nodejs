<template lang="">
    <div class="backgroundimg d-flex align-items-center justify-content-center">
        <!-- show if clients are available and admin is logged in -->
        <div class="info" v-if="loggedIn === true">
            
            <div  v-if="isClients === true">
                <div class="clients" v-if="clients">
                    <div class="client" v-for="client in clients" :key="client">
                        <div class="ppic"><i class="fa-solid fa-user"></i></div>
                        <div class="user-info w-50">
                            <p>{{client.first_name}} {{client.last_name}}</p>
                            <p>{{client.user_role === 'admin' ? 'Admin' : 'Client'}}</p>
                        </div>
                        <div class="edit-buttons w-30">
                            <button class="btn_delete"><i class="fa-solid fa-trash"></i></button>
                            <button class="btn_edit"><i class="fa-solid fa-pen-to-square"></i></button>
                            <button class="btn_view"><i class="fa-solid fa-eye"></i></button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- vehicles -->
            <div class="vehicles" v-else>
                <div v-if="vehicles">
                    <div v-for="vehicle in vehicles" :key="vehicle">
                        <h1 class="bg-white">
                            {{vehicle.brand}}
                        </h1>
                    </div>
                </div>
            </div>

        </div>        

        <!-- show if clients are not available and admin is not logged in -->
        <div class="loginPage" v-else-if="loggedIn === false">
            <div class="loginLeft">
                <adminDesc class="admin_description"></adminDesc>
            </div>
            <div class="loginRight">
                <adminForm></adminForm>
            </div>
        </div>
    </div>
</template>
<script>
import adminForm from '@/components/AdminForm.vue'
import adminDesc from '@/components/AdminDesc.vue'
import {mapActions, mapGetters} from 'vuex'
export default {
    name: 'adminView',
    computed: {
        ...mapGetters(['clients', 'vehicles']),
    },
    created(){
        this.fetchClients();
        this.fetchVehicles();
    },
    methods: {
        ...mapActions(['fetchClients', 'fetchVehicles']),
    },
    components: {
        adminForm,
        adminDesc
    },
    data(){
        return {
            selectedClient: null,
            loggedIn: true,
            isClients: true
        }
    }
}
</script>
<style scoped>
.loginPage {
    width: 100vw;
    height: 100vh;
    display: flex;
}

.loginLeft {
    width: 100%;
    padding: 0 0 0 12rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.loginRight {
    width: 100%;
    padding: 0 15rem 0 5rem;
    
    display: flex;
    justify-content: center;
    align-items: center;
}
.admin_description {
    display: flex;
    justify-content: center;
    align-items: center;
}
.info {
    margin-top: 5rem;
    height: 85%;
    width: 70%;
    background-color: rgba(0, 0, 0, 0.094);
} 

.clients {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    gap: 0.5rem;
}

.client {
    height: 6rem;
    border-radius: 0.3rem;
    display: flex;
    background-color: rgba(255, 255, 255, 0.553);
}

.ppic {
    width: 12%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.ppic i{
    scale: 3;
    color: rgb(252, 153, 39);
}

.user-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem 0 0 0;
}

.user-info p{
    color: black;
    font-size: X-large;
}


</style>