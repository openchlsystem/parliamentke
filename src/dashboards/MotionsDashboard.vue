<template>
  <h2>Kenya Parliament Dashboard</h2>

  <div class="metric-area">
    <div class="side-panel">
      <h3>Nav</h3>
    </div>
    <div class="metric-top">
      <div class="metric-cards">
        <div class="metric-card">
          <p>{{ motionCount }}</p>
          <h3>{{businessType}}</h3>
        </div>
        <div class="metric-card">
          <p>{{ newBills }}</p>
          <h3>New {{businessType}}</h3>
        </div>
        <div class="metric-card">
          <p>{{ motionsAdopted }}</p>
          <h3>{{Bills}} Adopted</h3>
        </div>
        <div class="metric-card">
          <p>{{ percentagemotionsAdopted }}</p>
          <h3>%</h3>
        </div>
      </div>

      <div class="charts">
        

        <div class="dashboard-item">
          <GChart
            type="PieChart"
            :data="chartDataComputed"
            :options="chartOptions"
          />
          <h3>Bill By Sponser</h3>
        </div>
        <div class="dashboard-item">
          <GChart
            type="ColumnChart"
            :data="chartDataComputed3"
            :options="chartOptions3"
          />

          <h3>Bill By Month</h3>
        </div>
        <div class="dashboard-item">
          <GChart
            type="BarChart"
            :data="chartDataComputed2"
            :options="chartOptions"
          />
          <h3>Bill By Stage</h3>
        </div>
        <div class="dashboard-item">
          <GChart
            type="LineChart"
            :data="chartDataComputed3"
            :options="chartOptions3"
          />
          <h3>Bill by Month</h3>
        </div>
        <div class="dashboard-item">
          <GChart
            type="AreaChart"
            :data="chartDataComputed"
            :options="chartOptions"
          />
          <h3>Bill by Year Comparison</h3>
        </div>
        <div class="dashboard-item">
          <GChart
            type="ComboChart"
            :data="chartDataComputed"
            :options="chartOptions"
          />
        </div>
        <div class="dashboard-item">
          <GChart
            type="ScatterChart"
            :data="chartDataComputed"
            :options="chartOptions"
          />
        </div>
        <div class="dashboard-item">
          <GChart
            type="BubbleChart"
            :data="chartDataComputed"
            :options="chartOptions"
          />
        </div>
        <div class="dashboard-item">
          <GChart
            type="Histogram"
            :data="chartDataComputed2"
            :options="chartOptions2"
          />
        </div>
      </div>
    </div>
    <div class="calender-area">
      <h3>Calender</h3>
      <CalenderPage />
    </div>
  </div>
</template>

<script>
import { GChart } from "vue-google-charts";
// import { ref, onMounted, computed } from "vue";
import { reactive, onMounted, computed, ref } from "vue";
import axios from "@/utils/axios";
import CalenderPage from "@/views/CalenderPage.vue";

export default {
  components: { GChart, CalenderPage },
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
    const businessType = "Motions";
    const billCount = ref(0);
    const newBills = ref(0);
    const motionCount = ref(0);
    const petitionCount = ref(0);
    const petitionsConcluded = ref(0);
    const motionsAdopted = ref(0);
    const billPassed = ref(0);
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


    const getBillCountByMonth = async () => {
      try {
        const response = await axios.get(`/motiontrackers/`);
        

        const chartDataObj = response.data.reduce((acc, curr) => {
          const month = new Date(curr.date).getMonth() + 1;
          const year = new Date(curr.date).getFullYear();
          
          const key = `${month}/${year}`;
          
          if (!acc[key]) {
            acc[key] = 1;
          } else {
            acc[key]++;
          }
          return acc;
        }, {});
        
        state.chartData3 = Object.entries(chartDataObj).reduce(
          (acc, [key, value]) => {
            acc.push([key, value]);
            return acc;
          },
          [["month", "Count"]]
        ).sort((a, b) => {
          const [monthA, yearA] = a[0].split('/');
          const [monthB, yearB] = b[0].split('/');
          return new Date(yearA, monthA - 1) - new Date(yearB, monthB - 1);
        });
        
        console.log("billCount", billCount.value);
      } catch (error) {
        console.error("Error fetching documents:", error);
      }
    };


    const getBillsBysponsor = async () => {
      try {
        const response = await axios.get(`/motiontrackers/`);

        const chartDataObj = response.data.reduce((acc, curr) => {
          if (!acc[curr.sponsor]) {
            acc[curr.sponsor] = 1;
          } else {
            acc[curr.sponsor]++;
          }
          return acc;
        }, {});

        state.chartData2 = Object.entries(chartDataObj).reduce(
          (acc, [key, value]) => {
            acc.push([key, value]);
            return acc;
          },
          [["sponsor", "Count"]]
        );

        console.log("sponsorCount", state.chartData2);
      } catch (error) {
        console.error("Error fetching documents:", error);
      }
    };

    const getActivities = async () => {
      try {
        const response = await axios.get(`/motiontrackers/`, {
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

    const chartDataComputed2 = computed(() => state.chartData2);

    const chartDataComputed3 = computed(() => state.chartData3);

    console.log("chartDataComputed2", chartDataComputed2);

    const getBillCount = async () => {
      try {
        const response = await axios.get(`/motiontrackers/`);
        billCount.value = response.data.length;
        console.log("billCount", billCount.value);
      } catch (error) {
        console.error("Error fetching documents:", error);
      }
    };

    const getNewBills = async () => {
      try {
        const response = await axios.get(`/motiontrackers/`, {
          params: {
            status: "new",
          },
        });
        newBills.value = response.data.length;
        console.log("newBills", newBills.value);
      } catch (error) {
        console.error("Error fetching documents:", error);
      }
    };

    const getBillPassed = async () => {
      try {
        const response = await axios.get(`/motiontrackers/`, {
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
          },
        });
        petitionsConcluded.value = response.data.length;
        console.log("petitionsConcluded", petitionsConcluded.value);
      } catch (error) {
        console.error("Error fetching documents:", error);
      }
    };

    const petitionConcluedPercentage = computed(() => {
      return (
        Math.round(
          (petitionsConcluded.value / petitionCount.value) * 100 * 100
        ) / 100
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
      getNewBills();
      getBillsBysponsor();
      getBillCountByMonth();
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
      newBills,
      getNewBills,
      chartDataComputed2,
      getBillsBysponsor,
      getBillCountByMonth,
      chartDataComputed3,
      businessType,
      
      
    };
  },
};
</script>
