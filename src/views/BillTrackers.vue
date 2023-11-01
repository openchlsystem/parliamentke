<template>
  <form @submit.prevent="submitBill">
    <div class="title">
      <h2>New Bill</h2>
    </div>

    <!-- <label for="bill_stage">Bill Stage:</label>
            <select name="bill_stage" id="" v-model="selectedStage">
                <option v-for="stage in legislativeStages" :key="stage.id" :value="stage.stage">
                    {{ stage.stage }}
                </option>
            </select> -->
    <!-- {{ selectedStage }} -->

    <label for="date">Date:</label>
    <input type="date" id="date" v-model="newBill.date" required />

    <label for="title">Bill:</label>
    <input type="text" id="name" v-model="newBill.name" required />

    <label for="description"> Description:</label>
    <textarea
      id="description"
      v-model="newBill.description"
      required
    ></textarea>

    <label for="proposer">Sponsor:</label>
    <input type="text" id="proposer" v-model="newBill.proposer" required />

    <label for="Seconder">Seconder</label>
    <input type="text" id="Seconder" v-model="newBill.seconder" required />

    <label for="file">Upload Document:</label>
    <select name="document_type" id="" v-model="selectedDocument">
      <option>Select Document Type</option>
      <option
        v-for="document in kenyanParliamentDocumentTypes"
        :key="document.id"
        :value="document"
      >
        {{ document.document_name }}
      </option>
    </select>

    <!-- {{ selectedDocument.document_name }}{{ selectedDocument.functional_area }} -->
    <input
      type="file"
      name="file"
      id="file"
      ref="fileInput"
      @change="onChange"
    />

    <p>size {{ newBill.size }}</p>

    <label for="Maturity Date">Maturity Date</label>
    <input
      type="date"
      id="Maturity Date"
      v-model="newBill.maturity_date"
      required
    />

    <button type="submit">Submit</button>
  </form>
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
      name: "",
      description: "",
      stage: selectedStage.value,
      type: selectedDocument.value,
      status: "",
      date: "",
      proposer: "",
      seconder: "",
      maturity_date: "",
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
      formData.append("bill", newBill.value.name); // Append the title
      formData.append("name", newBill.value.name); // Append the title
      formData.append("description", newBill.value.description); // Append the description
      formData.append("date", newBill.value.date); // Append the date
      formData.append("sponsor", newBill.value.sponsor);
      formData.append("seconder", newBill.value.seconder);
      formData.append("maturity_date", newBill.value.maturity_date);
      formData.append("stage", newBill.value.stage);
      formData.append("file", fileInput.value.files[0]); // Append the file  formData.append("name", file.name);
      formData.append("size", fileInput.value.files[0].size);
      formData.append("type", fileInput.value.files[0].type);
      formData.append("status", "draft");
      formData.append("gazette_no", newBill.value.gazette_no);
      formData.append("serialno", newBill.value.serialno);
      formData.append("billnumber", newBill.value.billnumber);

      console.log(formData);

      axios
        .post("/billtrackers/", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log("Upload successful:", response.data);

          // Perform any additional actions after successful upload
          formData.append("refdocument", response.data.id);
          formData.append("text", "text extract");
          formData.append("stage", selectedStage.value);
          formData.append("document", response.data.document);
          formData.append("function", response.data.function);
          formData.append("status", "draft");

          axios.post("/files/", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
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
