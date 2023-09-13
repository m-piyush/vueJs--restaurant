<template>
  <HeadersComponent />
  <div class=" main my-[10%] text-center">
    <div class="child inline-block top border-2 border-black-200 p-5">
  <h1 class="text-3xl font-bold m-auto py-3">Add Resturatnt Page</h1>
  <form>
    <input
      type="text"
      placeholder="Enter Restaurant  Name"
      name="name"
      v-model="restaurant.name"
    />
    <input
      type="text"
      placeholder="Enter Restaurant Address"
      name="address"
      v-model="restaurant.address"
    />
    <input
      type="text"
      placeholder="Enter Restaurant contact"
      name="contact"
      v-model="restaurant.contact"
    />
    <button type="button" v-on:click="addRestaurant">Add New Restaurant</button>
  </form>
    </div>
    </div>
</template>

<script>
import HeadersComponent from "./Header.vue";
import axios from "axios";
export default {
  name: "AddComponent",
  components: {
    HeadersComponent,
  },
  data() {
    return {
      restaurant: {
        name: "",
        address: "",
        contact: "",
      },
    };
  },
  methods: {
    async addRestaurant() {
      console.log(this.restaurant);
      try {
        const result = await axios.post("http://localhost:3000/restaurant", {
          name: this.restaurant.name,
          address: this.restaurant.address,
          contact: this.restaurant.contact,
        });
        if (result.status === 201) {
          this.$router.push({ name: "HomeComponent" });
        }
      } catch (error) {
        console.error("Error added", error);
      }
    },
  },
  mounted() {
    // console.log("mounted");
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
  },
};
</script>

<style scoped>
input {
  /* w-[300px] h-[40px] pl-20px block mb-[20px] mx-auto  border-solid border-2 border-gray-300  */
  width: 320px;
  height: 40px;
  display: block;
  margin-right: auto;
  margin-left: auto;
  padding-left: 20px;
  margin-bottom: 20px;
  border: solid 1px gray;
}
button {
  width: 320px;
  height: 40px;
  border: 1px solid rgb(71, 188, 192);
  background: #04aaa2;
  cursor: pointer;
  color: white;
}
button:hover {
  background: #2a8494;
  border: 2px solid rgb(33, 133, 151);
}
span {
  color: #04aaa2;

}
.main{
  background-image: url('../assets/background.jpg');

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%; 
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
}
.child{
  background-color: rgba(255, 255, 255, 0.8); /* Example background color */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

}
</style>
