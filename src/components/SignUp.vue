<template>
  <div class="main my-[10%] text-center">
    <div class="child inline-block top border-2 border-black-200 p-5">
      <img class="h-14 w-14 m-auto" src="../assets/icons/logo.svg" alt="log" />
      <h1 class="text-3xl font-bold m-auto pt-3">Sign up</h1>
      <div class="register mt-5">
        <input
          type="text"
          placeholder="Enter your name"
          v-model="name"
          required
        />
        <input
          type="email"
          id="email"
          placeholder="Enter your E-mail"
          v-model="email"
          required
        />
        <input
          type="password"
          placeholder="Enter your password"
          v-model="password"
          required
        />
        <button v-on:click="signup" class="border-1px">Sign Up</button>
        <p></p>
        <p class="my-3">
          Already  a member ?
          <span> <router-link to="login">Login</router-link> </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async signup() {
      // Validate email format

      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (!emailRegex.test(this.email)) {
        console.error("Invalid email format");
        return;
      }

      // Validate password format

      const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;
      if (!passwordRegex.test(this.password)) {
        console.error("Invalid password format");

        return;
      }

      console.warn("signUp", this.name, this.password, this.email);
      try {
        let result = await axios.post("http://localhost:3000/user", {
          email: this.email,
          name: this.name,
          password: this.password,
        });

        console.log("result--->", result);
        if (result.status == 201) {
          alert("Sign Up Done");

          localStorage.setItem("user-info", JSON.stringify(result.data));
          this.$router.push({ name: "HomeComponent" });
        }
      } catch (error) {
        console.error("Error:", error);
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({ name: "HomeComponent" });
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
