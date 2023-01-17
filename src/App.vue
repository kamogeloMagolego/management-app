<template>
  <router-view></router-view>
  <!-- <sign-up></sign-up> -->
</template>

<script>
// import SignUp from "./components/SignUp.vue";

export default {
  name: "App",
  // components: {
  //   SignUp,
  // },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  padding: 0;
  margin: 0;
}

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.logo {
  width: 150px;
}

.register input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 20px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid rgb(155, 7, 7);
}

.register button {
  width: 320px;
  height: 40px;
  /* border: 1px solid rgb(155, 7, 7); */
  background-color: rgb(155, 7, 7);
  color: white;
  cursor: pointer;
}
</style>
