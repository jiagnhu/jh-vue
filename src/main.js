import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store/index";
import "./styles/acommon.scss";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import VueAxios from 'vue-axios'
import axios from './axios'

Vue.config.productionTip = false;
Vue.use(ElementUI)
Vue.use(VueAxios, axios)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
