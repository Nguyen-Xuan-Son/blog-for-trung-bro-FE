import Vue from "vue";
import VueRouter from "vue-router";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App.vue";
import routes from "./router-root";

Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({ mode: 'history', routes });

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');