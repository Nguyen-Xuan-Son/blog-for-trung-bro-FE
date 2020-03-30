<template>
    <div id="app">
        <GuessComponent msg="Welcome to Your Vue.js App" />
    </div>
</template>

<script>
import GuessComponent from "./modules/guess";

export default {
    name: "App",
    components: {
        GuessComponent
    }
};
</script>

<style>
html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
