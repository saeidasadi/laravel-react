import axios from './axios';
import Vue from 'vue';

let token = document.head.querySelector('meta[name="csrf-token"]');

let options = {
    // baseURL: 'http://hello.com',

    headers: {
        common: {
            'X-Requested-With': 'XMLHttpRequest',

            'X-CSRF-TOKEN': token.content
        },
    },
};

Vue.use(axios, options);
