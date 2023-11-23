<template>
  <div class="header-buttons">
    <button @click="$router.go(-1)">
      <i class="bi bi-arrow-left"></i>Back
    </button>
  </div>
  <div class="detail-view">
    <div class="detail">
      <h2>petition Details</h2>
      <p><strong>ID:</strong> {{ petition.id }}</p>
      <p><strong>Date:</strong> {{ petition.date }}</p>
      <p><strong>Date Due:</strong> {{ petition.date_due }}</p>
      <p><strong>Petioner:</strong> {{ petition.petitioner }}</p>
      <p><strong>Presenter:</strong> {{ petition.presenter }}</p>
      <p><strong>Description:</strong> {{ petition.subject }}</p>
      <p><strong>Status:</strong> {{ petition.status }}</p>
      
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
                <p>{{ activity.description }}</p>
                <p>{{ activity.date }}</p>
                {{ activity.status }}
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
    orderpaper: {
      type: Object,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const petition = ref([]);
    const activities = ref([]);

    const getPetion = async () => {
      const response = await axios.get(`/petitiontrackers/${props.id}`);
      petition.value = response.data;
    };

    const getActivities = async () => {
      const response = await axios.get(`/petitionactivitytracker/`, {
        params: {
          PetitionTracker: props.id,
        },
      });
      activities.value = response.data;
    };

    const formatDate = computed(() => {
      return useFormatDate(new Date());
    });

    onMounted(() => {
      getPetion();
      getActivities();
    });

    return {
      petition,
      getPetion,
      activities,
      getActivities,
      formatDate,
      // id: props.id,
    };
  },
};
</script>
