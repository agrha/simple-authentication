<template>
  <div>
    <nav class="navbar navbar-dark bg-dark fixed-top">
      <a class="navbar-brand" href="#">Navbar</a>
      <button type="submit" @click="logout" class="btn btn-primary">Log Out</button>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('/')
    }
  }
}
</script>
