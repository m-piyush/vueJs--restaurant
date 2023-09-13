<template>


<div class="nav">
    <img class="logo" src="../assets/icons/logo.svg" alt="log" />
    <router-link to="/">Home</router-link>
    <router-link to="add">Add Restaurant</router-link>
    <router-link class="right" to="/signUp" v-on:click="confirmLogout"
      >LogOut</router-link
    >
  </div>
  </template>

<script>

export default {
  name: "HeadersComponent",
  methods: {
    confirmLogout() {
      if (window.confirm("Are you sure you want to log out?")) {
        this.deleteLocalStorage();
      }
    },
    deleteLocalStorage() {
      localStorage.removeItem("user-info");
      this.$router.push({ name: "LoginPage" });
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "LoginPage" });
    }
  },
};
</script>

<style>
.nav {
  display: flex;
  align-items: center;
  background-color: #333;
  overflow: hidden;
  padding: 7.59px;
  font-weight: bold;

}

.logo {
  height: 40px;
  width: 40px;
  margin-left: 30px;
  margin-right: 20px;
}

.nav a {
  color: #f2f2f2;
  text-align: center;
  padding: 16px 14px;
  text-decoration: none;
  font-size: 16px;
  margin-right: 14px;
}

.nav a:hover {
  background-color: #ddd;
  color: #222;
}

.right {
  margin-left: auto;
}
</style>
