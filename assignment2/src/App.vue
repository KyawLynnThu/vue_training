<template>
  <div class="todo">
    <ToDoTitle title="ToDo App"></ToDoTitle>
    
    <ShowForm @showHide="showHide" :formText="formText"></ShowForm>

    <p v-if="!formText">ToDo Count: {{ todos.length }}</p>
    <ToDoCreate @addItem="addItem" v-if="!formText"></ToDoCreate>

    <p>Current:</p>
    <ul>
      <ToDoList v-for="(todo, index) in todos" :key="index" :todo="todo" :index="index" @deleteItem="deleteItem"></ToDoList>
    </ul>
  </div>
</template>

<script>
import ToDoTitle from './components/ToDoTitle';
import ToDoList from './components/ToDoList';
import ToDoCreate from './components/ToDoCreate';
import ShowForm from './components/ShowForm';

  export default {
  components: { ToDoTitle, ToDoList, ToDoCreate, ShowForm},
    name: "App",
    data() {
      return {
        todos: [],
        formText: false,
      }
    },
      methods: {
        addItem(x) {
          this.todos.push(x);
        },
        deleteItem(index) {
          this.todos.splice(index, 1);
        },
        showHide() {
          this.formText = !this.formText;
        }
      }

  }
</script>

<style scoped>
  .todo {
    margin: 0 auto;
    width: 300px;
  }
</style>