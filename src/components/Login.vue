<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col s12 m8 offset-m2">

          <div class="login card-panel white black-text center">
            <h3>Login</h3>
            <form>

              <div class="input-field">
                <i class="material-icons prefix">email</i>
                <input type="text" id="email" v-model="email">
                <label for="email" class="black-text">Email</label>
              </div>

              <div class="input-field">
                <i class="material-icons prefix">lock</i>
                <input type="password" id="password" v-model="password">
                <label for="password" class="black-text">Password</label>
              </div>

              <button @click.prevent.stop="login"
              class="btn btn-large blue lighten-2 white-text">
                Login
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'login',
  data() {
    return {
      email: '',
      password: '',
    };
  },

  methods: {

    login(e) {
      // eslint-disable-next-line
           console.log(this.email, this.password);
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((user) => {
        // eslint-disable-next-line
          alert(`You are logged in as ${user.user.email}`);
          this.$router.go({
            path: this.$router.path,
          });
        },
        (err) => {
          // eslint-disable-next-line
           console.log(err.message);
        },
        );
      e.preventDefault();
    },
  },
};
</script>

<style scoped>

</style>
