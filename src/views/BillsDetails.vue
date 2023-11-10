<template>
  <div class="header-buttons">
    <button @click="$router.go(-1)">
      <i class="bi bi-arrow-left"></i>Back
    </button>
  </div>
  <div class="detail-view">
    <div class="detail">
      <h2>Bill Details</h2>
      <p><strong>ID:</strong> {{ bill.id }}</p>
      <p><strong>Date:</strong> {{ bill.date }}</p>
      <p><strong>Maturity Date:</strong> {{ bill.maturity_date }}</p>
      <p><strong>Serial Number:</strong> {{ bill.serialno }}</p>
      <p><strong>Bill:</strong> {{ bill.bill }}</p>
      <p><strong>Description:</strong> {{ bill.description }}</p>
      <p><strong>Sponsor:</strong> {{ bill.sponsor }}</p>
      <p><strong>Bill Number:</strong> {{ bill.billnumber }}</p>
      <p><strong>Seconder:</strong> {{ bill.seconder || "N/A" }}</p>
      <p><strong>Status:</strong> {{ bill.status }}</p>
      <p><strong>Gazette Number:</strong> {{ bill.gazette_no }}</p>
      <p><strong>File:</strong> {{ bill.file || "N/A" }}</p>
      <p><strong>Function:</strong> {{ bill.function }}</p>
      <p><strong>Document:</strong> {{ bill.document }}</p>
    </div>
    <div class="other-details">
      <h2>Other Details</h2>
      <h3>committees</h3>
      <h3>activities</h3>
      <div class="activities-list">
        <ul>
          <li v-for="activity in activities" :key="activity.id">
            <div class="timeline-item">
              <div class="timeline-item-header">
                {{ activity.date }}
              </div>

              <div class="timeline-item-content">{{ activity.status }}</div>
            </div>
          </li>
        </ul>
      </div>
      <h3>documents</h3>
      <h3>members</h3>
    </div>
  </div>
</template>
<script>
import { ref, onMounted, computed } from "vue";
import axios from "@/utils/axios";
import { useFormatDate } from "@/utils/useFormatDate";
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const bill = ref([]);
    const activities = ref([]);

    const getBill = async () => {
      const response = await axios.get(`/billtrackers/${props.id}`);
      bill.value = response.data;
    };

    const getActivities = async () => {
      const response = await axios.get(`/billactivitytracker/`, {
        params: {
          BillTracker: props.id,
        },
      });
      activities.value = response.data;
    };

    const formatDate = computed(() => {
      return useFormatDate(new Date());
    });

    onMounted(() => {
      getBill();
      getActivities();
    });

    return {
      bill,
      getBill,
      activities,
      getActivities,
      formatDate,
      // id: props.id,
    };
  },
};
</script>
