import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Foo = {template: '<div>foo</div>'};

const Bar = {template: '<div>bar</div>'};

const Unknown = {template: '<div>404 - You Missed Out</div>'};

const User = {
    template: '<div>Hello User {{ $route.params.id }}, Slug: {{ $route.params.slug }}, HASH: {{ $route.hash }} -  Subview: <router-view></router-view></div>',
    watch: {
        '$route'(to, from) {
            console.log(to, from);
        }
    }
};

const UserProfile = {
    template: '<div>User Profile {{ $route.params.id }} Ok</div>',
};
const UserPosts = {
    template: '<div>User Posts</div>',
};
const UserHome = {
    template: '<div>User Home</div>',
};

// Using group put two components in same file, if we dont use it, there will be 2 chunk files
const ExampleComponent = () => import(/* webpackChunkName: "group-example" */ './components/ExampleComponent');
const ExampleLazy = () => import(/* webpackChunkName: "group-example" */ './components/ExampleLazy');

const routes = [
    {name: "f", path: '/foo', component: Foo},
    {path: '/bar', component: Bar},
    {
        path: '/user/:id-:slug',
        component: User,
        children: [
            {
                path: '',
                component: UserHome
            },
            {
                path: 'profile',
                component: UserProfile
            },
            {
                path: 'posts',
                component: UserPosts
            }
        ],
    },
    {path: '/example-2', component: ExampleLazy},
    {path: '/example', component: ExampleComponent},
    {path: '*', component: Unknown}
];

const router = new VueRouter({
    routes
});

export default router;