<template>
  <h2>Kenya Parliament Dashboard</h2>
  <div class="dashboard">
    <div class="metric-cards">
      <div class="metric-card">
        <h3>Bill</h3>
        <p>{{ billCount }}</p>
      </div>
      <div class="metric-card">
        <h3>Bill Passed</h3>
        <p>{{ billPassed }}</p>
      </div>
      <div class="metric-card">
        <h3>%</h3>
        <p>{{ billsRational }}</p>
      </div>
      <div class="metric-card">
        <h3>Motions</h3>
        <p>{{ motionCount }}</p>
      </div>
      <div class="metric-card">
        <h3>Adopted</h3>
        <p>{{ motionsAdopted }}</p>
      </div>
      <div class="metric-card">
        <h3>%</h3>
        <p>{{ percentagemotionsAdopted }}</p>
      </div>
      <div class="metric-card">
        <h3>Petions</h3>
        <p>{{ petitionCount }}</p>
      </div>
      <div class="metric-card">
        <h3>Petitions Concluded</h3>
        <p>{{ petitionsConcluded }}</p>
      </div>
      <div class="metric-card">
        <h3>%t</h3>
        <p>{{ petitionConcluedPercentage }}</p>
      </div>
    </div>
    <div class="charts">
      <div class="dashboard-item">
        <GChart type="ColumnChart" :data="chartDataComputed" :options="chartOptions" />

        <h3>Bill By status</h3>
      </div>

      <div class="dashboard-item">
        <GChart type="PieChart" :data="chartDataComputed" :options="chartOptions" />
        <h3>Bill By Sponser</h3>
      </div>
      <div class="dashboard-item">
        <GChart type="BarChart" :data="chartDataComputed" :options="chartOptions" />
        <h3>Bill By Committees</h3>
      </div>
      <div class="dashboard-item">
        <GChart type="LineChart" :data="chartDataComputed" :options="chartOptions" />
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
        <GChart type="Histogram" :data="chartDataComputed" :options="chartOptions" />
      </div>
    </div>
  </div>
</template>

<script>
import { GChart } from "vue-google-charts";
// import { ref, onMounted, computed } from "vue";
import { reactive, onMounted, computed, ref } from "vue";
import axios from "@/utils/axios";

export default {
  components: { GChart },
  // data() {
  // return {
  //   chartData: [
  //     ["Year", "Sales", "Expenses"],
  //     ["2014", 1000, 400],
  //     ["2015", 1170, 460],
  //     ["2016", 660, 1120],
  //     ["2017", 1030, 540],
  //   ],
  //   chartOptions: {
  //     chart: {
  //       title: "Company Performance 2323",
  //       subtitle: "Sales and Expenses: 2014-2017",
  //     },
  //   },
  // };
  // },

  setup() {
    const billCount = ref(0);
    const motionCount = ref(0);
    const petitionCount = ref(0);
    const petitionsConcluded = ref(0);
    const motionsAdopted = ref(0);
    const billPassed = ref(0);
    const state = reactive({
      fileactivities: [],
      chartData: [],
      chartOptions: {
        chart: {
          title: "Company Performance by status",
          subtitle: "Count of each status",
        },
      },
    });

    const getActivities = async () => {
      try {
        const response = await axios.get(`/petitiontrackers/`, {
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

    const chartDataComputed = computed(() => state.chartData);

    const getBillCount = async () => {
      try {
        const response = await axios.get(`/billtrackers/`);
        billCount.value = response.data.length;
        console.log("billCount", billCount.value);
      } catch (error) {
        console.error("Error fetching documents:", error);
      }
    };

    const getBillPassed = async () => {
      try {
        const response = await axios.get(`/file-activities/`, {
          params: {
            status: "Commencement",
          },
        });
        billPassed.value = response.data.length;
        console.log("billPassed", billPassed.value);
      } catch (error) {
        console.error("Error fetching documents:", error);
      }
    };

    const billsRational = computed(() => {
      return (
        Math.round((billPassed.value / billCount.value) * 100 * 100) / 100
      ).toFixed(2);
    });

    const getMotionCount = async () => {
      try {
        const response = await axios.get(`/motiontrackers/`);
        motionCount.value = response.data.length;
        console.log("motionsCount", response.data.length);
      } catch (error) {
        console.error("Error fetching documents:", error);
      }
    };

    const getMotionsAdopted = async () => {
      try {
        const response = await axios.get(`/motiontrackers/`, {
          params: {
            status: "adopted",
          },
        });
        motionsAdopted.value = response.data.length;
        console.log("motionsAdopted", motionsAdopted.value);
      } catch (error) {
        console.error("Error fetching documents:", error);
      }
    };


    const percentagemotionsAdopted = computed(() => {
      return (
        Math.round((motionsAdopted.value / motionCount.value) * 100 * 100) / 100
      ).toFixed(2);
    });

    const getPetitionCount = async () => {
      try {
        const response = await axios.get(`/petitiontrackers/`);
        petitionCount.value = response.data.length;
        console.log("petitionCount", petitionCount.value);
      } catch (error) {
        console.error("Error fetching documents:", error);
      }
    };

    const getPetionConcluded = async () => {
      try {
        const response = await axios.get(`/petitiontrackers/`, {
          params: {
            status: "concluded",
          }
        });
        petitionsConcluded.value = response.data.length;
        console.log("petitionsConcluded", petitionsConcluded.value);
      } catch (error) {
        console.error("Error fetching documents:", error);
      }
    }

    const petitionConcluedPercentage = computed(() => {
      return (
        Math.round((petitionsConcluded.value / petitionCount.value) * 100 * 100) / 100
      ).toFixed(2);
    });

    onMounted(() => {
      getActivities();
      getBillCount();
      getBillPassed();
      getMotionCount();
      getMotionsAdopted();
      getPetitionCount();
      getPetionConcluded();
    });
    return {
      ...state,
      getActivities,
      chartDataComputed,
      billCount,
      billPassed,
      getBillCount,
      getBillPassed,
      billsRational,
      motionCount,
      getMotionCount,
      getMotionsAdopted,
      motionsAdopted,
      percentagemotionsAdopted,
      petitionCount,
      petitionsConcluded,
      getPetitionCount,
      getPetionConcluded,
      petitionConcluedPercentage,
     

    };
  },
};
</script>
