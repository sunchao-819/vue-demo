<template>
  <el-select v-model="options.label" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>

<script>
  export default {
    props: {
      options: {
        type: Array,
        default: [
          {
            value: 0,
            label: 'test'
          }
        ]
      }
    },
    data() {
      return {

      }
    }
  }
</script>

<style scoped>

</style>
