<template>
  <div>
    <!-- Your template code here -->
    <button @click="addStandingsOrdersArray">Import Document</button>

    <button @click="addPetitions">Import Petitions</button>

    <button @click="addMotions">Import Motions</button>
    <button @click="deleteMotions">Delete</button>

    <!-- {{ transformedData }} -->
    <!-- {{ modifiedMotions }} -->
  </div>
</template>

<script>
import { StandingOrders } from "@/utils/standingOrder";
import { transformedData } from "@/utils/Petions";
// import { convertNoticeOfMotionToDate } from "@/utils/Motions.js";
// import {modifiedMotions} from "@/utils/";
import {modifiedMotions} from "@/utils/Motions.js";
// import { ref } from 'vue'
import axios from "@/utils/axios";

export default {
  name: "SettingsPage",

  setup() {
    const addPetitions = () => {
      transformedData.forEach((petition) => {
        axios.post("/petitiontrackers/", petition);
      });
    };

    const addMotions = () => {
      modifiedMotions.forEach((motion) => {
        axios.post("/motiontrackers/", motion);
      });
    };

    // add standing order to documentIndex

    const addStandingsOrdersArray = () => {
      StandingOrders.forEach((standingOrder) => {
        axios.post("/DocumentIndex/", standingOrder);
      });
    };

    // delete motions

    const deleteMotions = () => {
      modifiedMotions.forEach((motion) => {
        console.log("delete", motion.id); // motion
        // axios.delete(`/motiontrackers/${motion.id}/`);
      });
    };

    return {
      StandingOrders,
      addStandingsOrdersArray,
      transformedData,
      addPetitions,
      // convertNoticeOfMotionToDate,
      modifiedMotions,
      addMotions,
      deleteMotions,
    };
  },
  // Your script code here
};
</script>

<style scoped>
/* Your style code here */
</style>
