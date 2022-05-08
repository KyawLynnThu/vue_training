export default {
  state: {
    title: "ToDo App",
    formText: false,
    toDoLists:[],
  },
  getters: {
    title(state) {
      return state.title; // return title value from state
    },
    toDoLists(state) {
      return state.toDoLists; // return toDolists value from state
    },
    formText(state) {
      return state.formText; // return formText value from state
    },
  },
  mutations: {
    ADD_ITEM(state, inputItem) {
      state.toDoLists.push(inputItem); // take input Value & add Value to toDoLists
    },
    DELETE_ITEM(state, index) {
      state.toDoLists.splice(index, 1); // delete one Item from toDoLists
    },
    showHide(state) {
      state.formText =! state.formText // check show or hide with data from state
    }
  },
  actions: {
    addItem({commit},inputItem) {
      commit('ADD_ITEM', inputItem); // add InputItem value to toDoLists
    },
    deleteItem({commit},index) {
      commit('DELETE_ITEM', index); // delete one Item from toDoLists
    },
    showHide({ commit }) {
      commit('showHide'); // show or hide form
    }
  }
};