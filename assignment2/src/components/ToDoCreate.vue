<template>
  <div>
    <form @submit.prevent="addItem()">
      
      <input type="text" v-model="inputItem">
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: "ToDoCreate",
    data() {
      return {
        inputItem: '',
      }
    },
    methods: {
      addItem() {
        this.$emit("addItem",this.inputItem),
        this.inputItem= '';
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>