require('./bootstrap');

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();

Vue.component('Users', require('../components/frontEnd/mastering/Users').default)
Vue.component('Admin', require('../components/backEnd/mastering/index').default)

import { routes } from './routes';
const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
    document.title = 'Shanto' + ' | ' + to.meta
    next()
})


const app = new Vue({ router }).$mount('#app')
