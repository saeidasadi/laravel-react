require('./bootstrap');

import Vue from 'vue';
import store from './store';
import router from './router';
import ElementUI from 'element-ui';
import App from './components/App';
import './extensions/http';

Vue.use(ElementUI);

const app = new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
});
