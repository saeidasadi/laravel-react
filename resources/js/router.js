import Vue from 'vue';
import VueRouter from 'vue-router';
import coreRoutes from './routes/core';

Vue.use(VueRouter);

let routes = []
    .concat(coreRoutes);

const router = new VueRouter({
    routes,
});

export default router;