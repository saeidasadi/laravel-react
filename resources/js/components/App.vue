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
            let $x = this.$http.get('/response')
                .then((response) => {
                    console.log('success');

                    return response;
                })
                .catch((e) => {
                    console.log('error');

                    return e;
                })
                .finally(() => {
                    console.log('fanally');
                });
        }
    }
</script>