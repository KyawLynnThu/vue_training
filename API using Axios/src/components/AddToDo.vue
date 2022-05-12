<template>
  <div>
    <form @submit.prevent="addTodo(newTodo)">
      <input type="text" v-model="newTodo.title">
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      newTodo: {
        title: ""
      }
    }
  },
  methods: mapActions(['addTodo'])
};
</script>

<style lang="scss" scoped>

</style>