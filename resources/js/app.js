require('./bootstrap');

import App from './components/App';

window.Vue = require('vue');

const app = new Vue({
    el: '#app',
    render: h => h(App)
});
