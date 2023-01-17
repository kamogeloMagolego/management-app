<template>
  <img class="logo" src="../assets/logo.jpg" />
  <h1>Login</h1>
  <form class="register">
    <input v-model.trim="email" type="email" placeholder="enter email" />
    <input
      v-model.trim="password"
      type="password"
      placeholder="enter password"
    />
    <button @click.prevent="submitBtn">Login</button>
  </form>
  <p>
    <router-link to="/sign-up">Sign-Up</router-link>
  </p>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    submitBtn() {
      // console.warn(this.email,this.password)
      fetch(
        "https://resturant-mangement-app-default-rtdb.firebaseio.com/users.json"
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          // console.log(data)
          const results = [];
          for (const id in data) {
            results.push({
              id: id,
              email: data[id].email,
              password: data[id].password,
            });
            if (
              this.email === data[id].email &&
              this.password === data[id].password
            ) {
              this.$router.push({name: 'Home'});
            } else {
              // alert('You are not signed in, sign up instead!')
              return
            }
          }
          // console.log(results);
        });
    },
  },
};
</script>
