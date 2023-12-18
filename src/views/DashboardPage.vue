<template>
  <div class="dropdown">
    <button class="dropbtn dropdown-arrow" v-if="selectedArea === ''">Select a Dashboard</button>
    <button class="dropbtn dropdown-arrow" v-else>Selected: {{ selectedArea }}</button>
    <div class="dropdown-content">
      <a href="#" @click="selectedArea = 'all'">all</a>
      <a href="#" @click="selectedArea = 'bills'">Bills</a>
      <a href="#" @click="selectedArea = 'petitions'">Petitions</a>
      <a href="#" @click="selectedArea = 'motions'">Motions</a>
      <a href="#" @click="selectedArea = 'committees'">Committees</a>
      <a href="#" @click="selectedArea = 'members'">Members</a>
      <a href="#" @click="selectedArea = 'documents'">Documents</a>

    </div>
  </div>
  <div class="main-dashboard">


    <div class="dashboard" v-if="selectedArea === 'documents'">
      <DocumentsDashboard />
    </div>

    <div class="dashboard" v-if="selectedArea === 'committees'">
      <CommitteesDashboard />
    </div>

    <div class="dashboard" v-if="selectedArea === 'members'">

      <MembersDashboard />
    </div>

    <div class="dashboard" v-if="selectedArea === 'bills'">
      <billsDashboard />
    </div>
    <div class="dashboard" v-if="selectedArea === 'petitions'">
      <petitionsDashboard />
    </div>
    <div class="dashboard" v-if="selectedArea === 'motions'">
      <motionsDashboard />
    </div>

    <div class="metric-area" v-if="selectedArea === 'all'">

      <div class="metric-top">
        <div class="metric-cards">
          <div class="metric-card" @click="$router.push('/members')">
            <span class="bi bi-person custom-icon"></span>
            <p>{{ membersCount }}</p>
            <h3>Members</h3>
          </div>
          <div class="metric-card" @click="$router.push('/committees')">
            <span class="bi bi-people-fill custom-icon"></span>
            <p>{{ committeesCount }}</p>
            <h3>Commitees</h3>
          </div>
          <div class="metric-card" @click="$router.push('/trackers')">
            <span class="bi bi-file-earmark-text custom-icon"></span>
            <p>{{ billsCount }}</p>

            <h3>Bills</h3>
          </div>
          <div class="metric-card " @click="$router.push('/trackers')">
            <span class="bi bi-clipboard custom-icon"></span>
            <p>{{ petitionsCount }}</p>
            <h3>Petions</h3>
          </div>
          <div class="metric-card" @click="$router.push('/trackers')">
            <span class="bi bi-person-check custom-icon"></span>
            <p>{{ motionsCount }}</p>
            <h3>Motions</h3>
          </div>
        </div>

        <div class="charts">


          <div class="dashboard-item">
            <h2>Bills :{{ billsCount }}</h2>
            <GChart type="PieChart" :data="chartDataComputed" :options="chartOptions" />
            <h3>Bill Stages</h3>
          </div>
          <div class="dashboard-item">
            <GChart type="ColumnChart" :data="chartDataComputed3" :options="chartOptions" />

            <h3>Petion Stages</h3>
          </div>
          <div class="dashboard-item">
            <GChart type="BarChart" :data="chartDataComputed2" :options="chartOptions" />
            <h3>Bill By Stage</h3>
          </div>
          <div class="dashboard-item">
            <GChart type="LineChart" :data="chartDataComputed3" :options="chartOptions3" />
            <h3>Bill by Month</h3>
          </div>
          <div class="dashboard-item">
            <GChart type="AreaChart" :data="chartDataComputed" :options="chartOptions" />
            <h3>Bill by Year Comparison</h3>
          </div>
          <div class="dashboard-item">
            <GChart type="ComboChart" :data="chartDataComputed" :options="chartOptions" />
          </div>
          <div class="dashboard-item">
            <GChart type="ScatterChart" :data="chartDataComputed" :options="chartOptions" />
          </div>
          <div class="dashboard-item">
            <GChart type="BubbleChart" :data="chartDataComputed" :options="chartOptions" />
          </div>
          <div class="dashboard-item">
            <GChart type="Histogram" :data="chartDataComputed2" :options="chartOptions2" />
          </div>
        </div>
      </div>
      <div class="calender-area">
        <h3>Calender</h3>
        <CalenderPage />
      </div>
    </div>


  </div>
</template>

<script>
import { ref, onMounted, computed, reactive } from "vue";
import billsDashboard from "@/dashboards/BillsDashboard";
import motionsDashboard from "@/dashboards/MotionsDashboard";
import petitionsDashboard from "@/dashboards/PetitionsDashboard";
import DocumentsDashboard from "@/dashboards/DocumentsDashboard";
import CommitteesDashboard from "@/dashboards/CommitteesDashboard";
import MembersDashboard from "@/dashboards/MembersDashboard";
import CalenderPage from "@/views/CalenderPage.vue";

// import { Committees } from "@/utils/Committees";
import axios from "@/utils/axios";
import { GChart } from "vue-google-charts";


export default {
  name: "DashboardPage",
  // ... existing code ...
  components: {
    billsDashboard,
    motionsDashboard,
    petitionsDashboard,
    // Committees,
    DocumentsDashboard,
    MembersDashboard,
    CommitteesDashboard,
    GChart,
    CalenderPage,

  },
  setup() {
    const selectedArea = ref("all");

    const membersCount = ref(0);
    const committeesCount = ref(0);
    const billsCount = ref(0);
    const petitionsCount = ref(0);
    const motionsCount = ref(0);
    const state = reactive({
      fileactivities: [],
      chartData: [],
      chartData2: [],
      chartData3: [],
      chartOptions: {
        chart: {
          title: "Bill by Stage",
          subtitle: "Count of each stage",
        },
      },

      chartOptions2: {
        chart: {
          title: "Bill by Sponser",
          subtitle: "Count of each sponser",
        }
      },
      chartOptions3: {
        chart: {
          title: "Bill by Sponsor",
          subtitle: "Count of each sponsor",
        }
      }
    });
    const chartDataComputed = computed(() => state.chartData);

    const chartDataComputed2 = computed(() => state.chartData2);

    const chartDataComputed3 = computed(() => state.chartData3);


    const getActivities = async () => {
      try {
        const response = await axios.get(`/billtrackers/`, {
          params: {
            // filereference: props.id
          },
        });
        state.fileactivities = response.data;
        console.log("activities", state.fileactivities);

        const chartDataObj = state.fileactivities.reduce((acc, curr) => {
          if (!acc[curr.status]) {
            acc[curr.status] = 1;
          } else {
            acc[curr.status]++;
          }
          return acc;
        }, {});

        state.chartData.push(["status", "Count"]);

        console.log("chartDataObj", state.chartData);

        console.log("chartDataObj", chartDataObj);

        state.chartData = Object.entries(chartDataObj).reduce(
          (acc, [key, value]) => {
            acc.push([key, value]);
            return acc;
          },
          [["status", "Count"]]
        );
      } catch (error) {
        console.error("Error fetching documents:", error);
      }
    };


    const getMembersCount = async () => {
      const response = await axios.get("/members/");
      membersCount.value = response.data.length;
    }

    const getComitteesCount = async () => {
      const response = await axios.get("/committees/");
      committeesCount.value = response.data.length;
    }

    const getBillCount = async () => {
      const response = await axios.get("/billtrackers/");
      billsCount.value = response.data.length;
    }

    const getPetitionCount = async () => {
      const response = await axios.get("/petitiontrackers/");
      petitionsCount.value = response.data.length;
    }

    const getMotionsCount = async () => {
      const response = await axios.get("/motiontrackers/");
      motionsCount.value = response.data.length;
    }

    onMounted(() => {
      getMembersCount();
      getComitteesCount();
      getBillCount();
      getPetitionCount();
      getMotionsCount();
      getActivities();
    })
    return {
      selectedArea,
      membersCount,
      committeesCount,
      billsCount,
      petitionsCount,
      motionsCount,
      getMembersCount,
      getComitteesCount,
      getBillCount,
      getPetitionCount,
      getMotionsCount,
      chartDataComputed,
      chartDataComputed2,
      chartDataComputed3,

      state,
      getActivities,
    };
  },
};
</script>

<style scoped>
/* ... existing code ... */
</style>
