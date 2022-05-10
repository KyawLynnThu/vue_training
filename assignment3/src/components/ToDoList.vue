<template>
  <div>
    <ul>
      <ToDoChild v-for="(toDoList, index) in toDoLists" :key="index" :toDoList="toDoList" :index="index"></ToDoChild>
    </ul>
  </div>
</template>

<script>
import ToDoChild from './ToDoChild'
import {  mapGetters } from 'vuex'
export default {
    components: { ToDoChild },
    computed:{
      ...mapGetters(['toDoLists']) // get toDoLists from store
    },
  }
</script>

<style>

</style>