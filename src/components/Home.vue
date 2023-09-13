<template>
  <div>
    <HeadersComponent />
    <h1>Hello {{ name.name }}, Welcome to Home Component</h1>
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Address</th>
          <th>Contact</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in restaurants" :key="item.id" class="table-row">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.address }}</td>
          <td>{{ item.contact }}</td>
          <td>
            <router-link :to="'/update/' + item.id">Update</router-link>
            <button v-on:click="deleteRestaurant(item.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import HeadersComponent from "./Header.vue";
import axios from "axios";

export default {
  name: "HomeComponent",
  components: {
    HeadersComponent,
  },
  data() {
    return {
      name: "",
      restaurants: [],
    };
  },

  methods: {
    async deleteRestaurant(id) {
      console.log("id-->", id);
      let result = await axios.delete("http://localhost:3000/restaurant/" + id);
      if (result.status == 200) {
        this.loadData();
      }
    },
    async loadData() {
      let user = localStorage.getItem("user-info");
      this.name = JSON.parse(user);
      if (!user) {
        this.$router.push({ name: "SignUp" });
      }
      let result = await axios.get("http://localhost:3000/restaurant");
      // console.log("result -->", result.data);
      this.restaurants = result.data;
    },
  },
  mounted() {
    // console.log("mounted");
    this.loadData();
  },
};
</script>

<style scoped>
h1 {
  font-size: 30px;
  margin: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid black;
  padding: 10px;
}

th {
  background-color: #f2f2f2;
  font-weight: bold;
}

.table-row:hover {
  background-color: #f5f5f5;
  cursor: pointer;
}

button {
  padding: 5px 10px;
  background-color: #dc3545;
  color: white;
  border: none;
  cursor: pointer;
  margin: 10px;
  border-radius: 20px;
}

button:hover {
  background-color: #c82333;
}

a {
  text-decoration: none;
  color: #007bff;
}

a:hover {
  text-decoration: underline;
}
</style>


