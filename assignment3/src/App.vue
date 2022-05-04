<template>
  <div id="app" class="todo">
    <ToDoTitle></ToDoTitle>
    <ShowForm></ShowForm>
    <ToDoCreate v-if="!formText"></ToDoCreate>
    <ToDoList></ToDoList>
  </div>
</template>

<script>
import ToDoTitle from './components/ToDoTitle'
import ShowForm from './components/ShowForm'
import ToDoCreate from './components/ToDoCreate'
import ToDoList from './components/ToDoList'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    ToDoTitle, ToDoCreate, ToDoList, ShowForm
  },
  computed:{
    ...mapGetters(['toDoLists','formText'])
  },
}
</script>

<style>
  .todo {
    margin: 0 auto;
    width: 300px;
  }
</style>
