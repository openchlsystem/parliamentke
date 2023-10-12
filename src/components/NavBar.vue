<template>
    <div>
  <nav>
    <router-link to="/">Home</router-link> |
    <div class="dropdown">
      <router-link to="/about">House Business</router-link>
      <div class="dropdown-content">
        <router-link to="/about">Standing Orders</router-link>
        <router-link to="/about">Rulings</router-link>
        <router-link to="/about">Committees</router-link>
      </div>
    </div>
    <router-link to="/about">Debate</router-link> |
    <div class="dropdown">
      <router-link to="/backend">Backend Activities</router-link>
      <div class="dropdown-content">
        <router-link to="/about">Inbox</router-link>
            <router-link to="/about">Operations</router-link>
        <router-link to="/about">Notifications</router-link>
        <router-link to="/about">Notification Committees</router-link>
        <router-link to="/about">Stages</router-link>
      </div>
    </div>
  </nav>    

    </div>
</template>

<script>
export default {
    name: 'NavBar',

    setup() {


        return {}
    }
}
</script>

<style lang="scss" scoped></style>