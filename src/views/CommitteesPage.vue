<template>
  <div class="members-page">
    <div class="committee-area">
      <ul>
        <h2>Committees </h2>
        <li
          v-for="committee in committees"
          :key="committee.id"
          class="member-card"
          @click="showDetails(committee)"
        >
          <div class="member-info">
            <h3>{{ committee.name }}</h3>
            <p>{{ committee.description }}</p>
          </div>
          
          <div class="info-area" v-if="details === committee.id">
            <div class="info">
              <p>Constituency: {{ committee.constituency }}</p>
              <p>Party: {{ committee.party }}</p>
            </div>

            <div class="events">
              <h3>Events</h3>
            </div>

            <div class="committees">
              <h3>Members<span>add</span></h3>
            </div>

            <div class="bills">
              <h3>Bills</h3>
            </div>

            <div class="petitions">
              <h3>Petitions</h3>
            </div>

            <div class="motions">
              <h3>Motions</h3>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "@/utils/axios";
import { ref, onMounted } from "vue";

export default {
  name: "MembersPage",

  setup() {
    const committees = ref([]);
    const details = ref("");

    const showDetails = (committee) => {
      details.value = committee.id;
    };

    const getCommittees = async () => {
      const response = await axios.get("/committees/");
      committees.value = response.data;
    };

    onMounted(() => {
      getCommittees();
    });
    return {
      committees,
      getCommittees,
      showDetails,
      details,
    };
  },
};
</script>
