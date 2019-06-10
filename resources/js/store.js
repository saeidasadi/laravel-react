import Vue from 'vue'
import Vuex from 'vuex'
import auth from './store/auth';


Vue.use(Vuex);


const store = new Vuex.Store({
    modules: {
        auth: auth,
    }
});


// Enable HMR for vuex
if (module.hot) {
    module.hot.accept([
        './store/auth'
    ], () => {
        store.hotUpdate({
            modules: {
                auth: require('./store/auth')
            },
        })
    })
}


export default store;