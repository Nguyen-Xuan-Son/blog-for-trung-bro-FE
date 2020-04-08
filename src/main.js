import Vue from "vue";
import VueRouter from "vue-router";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App.vue";
import routes from "./router-root";

import { beforeRouteEnterHandle } from "./services/gaunds";

Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({ mode: 'history', routes });

router.beforeEach(beforeRouteEnterHandle);

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');