<template>
  <div class="index-page">
    <h1>Documents Index Page</h1>
    <div class="content-body">
      <div class="side-panel">
        <div class="accordion">
          <div v-for="(item, index) in listhierarchyItems" :key="index" class="accordion-item">
            <div @click="toggleItem(item)" class="accordion-header">
              {{ item.content }} - <h2>{{item.text_id}} - {{ item.heirarchy }} - {{ item.parent }}</h2>
              <span :class="{ 'arrow-down': item.open, 'arrow-right': !item.open }"></span>
            </div>
            <div v-show="item.open" class="accordion-content">
              <ul>
                <li v-for="childItem in getChildItems(item.text_id, item.hierarchy)" :key="childItem.text_id">
                  <p>{{ childItem.content }}</p>
                </li>
              </ul>
              <div v-for="(item, index) in listhierarchyItems" :key="index" class="accordion-item">
            <div @click="toggleItem(item)" class="accordion-header">
              {{ item.content }} - <h2>{{item.text_id}} - {{ item.heirarchy }} - {{ item.parent }}</h2>
              <span :class="{ 'arrow-down': item.open, 'arrow-right': !item.open }"></span>
            </div>
            <div v-show="item.open" class="accordion-content">
              <ul>
                <li v-for="childItem in getChildItems(item.text_id, item.hierarchy)" :key="childItem.text_id">
                  <p>{{ childItem.content }}</p>
                </li>
              </ul>
            </div>
          </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { ref, onMounted, watch, computed } from "vue";
import { useStore } from "vuex";
import axios from "@/utils/axios";

export default {
  setup() {
    const store = useStore();
    const listhierarchy = ref("Document");
    const selecteddocumentindex = ref(null);

    const listhierarchyItems = computed(() => {
      if (listhierarchy.value === "Document") {
        return store.state.documentindex;
      } else if (listhierarchy.value === "Part") {
        return store.state.documentindexpart;
      } else if (listhierarchy.value === "Header") {
        return store.state.documentindexheader;
      } else if (listhierarchy.value === "Paragraph") {
        return store.state.documentindexparagraph;
      } else {
        return [];
      }
    });

    const toggleItem = (item) => {
      item.open = !item.open;
    };

    const getChildItems = (text_id, hierarchy) => {
      if (hierarchy === "Document") {
        return store.state.documentindexpart.filter((item) => item.parent === text_id);
      } else if (hierarchy === "Part") {
        return store.state.documentindexheader.filter((item) => item.parent === text_id);
      } else if (hierarchy === "Header") {
        return store.state.documentindexparagraph.filter((item) => item.parent === text_id);
      } else {
        return [];
      }
    };

    onMounted(() => {
      // Fetch data from the server and commit it to the store
      fetchChildItemsFromServer(listhierarchy.value, selecteddocumentindex.value)
        .then((documentindexData) => {
          store.commit("setDocumentIndex", documentindexData);
        })
        .catch((error) => {
          console.error("Failed to fetch documents: ", error);
        });
    });

    watch(
      [listhierarchy, selecteddocumentindex],
      (
        [newHierarchy, newSelectedDocIndex],
        [oldHierarchy, oldSelectedDocIndex]
      ) => {
        if (
          newHierarchy !== oldHierarchy ||
          newSelectedDocIndex !== oldSelectedDocIndex
        ) {
          toggleItemState();
        }
      }
    );

    const fetchChildItemsFromServer = async (hierarchy, parent) => {
      try {
        const response = await axios.get("/DocumentIndex/", {
          params: {
            parent,
            hierarchy,
          },
        });
        return response.data;
      } catch (error) {
        console.error("Failed to fetch child items: ", error);
        return [];
      }
    };

    const toggleItemState = () => {
      listhierarchyItems.value.forEach((item) => {
        item.open = false; // Close all items
      });
      if (selecteddocumentindex.value) {
        const selectedItem = listhierarchyItems.value.find(
          (item) => item.text_id === selecteddocumentindex.value
        );
        if (selectedItem) {
          selectedItem.open = true; // Open the selected item
        }
      }
    };

    return {
      listhierarchy,
      listhierarchyItems,
      toggleItem,
      getChildItems,
    };
  },
};
</script>

<style>
/* Your styles remain the same */
</style>
