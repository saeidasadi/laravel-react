import Vue from 'vue'
import Vuex from 'vuex'
import * as state from './store/state';
import * as getters from './store/getters';
import * as actions from './store/actions';
import * as mutations from './store/mutations';


Vue.use(Vuex);


const store = new Vuex.Store({
    state: Object.assign({}, state),
    getters,
    actions,
    mutations
});


// Enable HMR for vuex
if (module.hot) {
    module.hot.accept([
        './store/state',
        './store/getters',
        './store/actions',
        './store/mutations'
    ], () => {
        store.hotUpdate({
            state: require('./store/state'),
            getters: require('./store/getters'),
            actions: require('./store/actions'),
            mutations: require('./store/mutations')
        })
    })
}



export default store;