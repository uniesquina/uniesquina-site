<template>
  <nav class="navbar is-fixed-top topNav" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img src="../assets/logo.svg" width="112" height="28" />
      </a>
      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="mainNavbar"
        @click="showNav = !showNav"
        :class="{ 'is-active': showNav }"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="mainNavbar" class="navbar-menu" v-bind:class="{'is-active': showNav}">
      <div class="navbar-start">
        <router-link to="/" class="navbar-item" @click="showNav = false">Home</router-link>
        <router-link to="/sobre" class="navbar-item" @click="showNav = false">Quem somos?</router-link>
        <router-link to="/cursos" class="navbar-item" @click="showNav = false">Cursos</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data: function() {
    return {
      showNav: false
    };
  }
};
</script>

