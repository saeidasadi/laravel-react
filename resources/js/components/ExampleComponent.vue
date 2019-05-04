<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Example Component</div>

                    <div class="card-body">
                        I'm an example component 2. Hello {{ firstName }}

                        <br>

                        <input type="text" v-model="firstName">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ExampleComponent",

        data() {
            return {
                firstName: "",
            }
        },

        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
