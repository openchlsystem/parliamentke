<template>
  <div class="members-page">
    <div class="committee-area">
      <ul>
        <h2>Committees</h2>
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
            <div >
              <h4>Events</h4>
            </div>

            <div>
              <h4>Members</h4>

              <ModalPopup
                :buttonLabel="`Add Members`"
                :buttonClass="customButtonClass"
                :iconClass="customIconClass"
                :committee="committee"
              >
                <div class="commitee-members">
                  <select name="members" id="" v-model="selectedMemberID">
                    <option
                      v-for="member in members"
                      :key="member.id"
                      :value="member"
                    >
                      {{ member.name }}
                    </option>
                  </select>
                </div>

                <button @click="addMember(committee)">Add Member</button>
              </ModalPopup>
            </div>

            <div >
              <h4>Bills</h4>

              <ul>
                <li v-for="bill in bills" :key="bill.id">
                  <a
                    href="#"
                    @click="
                      this.$router.push({
                        name: 'bills',
                        params: { id: bill.id },
                      })
                    "
                    >{{ bill.description }}</a
                  >
                </li>
              </ul>
            
            </div>

            <div >
              <h4>Petitions</h4>
              <li v-for="bill in petitions" :key="bill.id">
                <a
                  href="#"
                  @click="
                    this.$router.push({
                      name: 'petitions',
                      params: { id: bill.id },
                    })
                  "
                  >{{ bill.subject }}</a
                >
              </li>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "@/utils/axios";
import { ref, onMounted, watch } from "vue";
import ModalPopup from "../components/ModalComponent.vue";

export default {
  name: "MembersPage",

  components: {
    ModalPopup,
  },

  setup() {
    const committees = ref([]);
    const details = ref("");
    const members = ref([]);
    const selectedMemberID = ref("");
    const billsSelector = ref([]);
    const bill = ref([]);
    const bills = ref([]);
    const petitions = ref([]);
    // const selectedCommittee = ref("");

    const assignBill = () => {
      axios
        .patch(`/billtrackers/` + selectedMemberID.value.id + "/", {
          committee: details.value,
        })
        .then(() => {
          getCommittees();
        })
        .catch((error) => {
          console.log(error);
        });
    };

    const addMember = (committee) => {
      console.log(
        "add member",
        selectedMemberID.value.id,
        "commettee",
        committee
      );
      axios
        .post(`/committeesmembers/`, {
          member: selectedMemberID.value.id,
          committee: committee.id,
        })
        .then(() => {
          getCommittees();
        });
    };

    const getMembers = async () => {
      const response = await axios.get("/members/");
      members.value = response.data;
    };

    const showDetails = (committee) => {
      details.value = committee.id;
    };

    const getCommittees = async () => {
      const response = await axios.get("/committees/");
      committees.value = response.data;
    };

    const getBills = async () => {
      const response = await axios.get("/billtrackers/");

      billsSelector.value = response.data;
    };
    watch(details, async (newDetails, oldDetails) => {
      if (newDetails !== oldDetails) {
        await fetchBills();
        await fetchPetions();
      }
    });

    async function fetchBills() {
      try {
        const response = await axios.get("/billtrackers/", {
          params: {
            committee: details.value,
          },
        });
        bills.value = response.data;
      } catch (error) {
        console.error("Error fetching bills:", error);
      }
    }

    async function fetchPetions() {
      try {
        const response = await axios.get("/petitiontrackers/", {
          params: {
            committee: details.value,
          },
        });
        petitions.value = response.data;
        console.log("this is the petion", petitions.value);
      } catch (error) {
        console.error("Error fetching Petitions:", error);
      }
    }

    onMounted(() => {
      getCommittees();
      getMembers();
      getBills();
    });
    return {
      committees,
      getCommittees,
      showDetails,
      details,
      getMembers,
      members,
      addMember,
      selectedMemberID,
      getBills,
      // getBill,
      billsSelector,
      bills,
      bill,
      assignBill,
      fetchBills,
      fetchPetions,
      petitions,
    };
  },
};
</script>
