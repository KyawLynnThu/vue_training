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
      ...mapGetters(['formText'])
    },
    methods:{
      ...mapActions(['showHide'])
    },
  }
</script>

<style lang="scss" scoped>

</style>