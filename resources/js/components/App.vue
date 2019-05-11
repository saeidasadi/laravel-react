<template>
    <div>
        <!--<RouterLayout></RouterLayout>-->
        <ElementLayout></ElementLayout>

    </div>
</template>

<script>
    import RouterLayout from './Layouts/RouterLayout';
    import ElementLayout from './Layouts/ElementLayout';

    export default {
        name: "App",

        components: {
            RouterLayout,
            ElementLayout,
        },

        mounted() {
            this.$http
                .get('/google.com')
                .then((response) => {
                    console.log(response);
                });
        }
    }
</script>