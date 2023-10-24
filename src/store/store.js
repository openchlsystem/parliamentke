import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      documentindex: null,
      // Your state properties go here
    };
  },
  mutations: {
    // Your mutations go here
    setDocumentIndex(state, documentindex) {
      state.documentindex = documentindex;
    }
  },
  actions: {
    // Your actions go here
  },
  getters: {
    // Your getters go here
  },
});

export default store;
