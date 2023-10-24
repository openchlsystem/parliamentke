<template>
  <div class="trackers">
    <h2>Trackers</h2>

    <div class="header-buttons">
      <button class="button" @click="showDiv = 'billtracker'">Bills</button>
      <button class="button" @click="showDiv = 'motiontracker'">Motions</button>
      <button class="button" @click="showDiv = 'petitiontracker'">
        Petitions
      </button>
    </div>

    <nav class="tracker-buttons">
      <ModalPopup
        v-if="showDiv === 'billtracker'"
        :buttonLabel="`Add Bill`"
        :buttonClass="customButtonClass"
        :iconClass="customIconClass"
      >
        <BillsTracker />
        <h2>Bills</h2>
      </ModalPopup>

      <div v-if="showDiv === 'motiontracker'">
        <h2>Motions Tracker</h2>
        <ModalPopup buttonLabel="Add Motion"
        :buttonClass="customButtonClass"
        :iconClass="customIconClass">
          <MotionTracker />
        </ModalPopup>
        <!-- Add your content for the Legislative Activities tracker here -->
      </div>
      <div v-if="showDiv === 'petitiontracker'">
        <h2>Petition Tracker</h2>
        <ModalPopup buttonLabel="Add Petition"
        :buttonClass="customButtonClass"
        :iconClass="customIconClass">
          <PetitionTracker />
        </ModalPopup>
        <!-- Add your content for the Petition Tracker here -->
      </div>
    </nav>

    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>name</th>
          <th>Description</th>
          <th>Date</th>
          <th>Status</th>
          <th>View Details</th>
          <th>Maturity Date</th>
          <th>Preview</th>
          <th>Update</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="document in tableref" :key="document.id">
          <td>{{ document.id }}</td>
          <td>{{ document.name }}</td>
          <td>{{ document.description }}</td>
          <td>{{ document.date }}</td>

          <!-- <td><a :href="document.file" target="_blank" class="document-link"><i
                                        class="bi bi-cloud-download"></i> {{ document.name }}</a></td> -->
          <td>{{ document.status }}</td>
          <td>{{ document.maturity__date }}</td>

          <td>
            <a
              href="#"
              @click="
                this.$router.push({
                  name: 'documents',
                  params: { id: document.id },
                })
              "
              >View Details</a
            >
          </td>
          <td>
            <nav>
              <ModalPopup buttonLabel="Add Document">
                <AddDocument />
              </ModalPopup>
            </nav>
          </td>

          <td>
            <ModalPopup
              :buttonLabel="`update: ${document.document}`"
              :buttonClass="customButtonClass"
              :iconClass="customIconClass"
            >
              <FileActivities
                :fileid="document.id"
                :title="document.title"
                :description="document.description"
              />
            </ModalPopup>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { ref, onMounted, watch } from "vue";
import BillsTracker from "@/views/BillTrackers";
import PetitionTracker from "@/views/PetionsTracker.vue";
import MotionTracker from "@/views/MotionTrackers.vue";
import ModalPopup from "@/components/ModalComponent.vue";
import axios from "@/utils/axios";
import AddDocument from "@/views/AddDocument.vue";

export default {
  components: {
    BillsTracker,
    ModalPopup,
    AddDocument,
    PetitionTracker,
    MotionTracker,
  },

  data() {
    return {
      buttonLabel: "Upload Documents",
      customButtonClass: "add-new",
      customIconClass: "bi bi-pencil",
    }
  },
  setup() {
    const showDiv = ref("billtracker");

    // const buttonLabel = ref("Upload Documents");

    const bills = ref([]);
    const petitions = ref([]);
    const motions = ref([]);
    const tableref = ref([]);

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

      if (showDiv.value === "motiontracker") {
        const response = await axios.get("/motiontrackers/");
        tableref.value = response.data;
      }

      if (showDiv.value === "petitiontracker") {
        const response = await axios.get("/petitiontrackers/");
        tableref.value = response.data;
      }
    };

    // Watch for changes in the `showDiv` prop and call `getDocuments` when it changes
    watch(() => showDiv.value, updateTableref, { immediate: true });

    onMounted(() => {
      getBills();
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
    };
  },
};
</script>

<style lang="scss" scoped></style>
