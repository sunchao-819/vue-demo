<template>
  <el-input-number size="mini" v-model="rules.BuyNum" :min="rules.min" :max="rules.max"></el-input-number>
</template>

<script>
  export default {
    props: {
      rules: {
        type: Object,
        default: {
          BuyNum: 1,
          min: 1,
          max: 99
        }
      }
    }
  }
</script>

<style scoped>

</style>
