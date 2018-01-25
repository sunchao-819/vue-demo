<template>
  <el-radio-group v-model="radio" size="mini">
    <el-radio v-for="( item,index ) in radioData" :key="index" :label="item.label" border>{{ item.title }}</el-radio>
  </el-radio-group>
</template>

<script>

  export default {
    props: {
      radioData: {
        type: Array,
        default: [
          {
            label: 1,
            title: '一年'
          }
        ]
      }
    },
    data() {
      return {
        radio:''
      }
    }
  }
</script>

<style scoped>

</style>
