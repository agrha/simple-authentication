<template>
  <div class="container jumbotron">
    <form>
      <h1>REGISTER PAGE</h1>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input :class="{ 'is-invalid': attemptSubmit && missingEmail }" v-model="email" type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter email">
        <div class="invalid-feedback">Email Tidak Boleh Kosong</div>
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Username</label>
        <input :class="{ 'is-invalid': attemptSubmit && missingUsername }" v-model="username" type="text" class="form-control" placeholder="Username">
        <div class="invalid-feedback">Username tidak Boleh Kosong</div>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input :class="{ 'is-invalid': attemptSubmit && missingPassword }" v-model="password" type="password" class="form-control"  placeholder="Password">
        <div class="invalid-feedback">Password tidak Boleh Kosong</div>
      </div>
      <button type="submit" @submit="validateForm" @click="signup" class="btn btn-primary">Submit</button>
      <button type="submit" @click="toLogin" class="btn btn-primary">To Login Page</button>
  </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      email: '',
      username: '',
      password: ''
    }
  },
  computed: {
    missingUsername () {
      return this.username === ''
    },
    missingPassword () {
      return this.password === ''
    },
    missingEmail () {
      return this.email === ''
    }
  },
  methods: {
    toLogin () {
      this.$router.push('/')
    },
    signup () {
      let obj = {
        email: this.email,
        username: this.username,
        password: this.password
      }
      axios.post('http://localhost:3000/users', obj)
        .then(user => {
          alert('user created')
          this.$router.push('/')
        })
        .catch(err => {
          alert('create user failed')
          console.log(err)
          // location.reload()
        })
    },
    validateForm () {
      this.attemptSubmit = true
      if (this.missingPassword || this.missingEmail || this.missingUsername) {
        event.preventDefault()
      }
    }
  }
}
</script>
