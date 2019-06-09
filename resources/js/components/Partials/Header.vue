<template>

    <div>
        <h1>Header</h1>

        <Navbar></Navbar>
    </div>

</template>

<script>

    import Navbar from '../Partials/Navbar';

    export default {
        name: "Header",


        components: {
            Navbar,
        }
    }
</script>