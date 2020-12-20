<template>
    <div id="top-image">
        <HelloWorld msg="Seu futuro ainda mais incerto!" />
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
    background-repeat: none;
    background-size: 3000px;
    background-position: -400px;
}

@media only screen and (min-width: 3000px) {
  #top-image {
    background-size: 8000px;
    background-position: 0px;
    background-repeat: none;
  }
}


</style>