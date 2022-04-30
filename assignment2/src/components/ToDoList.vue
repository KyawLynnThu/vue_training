<template>
  <div>
    <li>
        {{ index }}: {{ todo }}
        <button @click="deleteItem(index)">X</button>
    </li>
  </div>
</template>

<script>
  export default {
    name: "ToDoList",
    props: [ "todo" , "index" ],
    methods: {
      deleteItem(index) {
        this.$emit("deleteItem", index)
      }
    },
  }

</script>

<style scoped>

</style>