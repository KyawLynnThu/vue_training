export default {
  state: {
    title: "ToDo App",
    formText: false,
    toDoLists:[],
  },
  getters: {
    title(state) {
      return state.title;
    },
    toDoLists(state) {
      return state.toDoLists;
    },
    formText(state) {
      return state.formText;
    },
  },
  mutations: {
    ADD_ITEM(state, inputItem) {
      state.toDoLists.push(inputItem);
    },
    DELETE_ITEM(state, index) {
      state.toDoLists.splice(index, 1);
    },
    showHide(state) {
      state.formText =! state.formText
    }
  },
  actions: {
    addItem({commit},inputItem) {
      commit('ADD_ITEM', inputItem);
    },
    deleteItem({commit},index) {
      commit('DELETE_ITEM', index);
    },
    showHide({ commit }) {
      commit('showHide');
    }
  }
};