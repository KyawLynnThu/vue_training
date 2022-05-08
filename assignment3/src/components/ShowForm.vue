<template>
  <div>
    <button @click="showHide">
      <span v-if="formText===true">Hide Form</span>
      <span v-if="formText===false">Show Form</span>
    </button>
  </div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex';
  export default {
    computed:{
      ...mapGetters(['formText']) // get formText Value from store
    },
    methods:{
      ...mapActions(['showHide']) // show or Hide form action from store
    },
  }
</script>

<style lang="scss" scoped>

</style>