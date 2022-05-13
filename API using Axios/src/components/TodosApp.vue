<template>
  <div class="main">
    <h1>Todos App</h1>

    <div class="container">
      <AddToDo></AddToDo>
      <ul>
        <li v-for="todo in myTodos" :key="todo.id">
          <p class="card-title">{{ todo.name}}</p>
          <button @click="deleteTodo(todo.id)" class="trash">🗑️</button>         
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
.main {
  width: 500px;
  margin: 0 auto;
}
h1 {
  text-align: center;
  color: #006aff;
}
.card-title {
  color: white;
  background-color: black;
  padding: 10px;
  width: 430px;
  border-radius: 5px;
  text-align: left;
  margin-right: 10px;
  text-transform: capitalize;
  display: inline-block;
  margin-bottom: 2px;
}
.trash {
  border: none;
  background-color: red;
  text-align: right;
  height: 35px;
  border-radius: 5px;
}
ul {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;

}
</style>