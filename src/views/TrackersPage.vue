<template>
  <div class="trackers">
    <h2>Trackers</h2>

    <div class="header-buttons">
      <button class="button" @click="showDiv = 'dashboard'">Dashboard</button>
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
      <button v-if="showDiv === 'billtracker'" @click="importBills">
        Test Bills
      </button>

      <div v-if="showDiv === 'motiontracker'" class="motion-list">
        <h2>Motions Tracker</h2>
        <ModalPopup
          buttonLabel="Add Motion"
          :buttonClass="customButtonClass"
          :iconClass="customIconClass"
        >
          <MotionTracker />
        </ModalPopup>
        <!-- Add your content for the Legislative Activities tracker here -->
        <!-- {{motions}} -->
        <div class="motion-list">
          <ul>
            <li v-for="motion in motions" :key="motion.id">
              <p><span>Date:</span>{{ motion.date }}</p>
              <p><span>Subject:</span>{{ motion.subject }}</p>
              <p><span>Proposer:</span>{{ motion.proposer }}</p>
              <p><span>Seconder:</span>{{ motion.seconder }}</p>
              <button v-if="motion.status === 'adopted'" disabled>
                Adopted
              </button>
              <button v-else @click="patchAdopt(motion)">Adopt Motion</button>
            </li>
          </ul>
        </div>
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
        <!-- Add your content for the Petition Tracker here -->
        <div class="motion-list">
          <ul>
            <li v-for="motion in petitions" :key="motion.id">
              <p><span>Date:</span>{{ motion.date }}</p>
              <p><span>Subject:</span>{{ motion.subject }}</p>
              <p><span>Presenter:</span>{{ motion.presenter }}</p>
              <p><span>Petitioner:</span>{{ motion.petitioner }}</p>
              
              <nav>
              <ModalPopup buttonLabel="Add Document">
                <AddDocument />
              </ModalPopup>
            </nav>
              <div class="update">
                <ModalPopup
                  buttonLabel="update Petition Status"
                  :buttonClass="customButtonClass"
                  :iconClass="customIconClass"
                  @click="petionId = 'motion.id'"
                >
                  <div class="form-popup">
                    <form @submit.prevent="addPetionActivity(motion)">
                      <label for="status">Status:</label>
                      <select v-model="petitionActivity.status">
                        <option value="ongoing">Ongoing</option>
                        <option value="pending">Pending</option>
                        <option value="concluded">Concluded</option>
                      </select>
                      <textarea name="description" id="" cols="30" rows="10" v-model="petitionActivity.description"></textarea>
                      <button type="submit">Update</button>
                    </form>
                  </div>
                </ModalPopup>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="dashboard" v-if="showDiv === 'dashboard'">
      <h2>Dashboard</h2>
      <Dashboard />
    </div>

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
              :buttonLabel="`update: ${document.description}`"
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
import { ref, onMounted, watch, reactive } from "vue";
import BillsTracker from "@/views/BillTrackers";
import PetitionTracker from "@/views/PetionsTracker.vue";
import MotionTracker from "@/views/MotionTrackers.vue";
import ModalPopup from "@/components/ModalComponent.vue";
import axios from "@/utils/axios";
import AddDocument from "@/views/AddDocument.vue";
import FileActivities from "@/views/FileActivities.vue";
import { BillsSample } from "@/utils/BillsSample.js";
import Dashboard from "@/views/DashboardPage.vue";

export default {
  components: {
    BillsTracker,
    ModalPopup,
    AddDocument,
    PetitionTracker,
    MotionTracker,
    FileActivities,
    Dashboard,
  },

  data() {
    return {
      buttonLabel: "Upload Documents",
      customButtonClass: "add-new",
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

    const petitionActivity = reactive(
      {
        date: new Date(),
        description: "",
        status: "",
        PetitionTracker: null,
      },
    );

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

    const importBills = async () => {
      BillsSample.forEach((bill) => {
        bill.description = bill.bill;
        bill.date = new Date().toISOString();
        bill.maturity_date = new Date().toISOString();
        axios.post("/billtrackers/", bill);
      });
      // const response = await axios.get("/billtrackers/");
      // bills.value = response.data;
      console.log("hey man bill have been imported");
    };

    const patchAdopt = async (motion) => {
      const response = await axios.patch(`/motiontrackers/${motion.id}/`, {
        status: "adopted",
      });
      console.log(response);
    };

    const addPetionActivity = async (motion) => {


      console.log("petition", petitionActivity);
      petitionActivity.PetitionTracker = motion.id

      const response = await axios.post("/petitionactivitytracker/", petitionActivity);
      console.log(response);
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
      importBills,
      BillsSample,
      patchAdopt,
      petitionActivity,
      addPetionActivity,
      petitionId,
    };
  },
};
</script>

<style lang="scss" scoped></style>
