<template>
  <div class ="container jumbotron">
     <form>
      <h1>LOGIN PAGE</h1>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
      </div>
      <button type="submit" @click="signin" class="btn btn-primary">Submit</button>
      <button type="submit" @click="toRegister" class="btn btn-primary">To Register</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    toRegister () {
      this.$router.push('/register')
    },
    signin () {
      let obj = {
        email: this.email,
        password: this.password
      }
      axios.post('http://localhost:3000/users/signin', obj)
        .then(response => {
          alert('login success')
          console.log(response.data)
          localStorage.setItem('token',response.data.token)
          localStorage.setItem('id',response.data.id)
          localStorage.setItem('username',response.data.username)
          this.$router.push('/landing')
        })
        .catch(err => {
          alert('login fail')
          console.log(err)
        })
    }
  }
}
</script>
