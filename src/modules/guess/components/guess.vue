<template>
    <div class="hello">
        <h2>Guess</h2>
        <h1>{{ msg }}</h1>
        <button @click="callApiGet">Call api [GET]</button>
        <button @click="callApiPost">Call api [POST]</button>
    </div>
</template>

<script>
import { getMethod, postMethod } from './../../../utils/api-service';

export default {
    name: "HelloWorld",
    props: {
        msg: String
    },
    methods: {
        callApiGet() {
            console.log(1);
            getMethod('/abc');
        },
        callApiPost() {
            console.log(1);
            postMethod('/abc', {id: 1});
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
