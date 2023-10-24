<template>
  <div>
    <!-- Your template code here -->
    <button @click="addStandingsOrdersArray">Import Document</button>
  </div>
</template>

<script>
import { StandingOrders } from '@/utils/standingOrder'
// import { ref } from 'vue'
import axios from '@/utils/axios';

export default {
    name: 'SettingsPage',

    setup() {


        // add standing order to documentIndex 

        const addStandingsOrdersArray = () => {
            StandingOrders.forEach(standingOrder => {
                axios.post('/DocumentIndex/', standingOrder)
            })
        }


    
        return {

            StandingOrders,
        addStandingsOrdersArray,
          
      }
  }
  // Your script code here
}
</script>

<style scoped>
/* Your style code here */
</style>