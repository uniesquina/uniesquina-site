<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<style scoped>
.hello {
  color: #ffffff;
  font-size: calc(12px + 5vw);
  text-shadow: 5px 5px 5px #3b4252;
}


</style>
