<template>
  <the-header></the-header>
  <h1>Add restaurant below</h1>
  <form class="register">
    <input
      v-model.trim="name"
      type="text"
      name="name"
      placeholder="Enter Restaurant"
    />
    <input
      v-model.trim="addres"
      type="text"
      name="address"
      placeholder="Enter address"
    />
    <input
      v-model.trim="contact"
      type="contact"
      name="contact"
      placeholder="Enter contact"
    />
    <button @click.prevent="addResto">Add Restaurant</button>
  </form>
</template>

<script>
// import axios from 'axios';
export default {
  data() {
    return {
        restaurant:[],
        name: "",
        addres: "",
        contact: "",
    
    };
  },
  methods: {
    async addResto() {
      const result = await fetch(
        "https://resturant-mangement-app-default-rtdb.firebaseio.com/restaurants.json",
        {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            name: this.name,
            addres: this.addres,
            contact: this.contact,
          }),
        }
      );
      if (result) {
        this.$router.push({ name: "Home" });
        localStorage.setItem("user-info", JSON.stringify(result.data));
        // console.log(JSON.stringify(result.data));
      }
    },
  },
  async mounted() {
    // const response = await axios.get(`https://resturant-mangement-app-default-rtdb.firebaseio.com/restaurants/${this.$route.params.id}.json`);
    // console.warn(response.data);
    // this.restaurant = response.data
    fetch(
      `https://resturant-mangement-app-default-rtdb.firebaseio.com/restaurants/.json`
    ).then((response) => {
      // console.log(response)
      if (response.ok) {
        return response.json();
      }
    }).then((data) => {
          // console.log(data)
          const results = [];
          for (const id in data) {
            results.push({
              id: this.$route.params.id,
              name: data[id].name,
              addres: data[id].addres,
              contact: data[id].contact
            });
            this.name = data[this.$route.params.id].name,
            this.addres = data[this.$route.params.id].addres,
            this.contact = data[this.$route.params.id].contact
            // console.log(results)
            // this.restaurant = results
            
            // this.name = this.restaurant[0].name
            // this.addres = this.restaurant[0].addres
            // this.contact = this.restaurant[0].contact
            // console.log(this.name);
            
  }
})
}}
</script>

<style></style>
