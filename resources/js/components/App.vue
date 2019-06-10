<template>
    <div>
        <Header></Header>

        <!--<RouterLayout></RouterLayout>-->

        <!--<ElementLayout></ElementLayout>-->

        <!--<ValidationLayout></ValidationLayout>-->
    </div>
</template>

<script>
    import RouterLayout from './Layouts/RouterLayout';
    import ElementLayout from './Layouts/ElementLayout';
    import ValidationLayout from './Layouts/ValidationLayout';
    import Header from "./Partials/Header";

    export default {
        name: "App",

        components: {
            Header,
            RouterLayout,
            ElementLayout,
            ValidationLayout,
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