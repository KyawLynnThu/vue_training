<template>
  <div>
    <form @submit.prevent="addTodo(newTodo)">
      <input type="text" v-model="newTodo.name" placeholder="Add To Do">
      <button type="submit" class="add">➕</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodo: {
        name: ""
      }
    }
  },
  methods: {
    addTodo(newTodo){
      this.$store.dispatch("addTodo",newTodo);
      this.newTodo.name='';
   } 
  }
};
</script>

<style>
input {
  width: 420px;
  height: 20px;
  padding: 8px 4px 8px 20px;
  margin-right: 10px;
  border-radius: 5px;
  margin-bottom: 20px;
  font-size: 18px;
}
.add {
  height: 32px;
  background-color: black;
  border: none;
  border-radius: 5px;
}
</style>