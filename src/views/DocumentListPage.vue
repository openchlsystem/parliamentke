<template>
  <div class="document-search">
    <!-- Your template content goes here -->
    <h1>Document Filter</h1>

    <div class="header-buttons">
      <select name="documentname" id="" v-model="selectedDocument">
        <option
          :value="document.text_id"
          v-for="document in documents"
          :key="document.id"
        >
          {{ document.document }}
        </option>
      </select>

      {{ selectedDocument }}
      <input type="text" placeholder="Search..." />
    </div>
    <!-- search input  -->

    <div class="child-items">
      <PartChild :text_id="selectedDocument" :documentlist="documentlist" />
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
    const selectedDocument = ref(null);

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
    };
  },
};
</script>
