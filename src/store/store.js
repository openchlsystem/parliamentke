import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      documentindex: null,
      documentindexpart: null,
      documentindexheader: null,
      documentindexparagraph: null,
      // Your state properties go here
    };
  },
  mutations: {
    // Your mutations go here
    setDocumentIndex(state, documentindex) {
      state.documentindex = documentindex;
    },

    setDocumentIndexPart(state, documentindexpart) {
      state.documentindexpart = documentindexpart;
    },

    setDocumentIndexHeader(state, documentindexheader) {
      state.documentindexheader = documentindexheader;
    },
    setDocumentIndexParagraph(state, documentindexparagraph) {
      state.documentindexparagraph = documentindexparagraph;
    },
  },
  actions: {
    // Your actions go here
  },
  getters: {
    // Your getters go here
  },
});

export default store;
