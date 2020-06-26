<template>
    <div id="top-image">
        <HelloWorld msg="Hello! Your Vue.JS app + Bulma" />
    </div>    
</template>

<script>
import HelloWorld from "../components/HelloWorld.vue";

export default {
    name: 'TopImage',
    components: {
        HelloWorld
    }
}
</script>

<style>

#top-image {
    width: 100%;     
    padding: 52px;
    padding-top: 104px;
    text-align: center;
    background-image: url('../assets/images/773.jpg');
    background-size: 3000px;
    background-position: -400px;
}

</style>