import { createStore } from 'vuex'

const URL = 'https://node-api-eomp.onrender.com/';

export default createStore({
  state: {
    vehicles: null,
    vehicle: null,
    clients: null,
    client: null
  },
  getters: {
    vehicles(state) {
      return state.vehicles;
    },
    vehicle(state) {
      return state.vehicle;
    },
    clients(state) {
      return state.clients;
    },
    client(state) {
      return state.client;
    }
  },
  mutations: {
    setVehicles(state, vehicles){
      state.vehicles = vehicles;
    },
    setVehicle(state, vehicle) {
      state.vehicle = vehicle;
    },
    setClients(state, clients) {
      state.clients = clients;
    },
    setClient(state, client) {
      state.client = client;
    }

  },
  actions: {
    async fetchVehicles(context) {
      try { 
        let res = await fetch(URL + 'vehicles');
        let data = await res.json();
        console.log(data);
        context.commit('setVehicles', data.results.length !== 0 ? data.results : null);
      }catch(e) {
        console.log(e);
      }
    },

    async fetchVehicle(context, id) {
      try { 
        let res = await fetch(`${URL}vehicle/${id}`);
        let data = await res.json();
        console.log(data);
        context.commit('setVehicle', data.results.length !== 0 ? data.results : null);
      }catch(e) {
        console.log(e);
      }
    },

    async fetchClients(context) {
      try { 
        let res = await fetch(URL + 'clients');
        let data = await res.json();
        console.log(data);
        context.commit('setClients', data.results.length !== 0 ? data.results : null);
      }catch(e) {
        console.log(e);
      }
    },

    async fetchClient(context, id) {
      try { 
        let res = await fetch(`${URL}client/${id}`);
        let data = await res.json();
        console.log(data);
        context.commit('setClient', data.results.length !== 0 ? data.results : null);
      }catch(e) {
        console.log(e);
      }
    }
  },
})
