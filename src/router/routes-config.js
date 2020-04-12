import Vue from 'vue';

// Router
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import routes from '@/router/routes';

export default new VueRouter({
    routes, // short for `routes: routes`
    linkActiveClass: 'active' // change to the Bootstrap class 'active'
});