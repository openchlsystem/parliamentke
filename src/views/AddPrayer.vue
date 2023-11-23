<template>
    <div class="add-bill">
        <form @submit.prevent="submitPrayer">

            <label>Date</label>
            <input type="date" v-model="orderPaperDetails.date" />


            <label>Prayer</label>
            <select name="prayer" v-model="orderPaperDetails.prayer">
                <option v-for="prayer in Prayers" :key="prayer.id" :value="prayer.item_type">
                    {{ prayer.item_type }}
                </option>
            </select>


            <label>Description</label>
            <textarea v-model="orderPaperDetails.description"></textarea>


            <label>File</label>
            <input type="file" @change="onFileChangePrayer" ref="orderPaperDetails.file" />


            <label>Status</label>
            <select v-model="orderPaperDetails.status">
                <option value="pending">Pending</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
            </select>

            <input type="text" v-model="orderPaperDetails.orderPaper" />
            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<script>

import axios from "axios";
import { reactive } from "vue";
import { Prayers } from "@/utils/Prayers";


export default {
    name: "AddPrayer",
    props: {
        orderpaperID: {
            type: String,
            required: true
        }
    },
    setup(props) {

        const orderPaperDetails = reactive({
            date: null,
            prayer: "",
            description: "",
            file: null,
            status: "",
            OrderPaper: null,
        });

        const submitPrayer = async () => {
            const formData = new FormData();
            formData.append("date", orderPaperDetails.date);
            formData.append("prayer", orderPaperDetails.prayer);
            formData.append("description", orderPaperDetails.description);
            formData.append("file", orderPaperDetails.file);
            formData.append("status", orderPaperDetails.status);
            formData.append("OrderPaper", props.orderpaperID);

            try {
                const response = await axios.post("/OrderPaperDetails/", formData);
                console.log("Post request successful", response.data);
                // Reset the form
                orderPaperDetails.value = {
                    date: null,
                    prayer: "",
                    description: "",
                    file: null,
                    status: "pending",
                    OrderPaper: null,
                };
            } catch (error) {
                console.error("Error in post request", error);
            }
        };
        return {
            orderPaperDetails,
            submitPrayer,
            Prayers,

        }
    }
};
</script>
