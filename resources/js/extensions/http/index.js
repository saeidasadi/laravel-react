import axios from './axios';
import Vue from 'vue';


function install(Vue, options) {

    Object.defineProperty(Vue.prototype, '$axios', {
        get() {
            return axios;
        }
    });

    Object.defineProperty(Vue.prototype, '$http', {
        get() {
            return axios;
        }
    });
}


Vue.use(install);
