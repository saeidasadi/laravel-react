require('./bootstrap');

import Vue from 'vue';
import store from './store';
import router from './router';
import ElementUI from 'element-ui';
import Http from './extensions/http';
import App from './components/App';

Vue.use(ElementUI);
Vue.use(Http);

const app = new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
});
