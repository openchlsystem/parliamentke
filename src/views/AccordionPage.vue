<template>
  <h1>Accordion</h1>
</template>
<script>
import { ref } from "vue";

export default {
  name: "AccordionPage",
  setup() {
    const items = ref([
      {
        title: "Item 1",
        content: "Content for item 1",
        open: false,
      },
      {
        title: "Item 2",
        content: "Content for item 2",
        open: false,
      },
      {
        title: "Item 3",
        content: "Content for item 3",
        open: false,
      },
      {
        title: "Item 4",
        content: "Content for item 4",
        open: false,
      },
    ]);
    return {
      items,
    };
  },
};
</script>
