import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Foo = {template: '<div>foo</div>'};

const Bar = {template: '<div>bar</div>'};

const Unknown = {template: '<div>404 - You Missed Out</div>'};

const User = {
    template: '<div>Hello User {{ $route.params.id }}, Slug: {{ $route.params.slug }}, HASH: {{ $route.hash }}</div>',
    watch: {
        '$route'(to, from) {
            console.log(to, from);
        }
    }
};

const routes = [
    {path: '/foo', component: Foo},
    {path: '/bar', component: Bar},
    {path: '/user/:id-:slug', component: User},
    {path: '*', component: Unknown}
];

const router = new VueRouter({
    routes
});

export default router;