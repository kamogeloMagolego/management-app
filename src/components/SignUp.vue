<template>
  <img class="logo" src="../assets/logo.jpg" />
  <h1>Sign-Up</h1>
  <form class="register">
    <input v-model="name" type="text" placeholder="enter name" />
    <input v-model="email" type="email" placeholder="enter email" />
    <input v-model="password" type="password" placeholder="enter password" />
    <button v-on:click.prevent="submitBtn">Sign-Up</button>
  </form>
  <p>
    <router-link to="/login">Login</router-link>
  </p>
</template>

<script>
export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      password: "",
      email: "",
    };
  },
  methods: {
    async  submitBtn() {
      const result = await fetch(
        "https://resturant-mangement-app-default-rtdb.firebaseio.com/users.json",
        {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            name: this.name,
            email: this.email,
            password: this.password,
          }),
        }
      );
      if (result) {
        this.$router.push({ name: "Home" });
        localStorage.setItem("user-info", JSON.stringify(result.data));
        // console.log(JSON.stringify(result.data));
      }
      this.name = "";
      this.email = "";
      this.password = "";
    },
  },
  mounted() {
    const user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({ name: "Home" });
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
