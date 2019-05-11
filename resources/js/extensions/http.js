import Axios from "axios";

export default function install(Vue, options) {
    let axios = Axios.create(options);

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