<template>
  <div>
    <form @submit.prevent="submitBill">
      <div class="title">
        <h2>New Petion</h2>
      </div>

      <!-- <label for="bill_stage">Bill Stage:</label>
            <select name="bill_stage" id="" v-model="selectedStage">
                <option v-for="stage in legislativeStages" :key="stage.id" :value="stage.stage">
                    {{ stage.stage }}
                </option>
            </select> -->
      {{ selectedStage }}

      <label for="date">Date:</label>
      <input type="date" id="date" v-model="newBill.date" required />

     

      <label for="proposer">Presenter:</label>
      <input
        type="text"
        id="proposer"
        v-model="newBill.presenter"
        required
      />

      <label for="Seconder">Petitioner </label>
      <input
        type="text"
        id="Seconder"
        v-model="newBill.petitioner"
        required
      />

      <label for="description"> Subject:</label>
      <textarea
        id="description"
        v-model="newBill.subject"
        required
      ></textarea>

      <label for="Maturity Date">Date Due </label>
      <input
        type="date"
        id="Maturity Date"
        v-model="newBill.date_due"
        required
      />

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { legislativeDocuments } from "@/utils/LegislativeDocuments.js";
import { kenyanParliamentDocumentTypes } from "@/utils/KenyanParliamentaryDocumentTypes.js";
import { legislativeStages } from "@/utils/LegislationStages.js";
import axios from "@/utils/axios.js";
export default {
  setup() {
    const selectedStage = ref("");
    const selectedDocument = ref("");
    const selectedStatus = ref("");

    const newBill = ref({
      date: null,
      presenter: "",
      petitioner: "",
      subject: "",
      date_due: null,
      status: "",
    });

    const fileInput = ref(null);
    const fileListing = ref([]);

    const onChange = async () => {
      const file = fileInput.value.files[0];

      console.log("hey man", file.name);
      console.log("size", file.size);
      console.log("type", file.type);
      console.log("all file", file);
      newBill.value.name = file.name;
      newBill.value.size = file.size;
      newBill.value.type = file.type;
      // newBill.value.date = file.name;
    };

    const submitBill = () => {
      const formData = new FormData();
      formData.append("presenter", newBill.value.presenter); // Append the presenter
      formData.append("petitioner", newBill.value.petitioner); // Append the petitioner
      formData.append("date", newBill.value.date); // Append the date
      formData.append("subject", newBill.value.subject); // Append the subject
      formData.append("due_date", newBill.value.date_due); // Append the date_due
      formData.append("status", newBill.value.status); // Append the status
     // Append the selectedStatus

      console.log(formData);

      axios
        .post("/petitiontrackers/", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log("Upload successful:", response.data);
          // Reset the form or perform other actions after successful upload
        })
        .catch((error) => {
          console.error("Upload failed:", error);
        });
    };

    return {
      newBill,
      submitBill,
      fileInput,
      fileListing,
      legislativeDocuments,
      legislativeStages,
      selectedDocument,
      selectedStage,
      selectedStatus,
      onChange,
      kenyanParliamentDocumentTypes,
    };
  },
};
</script>
