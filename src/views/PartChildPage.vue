<template>
  <div>
    <h1>Part Child {{ mytextid }}</h1>
    <div class="heirarchy">
      <ul>
        <li v-for="item in filteredPartList" :key="item.text_id" @click="toggleItem(item)">
          {{ item.content }}

          <div v-if="item.open">
            <HeaderChild :text_id="item.text_id" :documentlist="documentlist" />
          </div>
          <div v-else>
            <span class="minus-icon">-</span>
          </div>
        </li>
      </ul>
    </div>
    {{  }}
  </div>
</template>

<script>
import { computed, ref, watch } from "vue";
import HeaderChild from './HeaderChildPage.vue';

export default {
  props: {
    text_id: {
      type: String,
      required: true,
    },
    documentlist: {
      type: Array,
      required: true,
    },
  },

  components: {
    HeaderChild
  },

  setup(props) {
    const documentlist = ref(props.documentlist);
    const filteredPartList = computed(() => {
      const textId = props.text_id;
      if (documentlist.value && textId) {
        return documentlist.value.filter(item => item.heirarchy === "Part" && item.parent === textId);
      }
      return [];
    });

    const toggleItem = (item) => {
      item.open = !item.open;
    };

    const mytextid = computed(() => props.text_id);

    watch([mytextid, documentlist], ([textId, docList]) => {
      if (textId && docList) {
        filteredPartList.value = docList.filter(item => item.heirarchy === "Part" && item.parent === textId);
        console.log("filteredPartList", filteredPartList.value);
        console.log("textId", textId);
        console.log("docList", docList);
      } else {
        filteredPartList.value = [];
        console.log("filteredPartList", filteredPartList.value);
        console.log("textId", textId);
        console.log("docList", docList);
      }
    });

    return {
      mytextid,
      // documentlist,
      filteredPartList,
      toggleItem
    };
  },
};
</script>
