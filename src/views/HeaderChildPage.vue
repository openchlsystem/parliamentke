<template>
  <div>
    <!-- <h1>Part Child {{ mytextid }}</h1> -->
    <!-- <p>{{ partList }}</p> -->
    <!-- {{ documentlist }} -->
    <div class="hierarchy">
      <ul>
        <li
          v-for="item in partList"
          :key="item.text_id"
          
          @click="toggleItem(item)"
        >
          <h3>{{ item.content }}</h3>

          <div v-if="item.open">
            <p>
              <ParagraphChild
                :text_id="item.text_id"
                :documentlist="documentlist"
              />
            </p>
          </div>
          <div v-else>
            <span class="minus-icon">-</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import ParagraphChild from "./ParagraphChildPage.vue";
// import { useStore } from "vuex";
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
    ParagraphChild,
  },

  setup(props) {
    // const partList = ref([]);
    // const store = useStore;

    const partList = computed(
      () =>
        props.documentlist?.filter(
          (item) => item.heirarchy === "Header" && item.parent === props.text_id
        ) ?? []
    );

    const toggleItem = (item) => {
      item.open = !item.open;
    };

    return {
      mytextid: computed(() => props.text_id),
      partList,
      toggleItem,
    };
  },
};
</script>
