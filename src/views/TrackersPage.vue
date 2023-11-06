<template>
  <div class="trackers">
    <h2>Trackers</h2>

    <div class="header-buttons">
      <!-- <button @click="showDiv = 'dashboard'">Dashboard</button> -->
      <button @click="showDiv = 'billtracker'">Bills</button>
      <button @click="showDiv = 'motiontracker'">Motions</button>
      <button @click="showDiv = 'petitiontracker'">Petitions</button>
    </div>

    <div class="motion-list" v-if="showDiv === 'billtracker'">
      <ModalPopup
        v-if="showDiv === 'billtracker'"
        :buttonLabel="`Add Bill`"
        :buttonClass="customButtonClass"
        :iconClass="customIconClass"
      >
        <BillsTracker />
        <h2>Bills</h2>
      </ModalPopup>
    

      <!-- {{BillsSample}} -->

      <ul class="bill-ul">
        <li v-for="document in tableref" :key="document.id">
          <div class="bill-item">
            <div class="bill-details">
              <h2 class="bill-title">{{ document.bill }}</h2>
              <p class="bill-description">{{ document.description }}</p>
              <span class="bill-date">Date: {{ document.date }}</span>
              <span class="bill-status">Status: {{ document.status }}</span>
              <span class="bill-maturity-date"
                >Maturity Date: {{ document.maturity__date }}</span
              >
              <a
                href="#"
                class="view-details-link"
                @click="
                  this.$router.push({
                    name: 'documents',
                    params: { id: document.id },
                  })
                "
              >
                View Details
              </a>
            </div>
          </div>
          <nav class="bill-nav">
            <ModalPopup buttonLabel="Add Document">
              <AddDocument :billid="document.id" />
            </ModalPopup>
            <ModalPopup
              :buttonLabel="`Update`"
              :buttonClass="customButtonClass"
              :iconClass="customIconClass"
            >
              <BillActivity :billid="document.id" />
            </ModalPopup>
          </nav>
        </li>
      </ul>
    </div>

    <div v-if="showDiv === 'motiontracker'" class="motion-list">
      <h2>Motions Tracker</h2>
      <ModalPopup
        buttonLabel="Add Motion"
        :buttonClass="customButtonClass"
        :iconClass="customIconClass"
      >
        <MotionTracker />
      </ModalPopup>

      <ul class="motion-ul">
        <li v-for="motion in motions" :key="motion.id" class="motion-item">
          <div class="motion-details">
            <span class="motion-date">Date: {{ motion.date }}</span>
            <span class="motion-subject">Subject: {{ motion.subject }}</span>
            <span class="motion-proposer">Proposer: {{ motion.proposer }}</span>
            <span class="motion-seconder">Seconder: {{ motion.seconder }}</span>
            <button
              v-if="motion.status === 'adopted'"
              class="adopted-button"
              disabled
            >
              Adopted
            </button>
            <button v-else @click="patchAdopt(motion)" class="adopt-button">
              Adopt Motion
            </button>
          </div>
        </li>
      </ul>
    </div>

    <div v-if="showDiv === 'petitiontracker'" class="motion-list">
      <h2>Petition Tracker</h2>
      <ModalPopup
        buttonLabel="Add Petition"
        :buttonClass="customButtonClass"
        :iconClass="customIconClass"
      >
        <PetitionTracker />
      </ModalPopup>

      <div>
        <ul class="petition-ul">
          <li
            v-for="motion in petitions"
            :key="motion.id"
            class="petition-item"
          >
            <div class="petition-details">
              <span class="petition-date">Date: {{ motion.date }}</span>
              <span class="petition-subject"
                >Subject: {{ motion.subject }}</span
              >
              <span class="petition-presenter"
                >Presenter: {{ motion.presenter }}</span
              >
              <span class="petition-petitioner"
                >Petitioner: {{ motion.petitioner }}</span
              >
            </div>
            <div class="update">
            
              <ModalPopup
                :buttonLabel="`Add: Document`"
                :buttonClass="customButtonClass"
                :iconClass="customIconClass"
              >
                <FileActivities
                  :fileid="motion.id"
                  :title="motion.petitioner"
                  :description="motion.subject"
                />
              </ModalPopup>
              <ModalPopup
                buttonLabel="Update Petition Status"
                :buttonClass="customButtonClass"
                :iconClass="customIconClass"
                @click="petionId = motion.id"
              >
                <div class="form-popup">
                  <form @submit.prevent="addPetionActivity(motion)">
                    <label for="status">Status:</label>
                    <select v-model="petitionActivity.status">
                      <option value="ongoing">Ongoing</option>
                      <option value="pending">Pending</option>
                      <option value="concluded">Concluded</option>
                    </select>
                    <textarea
                      name="description"
                      cols="30"
                      rows="10"
                      v-model="petitionActivity.description"
                    ></textarea>
                    <button type="submit">Update</button>
                  </form>
                </div>
              </ModalPopup>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="dashboard" v-if="showDiv === 'dashboard'">
      <h2>Dashboard</h2>
      <Dashboard />
    </div>
  </div>
</template>

<script>
import { ref, onMounted, watch, reactive } from "vue";
import BillsTracker from "@/views/BillTrackers";
import PetitionTracker from "@/views/PetionsTracker.vue";
import MotionTracker from "@/views/MotionTrackers.vue";
import ModalPopup from "@/components/ModalComponent.vue";
import axios from "@/utils/axios";
import AddDocument from "@/views/AddDocument.vue";
import FileActivities from "@/views/FileActivities.vue";
import { BillsSample } from "@/utils/BillsSample.js";
import { updatedBillsSample } from "@/utils/BillsSample.js";
import Dashboard from "@/views/DashboardPage.vue";
import BillActivity from "@/views/BillTrackerActivity.vue";

export default {
  components: {
    BillsTracker,
    ModalPopup,
    AddDocument,
    PetitionTracker,
    MotionTracker,
    FileActivities,
    Dashboard,
    BillActivity,
  },

  data() {
    return {
      buttonLabel: "Upload Documents",
      customButtonClass: "update-button",
      customIconClass: "bi bi-pencil",
    };
  },
  setup() {
    const showDiv = ref("billtracker");

    // const buttonLabel = ref("Upload Documents");

    const bills = ref([]);
    const petitions = ref([]);
    const motions = ref([]);
    const tableref = ref([]);
    const petitionId = ref("");

    const petitionActivity = reactive({
      date: new Date(),
      description: "",
      status: "",
      PetitionTracker: null,
    });

    const getBills = async () => {
      const response = await axios.get("/billtrackers/");
      bills.value = response.data;
    };

    const getPetitions = async () => {
      const response = await axios.get("/petitiontrackers/");
      petitions.value = response.data;
    };

    const getMotions = async () => {
      const response = await axios.get("/motiontrackers/");
      motions.value = response.data;
    };

    const updateTableref = async () => {
      console.log("its running");
      if (showDiv.value === "billtracker") {
        const response = await axios.get("/billtrackers/");
        tableref.value = response.data;
      }
    };

   

    const patchAdopt = async (motion) => {
      const response = await axios.patch(`/motiontrackers/${motion.id}/`, {
        status: "adopted",
      });
      console.log(response);
    };

    const addPetionActivity = async (motion) => {
      console.log("petition", petitionActivity);
      petitionActivity.PetitionTracker = motion.id;

      const response = await axios.post(
        "/petitionactivitytracker/",
        petitionActivity
      );
      const response2 = await axios.patch(`/petitiontrackers/${motion.id}/`, {
        status: petitionActivity.status,
      });
      response, response2;
    };

    // Watch for changes in the `showDiv` prop and call `getDocuments` when it changes
    watch(() => showDiv.value, updateTableref, { immediate: true });

    onMounted(() => {
      getBills();
      getMotions();
      getPetitions();
    });

    return {
      showDiv,
      // buttonLabel,
      getBills,
      bills,
      getPetitions,
      getMotions,
      motions,
      petitions,
      updateTableref,
      tableref,
      BillsSample,
      patchAdopt,
      petitionActivity,
      addPetionActivity,
      petitionId,
      updatedBillsSample,
    };
  },
};
</script>

<style lang="scss" scoped></style>
