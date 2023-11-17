<template>
  <div class="document-search">
    <!-- Your template content goes here -->
    <h2>Advanced Text Search</h2>

    <div class="header-buttons">
      <select name="documentname" id="" v-model="selectedDocument">
        <option value="" disabled selected>Select Document</option>
        <option :value="document" v-for="document in documents" :key="document.id">
          {{ document.document }}
        </option>
      </select>

      <input type="text" placeholder="Search..." />
    </div>
    {{ selectedDocument.document ?? "Select Document" }}

    <!-- search input  -->

    <!-- {{ documentlist }} -->

    <div class="child-items">
      <PartChild :text_id="selectedDocument.text_id" :documentlist="documentlist" :selectedDocument="selectedDocument.document" />
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
import axios from "@/utils/axios";
import PartChild from "./PartChildPage.vue";

// Your script code goes here
export default {
  name: "DocumentListPage",

  components: {
    PartChild,
  },
  setup() {
    const store = useStore();
    const documentData = ref(null);
    const documents = ref([]);
    const selectedDocument = ref([]);
    // const selecttedDocumentType = JSON.parse(selectedDocument.value);
    // const selecttedDocumentType = JSON.parse(selectedDocument.value || '{}');


    const commitDocumentIndex = async () => {
      const response = await axios.get("/DocumentIndex/");
      documentData.value = response.data;
      console.log("documents", response);
      store.commit("setDocumentIndex", documentData.value);
    };

    const documentlist = computed(() => {
      return store.state.documentindex;
    });

    const getUniqueByDocument = () => {
      if (documentlist.value.length > 0) {
        const uniqueDocuments = new Set();
        const uniqueDocumentsArray = [];

        documentlist.value.forEach((document) => {
          const uniqueKey = `${document.document}`;
          if (!uniqueDocuments.has(uniqueKey)) {
            uniqueDocuments.add(uniqueKey);
            uniqueDocumentsArray.push(document);
          }
        });

        uniqueDocumentsArray.forEach((uniqueDocument) => {
          console.log("unique document", uniqueDocument);
          documents.value.push(uniqueDocument);
        });
      } else {
        console.log("no documents");
      }
    };

    onMounted(() => {
      commitDocumentIndex().then(() => {
        getUniqueByDocument();
      });
    });
    return {
      documentlist,
      getUniqueByDocument,
      documents,
      selectedDocument,
      documentData,
      commitDocumentIndex,
      // selecttedDocumentType,
    };
  },
};
</script>
