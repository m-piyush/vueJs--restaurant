<template>
  <div class=" main my-[10%] text-center">
    <div class="child inline-block top border-2 border-black-200 p-5">
      <img class="h-14 w-14 m-auto" src="../assets/icons/logo.svg" alt="log" />
      <h1 class="text-3xl font-bold m-auto pt-3">Login Page</h1>
      <div class="Login form mt-5">
        <input type="text" placeholder="Enter your E-mail" v-model="email" />
        <input
          type="text"
          placeholder="Enter your password"
          v-model="password"
        />
        <button v-on:click="login">Login</button>
        <p class="my-3">
          New Member
          <span> <router-link to="signup"> SignUp now </router-link></span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "LoginPage",

  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      let result = await axios.get(
        `http://localhost:3000/user?email=${this.email}&password=${this.password}`
      );
      //   console.log(this.email, this.password);
      console.log("login result", result);
      //   http://localhost:3000/user?email=anilkumar@gmail.com&password=abcd
      if (result.status == 200 && result.data.length > 0) {
        localStorage.setItem("user-info", JSON.stringify(result.data[0]));
        this.$router.push({ name: "HomeComponent" });
      } else {
        alert("invalid Email or password");
      }
    },
  },
  mounted() {
    // console.log("mounted");
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({ name: "HomeComponent" });
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
  background-color: rgba(255, 255, 255, 0.7); 

  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

}

</style>
