<template>
  <div>
    <ul>
      <li v-for="(toDoList, index) in toDoLists" :key="index" @deleteItem="deleteItem">
        {{ index }}: {{ toDoList }}
        <button @click="deleteItem(index)">X</button>
      </li>
    </ul>
  </div>
</template>

<script>
import {  mapGetters,mapActions } from 'vuex'
  export default {
    computed:{
      ...mapGetters(['toDoLists'])
    },
    methods:{
      ...mapActions(['deleteItem'])
    },
  }
</script>

<style lang="scss" scoped>

</style>