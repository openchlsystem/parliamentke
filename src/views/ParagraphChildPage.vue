<template>
  <div>
    <h1>Part Child {{ mytextid }}</h1>
    <!-- <p>{{ partList }}</p> -->
    <!-- {{ documentlist }} -->
    <div class="heierarchy">
      <ul>
        <li v-for="item in partList" :key="item.text_id">
          {{ item.content }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";

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

 

  setup(props) {
    // const partList = ref([]);
    // const store = useStore;

    const partList = computed(() =>
      props.documentlist?.filter(
        (item) => item.heirarchy === "Paragraph" && item.parent === props.text_id
      ) ?? []
    );

    const toggleItem = (item) => {
      item.open = !item.open;
    };

    return {
      mytextid: computed(() => props.text_id),
        partList,
      toggleItem
    };
  },
};
</script>
