import Vue from "vue";
import Vuex from "vuex";
import admin from './modules/admin'
import getters from './getter'


Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        admin,

    },
    getters
  })
  export default store