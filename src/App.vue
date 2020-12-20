<template>
  <div id="app">
    <NavBar />
    <TopImage />
    <div id="content">
      <section class="column">             
        <router-view></router-view>
      </section>
    </div>
    <footer class="column">
      UniEsquina é a maior Instituição de Ensino Superior Fictícia da Terra Plana
      <br />
      Backgroung image from <a href="http://www.freepik.com">Designed by wirestock / Freepik</a>
    </footer>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import TopImage from "./components/TopImage.vue";

export default {
  name: "App",
  components: {    
    NavBar,
    TopImage
  }
};
</script>

<style>


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#content {
  margin-top: 30px;
}

footer {
  text-align: center;
}
</style>
