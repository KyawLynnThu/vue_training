<template>
  <div>
      <li>
        {{ index }}: {{ toDoList }}
        <button @click="deleteItem(index)">X</button>
      </li>
  </div>
</template>

<script>
import {  mapActions } from 'vuex'
  export default {
    props: [ "toDoList" , "index" ],
    //computed:{
    //  ...mapGetters(['toDoLists']) // get toDoLists from store
    //},
    methods:{
      ...mapActions(['deleteItem']) // delete Item Actions
    },
  }
</script>

<style lang="scss" scoped>

</style>