<template>
  <div class="activities">
    <div class="activities-contentpanel">
      <div>
        <div>
          <nav>
            <ModalPopup buttonLabel="Add Document">
              <BillsForm />
            </ModalPopup>
          </nav>
        </div>
        <!-- <h3>{{this.props.showDiv}}</h3> -->

        <div class="document-list">
          <ul>
            <li
              v-for="document in documents"
              :key="document.id"
              class="document-item"
            >
              <p>{{ document.id }}</p>
              <p>{{ document.title }}</p>
              <p>{{ document.description }}</p>
              <p>{{ document.stage }}</p>
              <p>{{ document.type }}</p>
              <p>{{ document.status }}</p>
              <h3>{{ document.name }}<i class="bi bi-file-pdf"></i></h3>
              <!-- <p>{{ document.file }}</p> -->
              <p>{{ document.size }}</p>
              <a :href="document.file" target="_blank" class="document-link"
                ><i class="bi bi-cloud-download"></i> {{ document.name }}</a
              >
            </li>
          </ul>
        </div>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Stage</th>
              <th>Type</th>
              <th>Name</th>
              <th>Size</th>
              <th>Status</th>
              <th>View Details</th>
              <th>Preview</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="document in documents" :key="document.id">
              <td>{{ document.id }}</td>
              <td>{{ document.title }}</td>
              <td>{{ document.description }}</td>
              <td>{{ document.stage }}</td>
              <td>{{ document.type }}</td>
              <td>{{ document.name }}</td>
              <td>{{ document.size }}</td>
              <!-- <td><a :href="document.file" target="_blank" class="document-link"><i
                                        class="bi bi-cloud-download"></i> {{ document.name }}</a></td> -->
              <td>{{ document.status }}</td>
              <td>
                <a
                  href="#"
                  @click="
                    this.$router.push({
                      name: 'documents',
                      params: { id: document.id },
                    })
                  "
                  >View Details</a
                >
              </td>
              <td>
                <ModalPopup
                  :buttonLabel="` Preview:   ${document.name}`"
                  :buttonClass="customButtonClass"
                >
                  <PDFviewer :pdfUrl="document.file" />
                </ModalPopup>
              </td>

              <td>
                <ModalPopup
                  :buttonLabel="`Add Activity for: ${document.document}`"
                  :buttonClass="customButtonClass"
                  :iconClass="customIconClass"
                >
                  <FileActivities
                    :fileid="document.id"
                    :title="document.title"
                    :description="document.description"
                  />
                </ModalPopup>
              </td>

              <!-- <td>
                                <ModalPopup :buttonLabel="`Update:   ${document.name}`" :buttonClass="customButtonClass"
                                    :iconClass="customIconClass">

                                    <PDFextractor />

                                </ModalPopup>
                            </td> -->
            </tr>
          </tbody>
        </table>

        <!-- Add any additional content for the 'Standing Orders' section -->
      </div>
    </div>
  </div>
</template>

<script>
import { PDFDocument, rgb } from "pdf-lib";
import ModalPopup from "../components/ModalComponent.vue";
import { ref, onMounted, watch } from "vue";
// import VuePdfApp from "vue3-pdf-app";
import { kenyanParliamentFunctions } from "../utils/ParliamentFunctions.js";
import axios from "@/utils/axios";
import BillsForm from "./BillsForm.vue";
import FileActivities from "./FileActivities.vue";
import PDFviewer from "../components/PDFviewer.vue";
// import PDFextractor from '../components/PDFtextextractor.vue';

// import this to use default icons for buttons
import "vue3-pdf-app/dist/icons/main.css";

import parliament from "../assets/parliament.pdf";

export default {
  components: {
    ModalPopup,
    // VuePdfApp,
    BillsForm,
    FileActivities,
    PDFviewer,
    // PDFextractor
  },

  props: {
    showDiv: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      customButtonClass: "your-custom-button-class",
      customIconClass: "bi bi-pencil", // Define the icon class dynamically
    };
  },
  setup(props) {
    // const showDiv = ref('Legislation');
    const buttonLabel = ref("Upload Documents");
    const fileInput = ref(null);
    const fileListing = ref([]);
    const documents = ref([]);

    // const path = require('../assets/');
    // const parliament = path.resolve(__dirname, '../','../assets/','parliament.pdf');

    const handleFileUpload = () => {
      const file = fileInput.value.files[0];
      console.log("Uploaded file:", file);

      const reader = new FileReader();
      reader.onload = (event) => {
        const fileContent = event.target.result;
        console.log("File content:", fileContent);
        fileListing.value.push(fileContent);
      };

      reader.readAsText(file);
    };

    const generatePDF = async () => {
      const pdfDoc = await PDFDocument.create();
      const page = pdfDoc.addPage();
      const { width, height } = page.getSize();
      // const { width, height } = page.getSize();

      const content = fileListing.value.join("\n");

      page.drawText(content, {
        x: width - 50,
        y: height - 50,
        size: 12,
        color: rgb(0, 0, 0),
      });

      const pdfBytes = await pdfDoc.save();

      const blob = new Blob([pdfBytes], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);

      // Do something with the PDF URL, such as opening it in a new tab or downloading it
      window.open(url);
    };

    const getDocuments = async () => {
      try {
        const response = await axios.get("/files/", {
          params: {
            function: props.showDiv,
          },
        });
        documents.value = response.data;
        console.log("documents", response);
      } catch (error) {
        console.error("Error fetching documents:", error);
        // Handle errors as needed
      }
    };

    // Watch for changes in the `showDiv` prop and call `getDocuments` when it changes
    watch(() => props.showDiv, getDocuments, { immediate: true });

    onMounted(() => {
      getDocuments();
    });

    return {
      // showDiv,
      buttonLabel,
      handleFileUpload,
      fileInput,
      fileListing,
      generatePDF,
      parliament,
      kenyanParliamentFunctions,
      documents,
      getDocuments,
    };
  },
};
</script>
