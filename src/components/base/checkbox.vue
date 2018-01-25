<template>
  <el-checkbox-group v-model="checkboxGroup" size="small">
    <el-checkbox v-for="(item,index) in checkData" :key="index" :label="item.label" border></el-checkbox>
  </el-checkbox-group>
</template>

<script>
  export default {
    data() {
      return {
        checkboxGroup: []
      }
    },
    props: {
      checkData:{
        type:Array,
        default:[
          {
            label:'视频'
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
