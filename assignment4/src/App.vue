<template>
  <div id="app">
    <nav>
      <router-link :to="{name: 'home'}">Home</router-link> |
      <router-link :to="{name: 'about'}">About</router-link> |
      <router-link :to="{name: 'service'}">Service</router-link> |
      <router-link :to="{name: 'contact'}">Contact</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.active {
  color: #42b983;
}

.main {
  width: 500px;
  margin: 0 auto;
}
.next, .prev {
  text-decoration: none;
  color: #42b983;
  font-weight: bold;
  float: right;
  cursor: pointer;
  font-size: 16px;
}
.prev {
  float: left;
}
.clearfix::before, .clearfix::after {
  clear: both;
  content: "";
  display: table;
}
</style>
