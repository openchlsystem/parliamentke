<template>
  <div>
    <h2>Order Paper</h2>
  </div>
  <div class="button-headers">
    <ModalPopup buttonLabel="Add House Business" modalHeader="Add House Business">
      <div class="add-bill">
        <form @submit.prevent="submitForm">
          <label for="order-paper-number">Order Paper Number</label>
          <input v-model="orderPaper.OrderPaperNumber" id="order-paper-number" type="text" />

          <label for="parliament">Parliament</label>
          <input v-model="orderPaper.Parliament" id="parliament" type="text" />

          <label for="order-paper-date">Order Paper Date</label>
          <input v-model="orderPaper.OrderPaperDate" id="order-paper-date" type="date" />

          <label for="description">Order Paper Description</label>
          <textarea v-model="orderPaper.OrderPaperDescription" id="description"></textarea>

          <label for="order-paper-file">Order Paper File</label>
          <input ref="fileInput" id="order-paper-file" type="file" @change="handleFileChange" />

          <button type="submit">Submit</button>
        </form>
      </div>
    </ModalPopup>
  </div>

  <div class="house">
    <ul>
      <li v-for="item in orderpapers" :key="item.id">
        <p><span>Name </span> {{ item.OrderPaperNumber }}</p>
        <p><span>Parliament</span> {{ item.Parliament }}</p>
        <p><span>Order Paper Date</span> {{ item.OrderPaperDate }}</p>
        <p>
          <span>Order Paper Description</span>: {{ item.OrderPaperDescription }}
        </p>
        <p>
          <span>Order Paper File</span>
          <a href="{{ item.OrderPaperFile }}">download file</a>
        </p>

        <div class="header-buttons">
          <ModalPopup buttonLabel="Add Prayer" :buttonClass="customButtonClass" :iconClass="customIconClass"
            @click="updateOrderPaperID(item.id)" :orderpaperID="item.id">

            <AddPrayer />

          </ModalPopup>
          <ModalPopup :buttonClass="customButtonClass" :iconClass="customIconClassDocument" buttonLabel="View Details"
            @click="viewOrderPaperDetails(item)">
            <H2>Details </H2>

           

            <ul>
              <li v-for="item in orderPaperChildDetails" :key="item.id">
                <p><span>Date</span> {{ item.date }}</p>
                <p><span>Prayer</span> {{ item.prayer }}</p>
                <p><span>Description</span> {{ item.description }}</p>
                <p><span>Status</span> {{ item.status }}</p>
              </li>
            </ul>
          </ModalPopup>
          <button @click="viewOrderPaperDetails(item)">View Details</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted, reactive } from "vue";
import axios from "@/utils/axios";
import ModalPopup from "@/components/ModalComponent.vue";
import { Prayers } from "@/utils/Prayers";
import AddPrayer from "@/views/AddPrayer.vue";
import { useRouter } from "vue-router";

export default {
  name: "OrderPaper",

  components: {
    ModalPopup,
    AddPrayer,
  },

  data() {
    return {
      buttonLabel: "Upload Documents",
      customButtonClass: "update-button",
      customIconClass: "bi bi-pencil",
      customIconClassBill: "bi bi-plus ",
      customIconClassDocument: "bi bi-file-pdf ",
    };
  },
  setup() {
    const fileInput = ref(null);
    const orderPaper = ref({
      OrderPaperNumber: "",
      Parliament: "",
      OrderPaperDate: null,
      OrderPaperDescription: "",
      OrderPaperFile: null,
    });

    const orderPaperDetails = reactive({
      date: null,
      prayer: "",
      description: "",
      file: null,
      status: "",
      OrderPaper: null,
    });

    const orderPaperChildDetails = ref(null);

    const router = useRouter();

    const viewOrderPaperDetails = async (item) => {
      router.push(`/orderPaperDetails/${item.id}`);
    };

    const orderPaperID = ref(null);

    const updateOrderPaperID = (id) => {
      orderPaperID.value = id;
    };

    const orderpapers = ref([]);

    const handleFileChange = () => {
      const file = fileInput.value.files[0];
      orderPaper.value.OrderPaperFile = file;
    };

    const submitForm = async () => {
      try {
        const formData = new FormData();
        formData.append("OrderPaperNumber", orderPaper.value.OrderPaperNumber);
        formData.append("Parliament", orderPaper.value.Parliament);
        formData.append("OrderPaperDate", orderPaper.value.OrderPaperDate);
        formData.append(
          "OrderPaperDescription",
          orderPaper.value.OrderPaperDescription
        );
        formData.append("OrderPaperFile", orderPaper.value.OrderPaperFile);

        const response = await axios.post("/OrderPaper/", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        // Do something with the response (e.g., show success message)
        console.log(response.data);

        // Clear the form after successful submission
        orderPaper.value.OrderPaperNumber = "";
        orderPaper.value.Parliament = "";
        orderPaper.value.OrderPaperDate = null;
        orderPaper.value.OrderPaperDescription = "";
        orderPaper.value.OrderPaperFile = null;
        getOrderPapers();
      } catch (error) {
        // Handle error (e.g., show error message)
        console.error(error);
      }
    };

    const submitPrayer = async () => {
      const formData = new FormData();
      formData.append("date", orderPaperDetails.date);
      formData.append("prayer", orderPaperDetails.prayer);
      formData.append("description", orderPaperDetails.description);
      formData.append("file", orderPaperDetails.file);
      formData.append("status", orderPaperDetails.status);
      formData.append("OrderPaper", orderPaperID.value);

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

    const onFileChangePrayer = (event) => {
      const file = event.target.files[0];
      orderPaperDetails.file = file;
    };

    const getOrderPapers = async () => {
      try {
        const response = await axios.get("/OrderPaper/");
        orderpapers.value = response.data;
      } catch (error) {
        console.error(error);
      }
    };

    onMounted(() => {
      getOrderPapers();
    });

    return {
      fileInput,
      orderPaper,
      handleFileChange,
      submitForm,
      orderpapers,
      orderPaperDetails,
      Prayers,
      onFileChangePrayer,
      submitPrayer,
      updateOrderPaperID,
      orderPaperID,
      viewOrderPaperDetails,
      orderPaperChildDetails,
    };
  },
};
</script>
