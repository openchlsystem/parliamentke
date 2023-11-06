<template>
 <div class="calendar">
    <h2 class="current-month">{{ currentMonth }}</h2>
    <button @click="previousMonth">Previous Month</button>
    <button @click="nextMonth">Next Month</button>
    <table class="calendar-table">
      <thead>
        <tr>
          <th v-for="day in daysOfWeek" :key="day" class="day-header">{{ day }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="week in calendar" :key="week" class="calendar-row">
          <td v-for="day in week" :key="day.date" class="calendar-cell">
            <div class="date">{{ day.date.split('-')[2] }}</div>
            <ul class="activity-list">
              <li v-for="activity in day.activities" :key="activity.id" class="activity">
                {{ activity.name }}
              </li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>  
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const currentDate = new Date();
    const currentMonth = ref(currentDate.toLocaleString('default', { month: 'long' }) + ' ' + currentDate.getFullYear());
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const calendar = ref([]);
    const sampleData = [
      {
        date: '2023-10-03',
        name: 'Sample Event 1',
      },
      {
        date: '2023-10-10',
        name: 'Sample Event 2',
      },
      {
        date: '2023-10-17',
        name: 'Sample Event 3',
      },
    ];

    const generateCalendar = (year, month) => {
      const firstDay = new Date(year, month - 1, 1).getDay();
      const lastDate = new Date(year, month, 0).getDate();
      const calendarStructure = [];
      let dayCounter = 1;
      for (let week = 0; week < 6; week++) {
        const weekDays = [];
        for (let day = 0; day < 7; day++) {
          if (week === 0 && day < firstDay) {
            weekDays.push({ date: '', activities: [] });
          } else if (dayCounter <= lastDate) {
            const date = `${year}-${month}-${String(dayCounter).padStart(2, '0')}`;
            weekDays.push({
              date: date,
              activities: sampleData.filter(event => event.date === date),
            });
            dayCounter++;
          } else {
            weekDays.push({ date: '', activities: [] });
          }
        }
        calendarStructure.push(weekDays);
      }
      calendar.value = calendarStructure;
    };

    const previousMonth = () => {
      const currentYear = parseInt(currentMonth.value.split(' ')[1]);
      const currentMonthIndex = new Date(currentMonth.value).getMonth();
      const previousMonthIndex = currentMonthIndex === 0 ? 11 : currentMonthIndex - 1;
      const previousYear = previousMonthIndex === 11 ? currentYear - 1 : currentYear;
      const previousMonth = previousMonthIndex + 1;
      generateCalendar(previousYear, previousMonth);
      currentMonth.value = new Date(previousYear, previousMonthIndex).toLocaleString('default', { month: 'long' }) + ' ' + previousYear;
    };

    const nextMonth = () => {
      const currentYear = parseInt(currentMonth.value.split(' ')[1]);
      const currentMonthIndex = new Date(currentMonth.value).getMonth();
      const nextMonthIndex = currentMonthIndex === 11 ? 0 : currentMonthIndex + 1;
      const nextYear = nextMonthIndex === 0 ? currentYear + 1 : currentYear;
      const nextMonth = nextMonthIndex + 1;
      generateCalendar(nextYear, nextMonth);
      currentMonth.value = new Date(nextYear, nextMonthIndex).toLocaleString('default', { month: 'long' }) + ' ' + nextYear;
    };

    onMounted(() => {
      generateCalendar(2023, 10); // Replace with your desired year and month
    });

    return {
      currentMonth,
      daysOfWeek,
      calendar,
      previousMonth,
      nextMonth,
    };
  },
};
</script>

<style scoped>
/* Add your calendar styles here */
</style>
