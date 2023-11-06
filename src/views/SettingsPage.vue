<template>
  <div class="header-buttons">
    <!-- Your template code here -->
    <button @click="addStandingsOrdersArray">Import Document</button>

    <button  @click="importBills">
      Import Bills
    </button>

    <button @click="addPetitions">Import Petitions</button>

    <button @click="addMotions">Import Motions</button>
    <button @click="addMembers">Import Members</button>
    <button @click="addCommittees">Import Committees</button> |

    <button @click="deleteMotions">Delete Motions </button>
    <button @click="deleteStandingOrdersArray">Delete Standing Orders</button>

    <!-- {{ updatedData }} -->
    <!-- {{ modifiedMotions }} -->
  </div>
</template>

<script>
import StandingOrders from "@/utils/standingOrder";
import { BillsSample } from "@/utils/BillsSample.js";
import { updatedBillsSample } from "@/utils/BillsSample.js";
import { updatedData } from "@/utils/Petions";
import { Members } from "@/utils/Members";
import {Committees} from "@/utils/Committees";
// import { convertNoticeOfMotionToDate } from "@/utils/Motions.js";
// import {modifiedMotions} from "@/utils/";
import { modifiedMotions } from "@/utils/Motions.js";
// import { ref } from 'vue'
import axios from "@/utils/axios";

export default {
  name: "SettingsPage",

  setup() {
    const addPetitions = () => {
      updatedData.forEach((petition) => {
        axios.post("/petitiontrackers/", petition);
      });
    };

    const addMotions = () => {
      modifiedMotions.forEach((motion) => {
        axios.post("/motiontrackers/", motion);
      });
    };

    const importBills = async () => {
      // BillsSample.forEach((bill) => {
      //   bill.description = bill.bill;
      //   bill.date = new Date().toISOString();
      //   bill.maturity_date = new Date().toISOString();
      //   axios.post("/billtrackers/", bill);
      // });
      // const response = await axios.get("/billtrackers/");
      // bills.value = response.data;
      updatedBillsSample.forEach((bill) => {
        bill.description = bill.bill;

        axios.post("/billtrackers/", bill);
      });
      console.log("hey man bill have been imported");
    };

    // add standing order to documentIndex

    const addStandingsOrdersArray = async () => {
      for (const standingOrder of StandingOrders) {
        await axios.post("/DocumentIndex/", standingOrder);
      }
    };

  

    const deleteStandingOrdersArray = async () => {
      const response = await axios.get("/DocumentIndex/");
      const StandingOrders = response.data;
      for (const standingOrder of StandingOrders) {
        console.log(standingOrder);
        await axios.delete(`/DocumentIndex/${standingOrder.text_id}/`);
      }
    };

  const addMembers = async () => {
    Members.forEach((member) => {
      axios.post("/members/", member);
    })
  }


    const addCommittees = async () => {
      Committees.forEach((committee) => {
        axios.post("/committees/", committee);
      })
    }

  

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
      updatedData,
      addPetitions,
      // convertNoticeOfMotionToDate,
      modifiedMotions,
      addMotions,
      deleteMotions,
      importBills,
      BillsSample,
      updatedBillsSample,
      Members,
      Committees,
      addMembers,
      addCommittees,
      deleteStandingOrdersArray,
    };
  },
  // Your script code here
};
</script>

<style scoped>
/* Your style code here */
</style>
