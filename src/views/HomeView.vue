<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <SearchView/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import SearchView from '@/components/SearchView.vue'

export default {
  name: 'HomeView',
  components: {
    // HelloWorld,
    SearchView
  }
}
</script>
