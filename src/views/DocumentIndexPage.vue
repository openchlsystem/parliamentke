<template>
  <div class="index-page">
    <h1>Documents Index Page</h1>
    <div class="content-body">
      <div class="side-panel">
        <div class="accordion">
          <div
            v-for="(item, index) in documentindexPart"
            :key="index"
            class="accordion-item"
          >
            <div @click="toggleItem(item)" class="accordion-header">
              {{ item.content }}
              <span
                :class="{ 'arrow-down': item.open, 'arrow-right': !item.open }"
              ></span>
            </div>
            <div v-show="item.open" class="accordion-content">
              <div
                v-for="(item, index) in documentindexHeader"
                :key="index"
                class="accordion-item"
              >
                <div @click="toggleItem(item)" class="accordion-header">
                  {{ item.content }}
                  <span
                    :class="{
                      'arrow-down': item.open,
                      'arrow-right': !item.open,
                    }"
                  ></span>
                </div>
                <div v-show="item.open" class="accordion-content">
                  <div v-show="item.open" class="accordion-content">
                    <div
                      v-for="(item, index) in documentindexParagraph"
                      :key="index"
                      class="accordion-item"
                    >
                      <div @click="toggleItem(item)" class="accordion-header">
                        {{ item.content }}
                        <span
                          :class="{
                            'arrow-down': item.open,
                            'arrow-right': !item.open,
                          }"
                        ></span>
                      </div>
                      <div v-show="item.open" class="accordion-content">
                        <p>Content goes here</p>
                        {{ item.content }}
                        {{ documentindexHeader.content }}
                        <p>{{ selecteddocumentindex }}</p>
                      </div>
                    </div>
                    <p>{{ selecteddocumentindex }}</p>
                  </div>
                </div>
              </div>
              <p>{{ selecteddocumentindex }}</p>
            </div>
          </div>
        </div>
        <!-- ... your other document index lists -->
      </div>

      <div class="content-area">
        <h2>{{ listhierarchy }}</h2>
        <h3>{{ listparent }}</h3>
        <p>{{ selecteddocumentindex }}</p>
        <ul>
          <li v-for="document in documentindexParagraph" :key="document.id">
            <p>{{ document.content }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed } from "vue";
import axios from "@/utils/axios";
import { useStore } from 'vuex' // Import useStore from vuex

export default {
  setup() {
    // const documentindex = ref([]);
    const documentindex = computed(() => store.state.documentindex)
    const listparent = ref("");
    const listhierarchy = ref("Document");
    const selecteddocumentindex = ref(null);
    const documentindexPart = ref([]);
    const documentindexHeader = ref([]);
    const documentindexParagraph = ref([]);
    const store = useStore() // Access the Vuex store

    const selectContent = (document) => {
      listhierarchy.value = document.heirarchy;
      listparent.value = document.text_id;
    };

    const getDocuments = async () => {
      try {
        const response = await axios.get("/DocumentIndex/", {
          params: {
            parent: selecteddocumentindex.value,
            heirarchy: "Document",
          },
        });
        const documentindexData = response.data;
        store.commit('setDocumentIndex', documentindexData);
      } catch (error) {
        console.error("Failed to fetch documents: ", error);
      }
    };

    // const getPart = async () => {
    //   try {
    //     const response = await axios.get("/DocumentIndex/", {
    //       params: {
    //         parent: selecteddocumentindex.value,
    //         heirarchy: "Part",
    //       },
    //     });
    //     documentindexPart.value = response.data;
    //   } catch (error) {
    //     console.error("Failed to fetch documents: ", error);
    //   }
    // };

    // const getHeader = async () => {
    //   try {
    //     const response = await axios.get("/DocumentIndex/", {
    //       params: {
    //         parent: selecteddocumentindex.value,
    //         heirarchy: "Header",
    //       },
    //     });
    //     documentindexHeader.value = response.data;
    //   } catch (error) {
    //     console.error("Failed to fetch documents: ", error);
    //   }
    // };

    // const getParagraph = async () => {
    //   try {
    //     const response = await axios.get("/DocumentIndex/", {
    //       params: {
    //         parent: selecteddocumentindex.value,
    //         heirarchy: "Paragraph",
    //       },
    //     });
    //     documentindexParagraph.value = response.data;
    //   } catch (error) {
    //     console.error("Failed to fetch documents: ", error);
    //   }
    // };

    const toggleItem = (item) => {
      item.open = !item.open;
      if (item.open) {
        selecteddocumentindex.value = item.text_id;
        console.log("new value", selecteddocumentindex.value);
      }
    };

    // watch(
    //   [selecteddocumentindex, listhierarchy],
    //   (
    //     [selectedDocIndex, listHierarchy],
    //     [oldSelectedDocIndex]
    //   ) => {
    //     console.log("selecteddocumentindex:", selectedDocIndex);
    //     console.log("listhierarchy:", listHierarchy);

    //     if (selectedDocIndex !== oldSelectedDocIndex) {
    //       if (listHierarchy.value === "Document") {
    //         getDocuments();
    //       } else if (listHierarchy.value === "Part") {
    //         getPart();
    //       } else if (listHierarchy.value === "Header") {
    //         getHeader();
    //       } else if (listHierarchy.value === "Paragraph") {
    //         getParagraph();
    //       }
    //     }
    //   }
    // );

    

    onMounted(() => {
      getDocuments();
      // getPart();
      // getHeader();
      // getParagraph();
    });

    return {
      documentindex,
      getDocuments,
      listparent,
      listhierarchy,
      selectContent,
      selecteddocumentindex,
      documentindexPart,
      documentindexHeader,
      documentindexParagraph,
      toggleItem,
    };
  },
};
</script>

<style>
/* Your styles remain the same */
</style>
