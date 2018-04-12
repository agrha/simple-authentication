<template>
  <div class="container jumbotron">
    <form>
      <h1>REGISTER PAGE</h1>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input v-model="email" type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter email">
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Username</label>
        <input v-model="username" type="text" class="form-control" placeholder="Username">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input v-model="password" type="password" class="form-control"  placeholder="Password">
      </div>
      <button type="submit" @click="signup" class="btn btn-primary">Submit</button>
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
          alert('fail to create user')
          console.log(err)
          // location.reload()
        })
    }
  }
}
</script>
