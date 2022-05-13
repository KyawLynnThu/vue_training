import axios from "axios"
const json_server = "http://localhost:3000/todos";

export default {
  state: {
    todos: []
  },
  getters: {
    myTodos(state) {
      return state.todos
    }
  },
  mutations: {
    setTodos(state, todos) {
      state.todos = todos;
    },
    setTodo(state, newTodo) {
      state.todos.push(newTodo);
    },
    removeTodo(state, removeId) {
      state.todos = state.todos.filter(todo => {
        return todo.id != removeId
      })
    }
  },
  actions: {
    async getTodos({ commit }) {
      let res = await axios.get(json_server);
      let todos = res.data;
      commit('setTodos', todos);
    },
    async addTodo( { commit} , newTodo ) {
      let res = await axios.post(json_server, newTodo);
      commit('setTodo', res.data);
    },
    async deleteTodo(context, removeId) {
      await axios.delete(`http://localhost:3000/todos/${removeId}`);
      context.commit('removeTodo', removeId)
    }
    
  },
}