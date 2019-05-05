<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Example Component</div>

                    <div class="card-body">
                        Component Data: {{ firstName }}

                        <br>

                        Store Data: {{ storeName }}

                        <br>

                        <input type="text" v-model="firstName"> <button @click.prevent="handleChange">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {SET_NAME} from "../store/mutation-types";

    export default {
        name: "ExampleComponent",

        data() {
            return {
                firstName: "Saeid",
            }
        },

        methods:{
            handleChange(){
                this.$store.commit(SET_NAME, this.firstName);
            },
        },

        computed:{
            storeName(){
                return this.$store.state.name;
            }
        },

        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
