<template>
    <div>
        <button @click="authenticate">Authenticate</button>

        <div>
            User: {{ auth }}
        </div>
    </div>
</template>

<script>
    import {SET_AUTH} from "../../store/auth/mutation-types";
    import {mapState} from "vuex";

    export default {
        name: "Header",

        computed: {
            ...mapState({
                auth: state => state.auth.auth,
            }),
        },

        methods: {
            authenticate() {
                setTimeout(() => {
                    this.$store.commit(SET_AUTH, {
                        first_name: 'Saeid',
                        last_name: "Asadi",
                    });
                }, 1000);
            }
        },
    }
</script>
