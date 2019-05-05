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
    template: '<div>User Profile {{ $route.params.id }}</div>',
};
const UserPosts = {
    template: '<div>User Posts</div>',
};
const UserHome = {
    template: '<div>User Home</div>',
};

const routes = [
    {path: '/foo', component: Foo},
    {path: '/bar', component: Bar},
    {
        path: '/user/:id-:slug',
        component: User,
        children:[
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
    {path: '*', component: Unknown}
];

const router = new VueRouter({
    routes
});

export default router;