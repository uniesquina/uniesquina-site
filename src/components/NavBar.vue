<template>
    <nav class="navbar is-fixed-top topNav" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="mainNavbar"
          @click="showNav = !showNav" :class="{ 'is-active': showNav }"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>        
      </div>
      <div id="mainNavbar" class="navbar-menu" v-bind:class="{'is-active': showNav}">
          <div class="navbar-start">
            <router-link to="/" class="navbar-item" @click="showNav = false">Home</router-link>
            <router-link to="/about" class="navbar-item" @click="showNav = false">About</router-link>
          </div>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data: function() {
      return {
          showNav: false
      }
  }
}
</script>

