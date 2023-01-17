<template>
  <the-header></the-header>
  <h1>Hollo {{ name }}, welcome to our home page</h1>
  <h3>Here is the list of all the restaurants, you can add yours <router-link to="/add-restaurant/fghb5">here</router-link></h3>
  <table class="table" border="1">
    <tr>
      <td>Id</td>
      <td>Name</td>
      <td>Address</td>
      <td>Contact</td>
      <td>Edit restaurant</td>
    </tr>
    <tr v-for="item in restaurant" :key="item.id">
    <td>{{ item.id }}</td>
    <td>{{ item.name }}</td>
    <td>{{ item.addres }}</td>
    <td>{{ item.contact }}</td>
    <td><router-link :to="'/add-restaurant/'+item.id">update</router-link></td>
    </tr>
  </table>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      name: "",
      restaurant:''
    };
  },
  methods: {
    getName(){
      
    }
  },
  async mounted() {
    const user = localStorage.getItem("user-info");
    // this.name = JSON.parse(user).name;
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
    const response = await fetch("https://resturant-mangement-app-default-rtdb.firebaseio.com/users.json").then((response)=>{
        if (response.ok) {
            return response.json();
        }
      }).then((data)=>{
        const retrivedName = [];
        for(const id in data){
          retrivedName.push({
            name: data[id].name
          })
        }
        // console.log(retrivedName);
        this.name = retrivedName[retrivedName.length-1].name;

        // console.log(retrivedName[retrivedName.length - 1].name);
      });
      // console.log(response);
      if(response){
        return
      }
      const result = await fetch("https://resturant-mangement-app-default-rtdb.firebaseio.com/restaurants.json").then((response)=>{
        if (response.ok) {
            return response.json();
        }
      }).then((data)=>{
        const object = [];
        for(const id in data){
          object.push({
            id,
            name: data[id].name,
            addres: data[id].addres,
            contact: data[id].contact
          })
        }
        this.restaurant = object
      });
      console.log(result);
  },
};
</script>
<style scoped>
.table{
  align-items: center;
}
td{
  /*  */
    width: 220px;
    height: 40px;
}
</style>
