<template>
  <nav>
    <div class="menu">
      <router-link to="/">Home</router-link> |
      <router-link to="/dashboard">Dashboard</router-link> |
      <!-- <router-link to="/about">Debate</router-link> | -->
      <router-link to="/trackers">Trackers</router-link> |
      <router-link to="/committees">Committees</router-link> |
      <router-link to="/OrderPaper">House Business</router-link>|
      <router-link to="/members">Members</router-link>|
      <router-link to="/events">Events</router-link>|
      <div class="dropdown dropdown-arrow">
        <!-- Add the dropdown button -->
        <router-link to="/backend">Directorates</router-link>
        <div class="dropdown-content">
          <!-- Add the dropdown items -->
          <router-link to="/legislative-services"
            >Directorate of Legislative and Procedural Services</router-link
          >
          <router-link to="/legal-services"
            >Directorate Legal Services (DLS)</router-link
          >
          <router-link to="/budget-office"
            >The Parliamentary Budget Office</router-link
          >
          <router-link to="/hansard-editor">The Hansard Editor</router-link>
          <router-link to="/serjeant-at-arms">Serjeant at Arms</router-link>
        </div>
      </div>
    </div>
    <button class="dropdown-toggle " @click="toggleDropdown">
      {{ dropdownLabel }}
    </button>
    <ul
      class="dropdown-menu"
      :style="{ display: dropdownOpen ? 'block' : 'none' }"
    >
      <li @click="toggleDropdown"><router-link to="/">Home</router-link></li>
      <li @click="toggleDropdown">
        <router-link to="/dashboard">Dashboard</router-link>
      </li>
      <li @click="toggleDropdown">
        <router-link to="/trackers">Trackers</router-link>
      </li>
      <li @click="toggleDropdown">
        <router-link to="/committees">Commitees</router-link>
      </li>
      <li @click="toggleDropdown">
        <router-link to="/OrderPaper">House Business</router-link>
      </li>
      <li @click="toggleDropdown">
        <router-link to="/members">Members</router-link>
      </li>
      <li @click="toggleDropdown">
        <router-link to="/backend">Back Office</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      dropdownOpen: false,
    };
  },
  computed: {
    dropdownLabel() {
      return this.dropdownOpen ? "Close" : "Menu";
    },
  },
  methods: {
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    },
  },
};
</script>

<style></style>
