<template>
  <div class="main-dashboard">
    <h1>Dashboard</h1>
    <select name="selectarea" id="select" v-model="selectedArea">
      <option value="" default>Select Dashboard</option>
      <option value="bills">Bills</option>
      <option value="petitions">Petitions</option>
      <option value="motions">Motions</option>
    </select>

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
