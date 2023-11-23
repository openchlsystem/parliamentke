<template>
    <div class="orderpaper-details">

        <h2>

        </h2>
        <h3>REPUBLIC OF KENYA</h3>
        <h3>{{ orderpaper.OrderPaperDescription }} ||{{ orderpaper.parliament }} || {{ orderpaper.OrderPaperNumber }}</h3>
        <h4>THE NATIONAL ASSEMBLY : {{ orderpaper.Parliament }}</h4>
        <h4>SUPPLEMENTARY ORDERS OF THE DAY </h4>
        <h6>{{ orderpaper.OrderPaperDate }}</h6>
        <p>{{ orderpaper.OrderPaperDate }}</p>
        <h2>ORDER OF BUSINESS </h2>
    </div>

    <div class="orderpaper-details">
        <ul>
            <li v-for="item in orderPaperDetails" :key="item.id">
                <p><span>Date</span> {{ item.date }}</p>
                <p><span>Prayer</span> {{ item.prayer }}</p>
                <p><span>Description</span> {{ item.description }}</p>
                <p><span>Status</span> {{ item.status }}</p>
            </li>
        </ul>
    </div>
</template>


<script>
import axios from "@/utils/axios";
import { ref, onMounted } from "vue";
export default {

    props: {

        id: {
            type: String,
            required: true
        }
    },
    setup(props) {

        const orderPaperDetails = ref([])
        const filterID = ref('')
        const orderpaper = ref({})

        const getOrderPaper = async () => {
            const response = await axios.get("/OrderPaper/", {
                params: {
                    id: props.id
                }
            });
            orderpaper.value = response.data[0];
        }

        const getOrderPapersDetails = async () => {
            console.log("props", props.id)
            const response = await axios.get("/OrderPaperDetails/", {
                params: {
                    OrderPaper: props.id
                }
            });
            orderPaperDetails.value = response.data;
        }

        onMounted(getOrderPapersDetails(), getOrderPaper());
        return {
            orderPaperDetails,
            getOrderPapersDetails,
            filterID,
            orderpaper,
            getOrderPaper,
        }
    }
}
</script>
