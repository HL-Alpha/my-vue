<script setup>
import { defineProps } from 'vue'
const prop = defineProps({
  title:String,
  price:Number,
  stock:Number,
  description:String
})
</script>

<template>
  <div class="box">
    <label>商品名稱：{{prop.title}}</label>
    <div>價格：{{prop.price}}
      <span class="warn" v-if="prop.price>=40">現在有點貴</span>
      <!-- <span v-if="prop.stock <= 0">＊</span> -->
       <span :class="{'status':prop.stock <= 0}">＊</span>
    </div>

    <div>說明：{{prop.description}}</div>
  </div>
</template>

<style scoped>
.box{
  border: 1px solid gray;
  margin-top: 3px;
}
.warn{
  background-color: orange;
}
.status{
  color: red;
}
</style>
