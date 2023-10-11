

<template>
  <div class="layout">
    <header class="header">Header 1</header>
    <header class="header">
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </nav>
    </header>
    <div class="body">
      <div class="column">Column 1</div>
      <div class="column"><router-view/></div>
      <div class="column">Column 3</div>
      <div>Anything</div>
    </div>
    <footer class="footer">Footer 1</footer>
    <footer class="footer">Footer 2</footer>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
