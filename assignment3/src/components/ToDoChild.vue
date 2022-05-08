<template>
  <div>
    <li v-for="(toDoList, index) in toDoLists" :key="index" @deleteItem="deleteItem">
        {{ index }}: {{ toDoList }}
        <button @click="deleteItem(index)">X</button>
      </li>
  </div>
</template>

<script>
import {  mapGetters,mapActions } from 'vuex'
  export default {
    computed:{
      ...mapGetters(['toDoLists']) // get toDoLists from store
    },
    methods:{
      ...mapActions(['deleteItem']) // delete Item Actions
    },
  }
</script>

<style lang="scss" scoped>

</style>