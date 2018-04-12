<template>
  <div>
    <NavBar></NavBar>
    <h1>WELCOME {{username}}</h1>
    <h1>INI TOKENNYA</h1>
    <h3>{{token}}</h3>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
export default {
  data () {
    return {
      token: localStorage.getItem('token'),
      username: localStorage.getItem('username'),
      id: localStorage.getItem('id')
    }
  },
  components: {
    NavBar
  }
}
</script>
