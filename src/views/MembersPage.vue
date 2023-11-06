<template>
  <div class="members-page">
    <div class="member-area">
      <ul>
        <h2>Members</h2>
        <li
          v-for="member in members"
          :key="member.id"
          class="member-card"
          @click="showDetails(member)"
        >
          <div class="member-info">
            <h3>{{ member.name }}</h3>
            <p>{{ member.constituency }}</p>
            <p>{{ member.party }}</p>
          </div>
          <div class="info-area" v-if="details === member.id">
            <div class="info">
              <p>Constituency: {{ member.constituency }}</p>
              <p>Party: {{ member.party }}</p>
            </div>

            <div class="events">
              <h3>Events</h3>
            </div>

            <div class="committees">
              <h3>Committees</h3>
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
    const members = ref([]);
    const details = ref("");

    const showDetails = (member) => {
      details.value = member.id;
    };

    const getMembers = async () => {
      const response = await axios.get("/members/");
      members.value = response.data;
    };

    onMounted(() => {
      getMembers();
    });
    return {
      members,
      getMembers,
      showDetails,
      details,
    };
  },
};
</script>
