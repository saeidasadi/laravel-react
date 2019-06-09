<template>
    <div>
        <Header></Header>

        <router-link to="/foo">Go to Foo</router-link>

        <router-link to="/bar">Go to Bar</router-link>

        <div style="background-color: #eee; padding: 20px;">
            <router-view></router-view>
        </div>

        <Footer></Footer>
    </div>
</template>

<script>
    import Header from '../Partials/Header';
    import Footer from '../Partials/Footer';

    export default {
        name: "Main",

        components: {
            Header,
            Footer,
        },
    }
</script>