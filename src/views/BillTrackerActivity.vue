<template>
  <h2>Bill Tracker Activity</h2>
  <div class="bill-activity">
    <form @submit.prevent="submitActivity">
      <label for="date">Date:</label>
      <input type="date" id="date" v-model="activity.date" />

      <label for="description">Description:</label>
      <textarea id="description" v-model="activity.description"></textarea>

      <label for="status">Stage:</label>
      <input type="text" id="status" v-model="activity.status" />

      <label for="bill_stage">Bill Stage:</label>
      <select name="bill_stage" id="" v-model="activity.status">
        <option
          v-for="stage in legislativeStages"
          :key="stage.id"
          :value="stage.stage"
        >
          {{ stage.stage }}
        </option>
      </select>

      <input
        type="file"
        name="file"
        id="file"
        ref="fileInput"
        @change="onChange"
      />
      {{ selectedStage }}

      <!-- 
        <label for="BillTracker">Bill Tracker:</label>
        <input type="text" id="BillTracker" v-model="activity.BillTracker" />
      </div> -->
      <button type="submit">Add Activity</button>
    </form>

    <!-- Your code here -->
  </div>
</template>

<script>
import { ref, reactive } from "vue";
import axios from "@/utils/axios";
import { legislativeStages } from "@/utils/LegislationStages.js";

export default {
  name: "BillTrackerActivity",

  props: {
    billid: {
      type: String,
      required: true,
    },
  },

  setup(props) {
    const activity = reactive({
      date: "",
      description: "",
      status: "",
      file: "",
      BillTracker: props.billid,
    });

    const fileListing = ref([]);
    const fileInput = ref();

    const onChange = async () => {
      const file = fileInput.value.files[0];
      if (file) {
        activity.file = file;
      }
    };

    const submitActivity = async () => {
      try {
        const formData = new FormData();
        formData.append("date", activity.date);
        formData.append("description", activity.description);
        formData.append("status", activity.status);
        formData.append("file", activity.file);
        formData.append("BillTracker", activity.BillTracker);

        await axios.post("/billactivitytracker/", formData);

        await axios.patch("/billtrackers/" + activity.BillTracker + "/", { 
          status: activity.status,
        });
        // reset form
        activity.date = "";
        activity.description = "";
        activity.status = "";
        activity.file = "";
        
      } catch (error) {
        console.error(error);
      }
    };

    return {
      activity,
      submitActivity,
      legislativeStages,
      fileListing,
      onChange,
      fileInput,
    };
  },
};
</script>
