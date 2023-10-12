<template>
    <div class="search">
        <input type="text" v-model="searchTerm" @input="handleSearch" placeholder="Search...">
        <button class="microphone" @click="handleVoiceSearch">
            <i class="bi bi-mic"></i>
        </button>
        <ul v-if="showResults">
            <li v-for="(result, index) in searchResults" :key="index">{{ result }}</li>
        </ul>
    </div>
</template>

<script>
import { ref, reactive, computed } from 'vue';

export default {
    name: 'SearchView',
    setup() {
        const searchTerm = ref('');
        const searchResults = reactive([]);
        const staticData = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

        const handleSearch = () => {
            // Perform your search logic here
            // Update the searchResults array with the matching results
            // For example, you can fetch data from an API or filter an existing array

            // For demonstration purposes, let's just filter a static array
            searchResults.length = 0; // Clear the existing results
            const filteredResults = staticData.filter((item) => item.toLowerCase().includes(searchTerm.value.toLowerCase()));
            searchResults.push(...filteredResults);
        };

        const showResults = computed(() => {
            return searchResults.length > 0;
        });

        return {
            searchTerm,
            searchResults,
            handleSearch,
            showResults,
        };
    },
};
</script>

<style scoped></style>