<template>
  <div>
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
  export default {
    computed:{
      ...mapGetters(['title'])
    },
  }
</script>

<style lang="scss" scoped>

</style>