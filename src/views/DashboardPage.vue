<template>
  <div class="main-dashboard">
    <h2>Dashboard</h2>
    <div class="button-headers">
      

      <div class="dropdown">
        <button  class="dropbtn dropdown-arrow" v-if="selectedArea === ''">Select a Dashboard</button>
        <button class="dropbtn dropdown-arrow" v-else>Selected: {{ selectedArea }}</button>
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

    <div class="dashboard" v-if="selectedArea === 'documents'">


      <DocumentsDashboard />  

      

    </div>
    
    <div class="dashboard" v-if="selectedArea === 'committees'">
      <CommitteesDashboard   />
      </div>  

    <div class="dashboard" v-if="selectedArea === 'members'">

    <MembersDashboard />
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
import DocumentsDashboard from "@/dashboards/DocumentsDashboard";
import CommitteesDashboard from "@/dashboards/CommitteesDashboard";
import MembersDashboard from "@/dashboards/MembersDashboard";
// import { Committees } from "@/utils/Committees";

export default {
  name: "DashboardPage",
  // ... existing code ...
  components: {
    billsDashboard,
    motionsDashboard,
    petitionsDashboard,
    // Committees,
    DocumentsDashboard,
    MembersDashboard,
    CommitteesDashboard

},
  setup() {
    const selectedArea = ref("");
    return {
      selectedArea,
    };
  },
};
</script>

<style scoped>
/* ... existing code ... */
</style>
