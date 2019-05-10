require('./bootstrap');

import Vue from 'vue';
import store from './store';
import router from './router';
import App from './components/App';
import ElementUI from 'element-ui';

Vue.use(ElementUI);

const app = new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
});
