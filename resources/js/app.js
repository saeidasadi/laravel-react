require('./bootstrap');

import store from './store';
import App from './components/App';

window.Vue = require('vue');

const app = new Vue({
    el: '#app',

    store,

    render: h => h(App)
});
