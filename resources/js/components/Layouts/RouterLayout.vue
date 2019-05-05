<template>
    <div>
        <h1>Hello App! dasdasd Hel</h1>

        <p>
            <router-link to="/foo">Go to Foo</router-link>
            <router-link to="/bar">Go to Bar</router-link>
            <router-link to="/user/100">Go to User 100</router-link>
            <router-link to="/user/200">Go to User 200</router-link>
            <router-link to="/user/300-">Go to User 300-</router-link>
            <router-link to="/user/400-saeid">Go to User 400-saeid</router-link>
            <router-link to="/user/400-saeid/profile">Go to User 400-saeid > Profile</router-link>
            <router-link to="/user/400-saeid/posts">Go to User 400-saeid > Posts</router-link>
            <router-link :to="{name:'f'}">Foo With Named Route</router-link>
            <router-link to="/example">Go To Example</router-link>
            <router-link to="/example-2">Go To Example 2</router-link>
        </p>

        <router-view></router-view>
    </div>
</template>

<script>

    export default {
        name: "RouterLayout",
    }
</script>