<template>
  <div>
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
  export default {
    computed:{
      ...mapGetters(['title']) //get title from store
    },
  }
</script>

<style lang="scss" scoped>

</style>