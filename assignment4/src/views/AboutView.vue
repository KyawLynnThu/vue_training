<template>
  <div class="main">
    <h1>This is an about page</h1>
    <img alt="Vue logo" src="../assets/logo.png" />
    <div class="clearfix">
      <button class="prev" @click="prev">Previous Page</button>
      <button class="next" @click="next">Next Page</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    prev() {
      this.$router.push("/");
    },
    next() {
      this.$router.push({name: "service"});
    }
  }
}
</script>

<style>  
  button {
    border: none;
    text-decoration: none;
    color: #42b983;
    font-weight: bold;
    background-color: transparent;
  }
</style>

