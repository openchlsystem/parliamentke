<template>
  <div class="dashboard">
    <div class="dashboard-item">
      <GChart
        type="ColumnChart"
        :data="chartDataComputed"
        :options="chartOptions"
      />
    </div>

     <div class="dashboard-item">
      <GChart
        type="PieChart"
        :data="chartDataComputed"
        :options="chartOptions"
      />
    </div>
     <div class="dashboard-item">
      <GChart
        type="BarChart"
        :data="chartDataComputed"
        :options="chartOptions"
      />
    </div>
     <div class="dashboard-item">
      <GChart
        type="LineChart"
        :data="chartDataComputed"
        :options="chartOptions"
      />
    </div>
     <div class="dashboard-item">
      <GChart
        type="AreaChart"
        :data="chartDataComputed"
        :options="chartOptions"
      />
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
        :data="chartDataComputed"
        :options="chartOptions"
      />
    </div>
    
  </div>
</template>

<script>
import { GChart } from "vue-google-charts";
// import { ref, onMounted, computed } from "vue";
import { reactive, onMounted, computed } from "vue";
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
    const state = reactive({
      fileactivities: [],
      chartData: [],
      chartOptions: {
        chart: {
          title: "Company Performance by Stage",
          subtitle: "Count of each stage",
        },
      },
    });

    const getActivities = async () => {
      try {
        const response = await axios.get(`/file-activities/`, {
          params: {
            // filereference: props.id
          },
        });
        state.fileactivities = response.data;
        console.log("activities", state.fileactivities);

        const chartDataObj = state.fileactivities.reduce((acc, curr) => {
          if (!acc[curr.stage]) {
            acc[curr.stage] = 1;
          } else {
            acc[curr.stage]++;
          }
          return acc;
        }, {});

        state.chartData.push(["Stage", "Count"]);

        console.log("chartDataObj", state.chartData);

        console.log("chartDataObj", chartDataObj);

        state.chartData = Object.entries(chartDataObj).reduce(
          (acc, [key, value]) => {
            acc.push([key, value]);
            return acc;
          },
          [["Stage", "Count"]]
        );
      } catch (error) {
        console.error("Error fetching documents:", error);
      }
    };

    const chartDataComputed = computed(() => state.chartData);

    onMounted(() => {
      getActivities();
    });
    return {
      ...state,
      getActivities,
      chartDataComputed,
    };
  },
};
</script>
