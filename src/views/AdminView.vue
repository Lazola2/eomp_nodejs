<template lang="">
    <div class="backgroundimg d-flex align-items-center justify-content-center">
        <!-- show if clients are available and admin is logged in -->
        
        <!-- modal to update-->
        <div class="modal" tabindex="-1" id="editClient"  aria-labelledby="modalTitle" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">Update Client</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body d-flex flex-column gap-2">
                  <input placeholder="first name" type="text" class="form-control"  v-model="payload.first_name" >
                  <input placeholder="last name" type="text" class="form-control"  v-model="payload.last_name">
                  <input placeholder="gender" type="text" class="form-control"  v-model="payload.gender">
                  <input placeholder="cellphone" type="text" class="form-control" v-model="payload.cellphone">
                  <input placeholder="email" type="email" class="form-control"  v-model="payload.email">
                  <input placeholder="user role" type="role" class="form-control"  v-model="payload.user_role">
                  <input placeholder="profile" type="profile" class="form-control"  v-model="payload.profile_img">
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary" @click.prevent="finalizeUpdate(this.selectedClient)">Save changes</button>
                </div>
              </div>
            </div>
        </div>

        <div class="modal" tabindex="-1" id="showClient"  aria-labelledby="modalTitle" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">Client Details</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div>
                    <img class="profile-image" :src="this.payload.profile_img" alt="">
                </div>
                <div class="modal-body d-flex flex-column gap-2">
                  <input readonly placeholder="first name" type="text" class="form-control"  :value="this.payload.first_name" >
                  <input readonly placeholder="last name" type="text" class="form-control"  :value="this.payload.last_name">
                  <input readonly placeholder="gender" type="text" class="form-control"  :value="this.payload.gender">
                  <input readonly placeholder="cellphone" type="text" class="form-control" :value="this.payload.cellphone">
                  <input readonly placeholder="email" type="email" class="form-control"  :value="this.payload.email">
                  <input readonly placeholder="user role" type="role" class="form-control"  :value="this.payload.user_role">
                  <input readonly placeholder="profile" type="profile" class="form-control"  :value="this.payload.profile_img">
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
        </div>

        <div class="info px-3" v-if="loggedIn === true">  
            <button @click.prevent="toggleView" class="btn btn-dark text-white my-3">
                {{showClients ? 'Show Vehicles' : 'Show Clients'}}
            </button>
            <div  v-if="showClients === true">
                <div class="clients" v-if="clients">
                    <div class="client" v-for="client in clients" :key="client">
                        <div class="ppic"><i class="fa-solid fa-user"></i></div>
                        <div class="user-info w-50">
                            <p class="full-name">{{client.first_name}} {{client.last_name}}</p>
                            <p class="user-role">{{client.user_role === 'admin' ? 'Admin' : 'Client'}}</p>
                        </div>
                        <div class="edit-buttons w-30">
                            <button class="btn_delete" @click="deleteClient(client.client_id)"><i class="fa-solid fa-trash"></i></button>
                            <button class="btn_edit" @click="updateClient(client)" data-bs-toggle="modal" data-bs-target="#editClient"><i class="fa-solid fa-pen-to-square"></i></button>
                            <button class="btn_view" @click.prevent="showClient(client)" data-bs-toggle="modal" data-bs-target="#showClient"><i class="fa-solid fa-eye"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- vehicles -->
            <div class="vehicles" v-else>
                <div v-if="vehicles">
                    <div class="client" v-for="vehicle in vehicles" :key="vehicle">
                        <img class="car-image" :src="vehicle.image" alt="">
                        <div class="vehicle-info w-50">
                            <p class="brand_model">{{vehicle.brand}} {{vehicle.model}}</p>
                            <p class="type">{{vehicle.type}}</p>
                        </div>
                        <div class="edit-buttons w-30">
                            <button class="btn_delete" @click="deleteClient(vehicle.vehicle_id)"><i class="fa-solid fa-trash"></i></button>
                            <button class="btn_edit" @click="updateClient(vehicle)" data-bs-toggle="modal" data-bs-target="#editClient"><i class="fa-solid fa-pen-to-square"></i></button>
                            <button class="btn_view" @click.prevent="showVehicle(vehicle)" data-bs-toggle="modal" data-bs-target="#showClient"><i class="fa-solid fa-eye"></i></button>
                        </div>
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
    data(){
        return {
            loggedIn: true,
            showClients: true,
            payload: {
                client_id: null,
                first_name: '',
                last_name: '',
                gender: '',
                cellphone: '',
                email: '',
                user_role: '',
                profile_img: ''
            },
        }
    },
    computed: {
        ...mapGetters(['clients', 'vehicles']),
    },
    created(){
        this.fetchClients();
        this.fetchVehicles();
    },
    methods: {
        // toggle the view 
        toggleView() {
            this.showClients = !this.showClients;
        },

        deleteClient(id){          
            alert(`deleting client ${id}`)
            this.$store.dispatch('deleteClient', id);
            this.fetchClients();
            console.log(this.$store.message);
        },
        updateClient(client){        
            // set payload
            this.selectedClient = client;
            this.payload.client_id = client.client_id;
            this.payload.first_name = client.first_name;
            this.payload.last_name = client.last_name;
            this.payload.gender = client.gender;
            this.payload.cellphone = client.cellphone;  
            this.payload.email = client.email;
            this.payload.user_role = client.user_role;
            this.payload.profile_img = client.profile_img;        
        },

        finalizeUpdate(){
            this.$store.dispatch(`updateClient`, this.payload);
            // alert(JSON.stringify(this.payload));
            
            // this.fetchClients();
            // console.log(this.$store.message);
        },
        setUpdatePayload(){
        },

        editUser(){
            alert('clicked on edit user')
        },
        showClient(client){
            this.payload.first_name = client.first_name;
            this.payload.last_name = client.last_name;
            this.payload.gender = client.gender;
            this.payload.cellphone = client.cellphone;  
            this.payload.email = client.email;
            this.payload.user_role = client.user_role;
            this.payload.profile_img = client.profile_img;
        },
        ...mapActions(['fetchClients', 'fetchVehicles']),
    },
    components: {
        adminForm,
        adminDesc
    },
    
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
    overflow-y: auto;
} 

.clients {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    gap: 0.5rem;
}

.client, .vehicle {
    height: 6rem;
    border-radius: 0.3rem;
    display: flex;
    background-color: rgba(255, 255, 255, 0.553);
}

.vehicle {
    height: 10rem;
}

.ppic, .ppic-vehicle{
    width: 12%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.ppic i{
    scale: 3;
    color: black;
}

.user-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem 0 0 0;
}

.user-info .full-name{
    color: black;
    font-size: 22px;
}

.edit-buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
}

.edit-buttons i {
    scale: 1.5;
    background: none;
    border: none;
    color: black;

}

.edit-buttons > button {
    background: none;
    border: none;
}

.user-role {
    font-size: 18px;
    color: black
}

.profile-image, .car-image {
    height: 120px;
    border-radius: 50%;
    margin: 2rem;
}

.car-image {
    width: 10rem;
}

</style>