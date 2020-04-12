// Vue
import Vue from 'vue';
import App from './App.vue';

// Router
import router from '@/router/routes-config';

// Initialise the app
new Vue({
    router,
    render: h => h(App)
}).$mount('#app'); 
