

<template>
  <div class="layout">
    <!-- <header class="header">Header 1</header> -->
    <header class="header">
      <NavBar />
    </header>
    <div class="body">
      <router-view></router-view>
    </div>
    <footer class="footer">
      <FooterBar />
    </footer>  

  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import FooterBar from './components/FooterBar.vue';
export default {
  name: 'App',
  components: {
    NavBar,
    FooterBar
  }

}
</script>

<style>






</style>
