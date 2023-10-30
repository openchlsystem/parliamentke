<template>
  <div>
    <h1>Part Child {{ mytextid }}</h1>
    <!-- <p>{{ partList }}</p> -->
    <!-- {{ documentlist }} -->
    <div class="heirarchy">
      <ul>
        <li v-for="item in partList" :key="item.text_id" @click="toggleItem(item)">
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
  </div>
</template>

<script>
import { computed } from "vue";
import HeaderChild from './HeaderChildPage.vue'
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
    HeaderChild
  },

  setup(props) {
    // const partList = ref([]);
    // const store = useStore;

    const partList = computed(() =>
      props.documentlist?.filter(
        (item) => item.heirarchy === "Part" && item.parent === props.text_id
      ) ?? []
    );

    const toggleItem = (item) => {
      item.open = !item.open;
    /**
     * Toggles the open state of an item.
     *
     * @param {Object} item - The item to toggle.
     */
    };

    return {
      mytextid: computed(() => props.text_id),
        partList,
      toggleItem
    };
  },
};
</script>
