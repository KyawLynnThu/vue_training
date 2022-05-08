<template>
  <div>
    <p>ToDo Count: {{ toDoLists.length }}</p>

    <form @submit.prevent="addItem(inputItem)">
      <input type="text" v-model="inputItem">
      <button type="submit">Submit</button>
    </form>
    <p class="current">Current:</p>
  </div>
</template>

<script>
import {  mapGetters } from 'vuex'
  export default {
    name: "ToDoCreate",
    data() {
      return {
        inputItem: '',
      }
    },
    methods: {
      addItem(inputItem) {
        this.$store.dispatch("addItem",inputItem),
        this.inputItem= '';
      }
      //add data to toDoLists from store & clear input Value
    },
     computed:{
      ...mapGetters(['toDoLists']) // get toDoLists from store
    },
  }
</script>

<style>

</style>