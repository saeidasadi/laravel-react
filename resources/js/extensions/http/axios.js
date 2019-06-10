import axios from "axios";

let token = document.head.querySelector('meta[name="csrf-token"]');

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;

export default axios;