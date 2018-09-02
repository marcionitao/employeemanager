<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col s12 m8 offset-m2">

          <div class="login card-panel grey lighten-4 black-text center">
            <h3>Register</h3>
            <form>

              <div class="input-field">
                <i class="material-icons prefix">email</i>
                <input type="text" id="email" v-model="email">
                <label for="email">Email</label>
              </div>

              <div class="input-field">
                <i class="material-icons prefix">lock</i>
                <input type="password" id="password" v-model="password">
                <label for="password">Password</label>
              </div>
              <button @click.prevent.stop="register"
              class="btn btn-large blue lighten-2 white-text">
                Register
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
  name: 'register',
  data() {
    return {
      email: '',
      password: '',
    };
  },

  methods: {

    register(e) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((user) => {
        // eslint-disable-next-line
          alert(`Account create  for ${user.user.email}`);
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
