<template>
  <div class="search">
    <img src="../assets/logo.png" alt="" />
    <input
      type="text"
      v-model="searchTerm"
      @input="handleSearch"
      placeholder="Search..."
      class="search-home"
    />
    <button class="microphone" @click="handleVoiceSearch">
      <i class="bi bi-mic"></i>
    </button>
    <div class="search-buttons">
      <button>Documents</button>
      <button>Bill</button>
      <button>Petion</button>
      <button>Motion</button>
      <button>Events</button>
      <button @click="this.$router.push('documentsearch')">
        Advanced Search
      </button>
    </div>
    <ul v-if="showResults" class="search-results">
      <li
        v-for="(result, index) in searchResults"
        :key="index"
        class="search-result"
      >
        <button
          @click="
            this.$router.push({ name: 'documents', params: { id: result.id } })
          "
          class="file-button"
        >
          <i class="bi bi-file-earmark-pdf"></i>
        </button>
        <div
          class="result-details"
          @click="
            this.$router.push({ name: 'documents', params: { id: result.id } })
          "
        >
          <h3 class="result-title">{{ result.title }}</h3>
          <p class="result-description">{{ result.description }}</p>
          <div class="result-meta">
            <span class="result-size">{{ result.size }}</span>
            <span class="result-type">{{ result.type }}</span>
            <span class="result-date">{{ result.date }}</span>
            <span class="result-name">{{ result.name }}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, reactive, computed, onMounted } from "vue";
import axios from "@/utils/axios";

export default {
  name: "SearchView",
  setup() {
    const searchTerm = ref("");
    const searchResults = reactive([]);
    // const staticData = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

    const files = ref([]);

    const getFiles = async () => {
      const response = await axios.get("/files/");
      files.value = response.data;
      console.log("documents", response.data);
    };

    const handleSearch = () => {
      // Perform your search logic here
      // Update the searchResults array with the matching results
      // For example, you can fetch data from an API or filter an existing array

      // For demonstration purposes, let's just filter a static array
      searchResults.length = 0; // Clear the existing results
      // const filteredResults = files.value.filter((item) => item.toLowerCase().includes(searchTerm.value.toLowerCase()));
      const filteredResults = files.value.filter((item) => {
        const values = Object.values(item);
        for (const value of values) {
          if (
            value &&
            typeof value === "string" &&
            value.toLowerCase().includes(searchTerm.value.toLowerCase())
          ) {
            return true; // Return true if the search term is found in any field
          }
        }
        return false; // Return false if the search term is not found in any field
      });
      searchResults.push(...filteredResults);
    };

    const showResults = computed(() => {
      return searchResults.length > 0;
    });

    onMounted(() => {
      getFiles();
    });

    return {
      searchTerm,
      searchResults,
      handleSearch,
      showResults,
      getFiles,
      files,
    };
  },
};
</script>

<style scoped></style>
