<template>
  <div class="main-dashboard">
    <h2>Dashboard</h2>
    <div class="button-headers">
      

      <div class="dropdown">
        <button class="dropbtn">Select a Dashboard</button>
        <div class="dropdown-content">
          <a href="#" @click="selectedArea = 'bills'">Bills</a>
          <a href="#" @click="selectedArea = 'petitions'">Petitions</a>
          <a href="#" @click="selectedArea = 'motions'">Motions</a>
          <a href="#" @click="selectedArea = 'documents'">Documents</a>
          <a href="#" @click="selectedArea = 'committees'">Committers</a>
          <a href="#" @click="selectedArea = 'members'">Members</a>
       

        </div>
      </div>
    </div>

    <div class="dashboard" v-if="selectedArea === 'bills'">
      <billsDashboard />
    </div>
    <div class="dashboard" v-if="selectedArea === 'petitions'">
      <petitionsDashboard />
    </div>
    <div class="dashboard" v-if="selectedArea === 'motions'">
      <motionsDashboard />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import billsDashboard from "@/dashboards/BillsDashboard";
import motionsDashboard from "@/dashboards/MotionsDashboard";
import petitionsDashboard from "@/dashboards/PetitionsDashboard";

export default {
  name: "DashboardPage",
  // ... existing code ...
  components: {
    billsDashboard,
    motionsDashboard,
    petitionsDashboard,
  },
  setup() {
    const selectedArea = ref("bills");
    return {
      selectedArea,
    };
  },
};
</script>

<style scoped>
/* ... existing code ... */
</style>
