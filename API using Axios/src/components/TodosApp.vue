<template>
  <div>
    <h1>All Todos</h1>

    <div class="container">
      <AddToDo></AddToDo>
      <ul>
        <li v-for="todo in myTodos" :key="todo.id">
          <p class="card-title">{{ todo.title}} <button @click="deleteTodo(todo.id)">X</button></p>
          
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import AddToDo from './AddToDo';
export default {
  components: {AddToDo},
  computed: {
    ...mapGetters(["myTodos"]),
  },
  methods:mapActions(['getTodos', 'deleteTodo']),
  mounted() {
    this.getTodos();
  }
}
</script>

<style>
h1 {
  text-align: center;
}
.container {
  width: 500px;
  margin: 0 auto;
}
.card-title {
  color: black;
  text-align: left;
}
</style>