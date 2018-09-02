<template>
  <nav>
    <div class="nav-wrapper blue">
      <div class="conteiner">
        <!--link para o LOGO-->
        <router-link to='/' class='brand-logo'>Employee Manager</router-link>

        <ul class="right">
          <li v-if="isLoggedIn"><span class="email black-text">{{currentUser}}</span></li>
          <li v-if="isLoggedIn"><router-link to="/dashboard">Dashboard</router-link></li>
          <li v-if="!isLoggedIn"><router-link to="/login">Login</router-link></li>
          <li v-if="!isLoggedIn"><router-link to="/register">Register</router-link></li>
          <li v-if="isLoggedIn">
            <button @click.prevent.stop="logout" class="btn black">Logout</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import firebase from 'firebase';

export default {
  name: 'navbar',
  data() {
    return {
      isLoggedIn: false,
      currentUser: false,
    };
  },

  created() {
    if (firebase.auth().currentUser) {
      this.isLoggedIn = true;
      this.currentUser = firebase.auth().currentUser.email;
    }
  },

  methods: {

    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.go({
            path: this.$router.path,
          });
        },
        (err) => {
          // eslint-disable-next-line
           console.log(err.message);
        },
        );
    },
  },
};
</script>

<style scoped>
  .email {
    padding-right: 10px;
  }
</style>

