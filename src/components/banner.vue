<template>
  <div class="block">
    <el-carousel trigger="click" height="506px">
      <el-carousel-item v-for="(item,index) in bannerData" :key="index">
        <img :src="item.src" />
        <h3>{{ item.title }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
    export default {
      props:{
        bannerData:{
          type:Array,
          default:[]
        }
      }
    }
</script>

<style scoped>
  .block{
    margin: 15px 0;
  }
</style>
