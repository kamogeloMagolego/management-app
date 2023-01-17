<template>
  <div class="header">
    <router-link to="/">Home</router-link>
    <router-link to="/add-restaurant/fghb5">update restaurant</router-link>
    <router-link to="/about-restaurant">About App</router-link>
    <a @click="logOut" href="#">Log Out</a>
  </div>
</template>

<script>
export default {
  name: "TheHeader",
  methods:{
    logOut(){
        localStorage.clear();
        this.$router.push('login');
    }
  }
};
</script>

<style scoped>
.header{
    background: #333;
    overflow: hidden;
}
.header a{
    float:left;
    color: #f2f2f2;
    padding:14px 16px;
    text-align: center;
    font-size: 17px;
    text-decoration: none;
    margin-right: 3.5rem;
}
.header a:hover{
    background: #ddd;
    color:#333;
}
</style>
