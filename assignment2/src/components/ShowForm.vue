<template>
  <div>
    <button @click="showHide">
      <span v-if="formText===true">Hide Form</span>
      <span v-if="formText===false">Show Form</span>
    </button>
  </div>
</template>

<script>
  export default {
    name: "ShowForm",
    props: [ "formText" ],
    methods: {
      showHide() {
        this.$emit("showHide");
      }
    },
  }
</script>

<style scoped>

</style>