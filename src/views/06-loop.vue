<script setup>
import { ref } from 'vue'

const datas = ref([
  { name: 'apple', price: 10 },
  { name: 'banana', price: 20 },
  { name: 'cherry', price: 30 },
  { name: 'orange', price: 40 },
  { name: 'grape', price: 50 },
])
</script>

<template>
  <h2>06-迴圈渲染</h2>
  <div>
    <label v-for="(item, index) in datas" :key="index"> 商品名稱 : {{ item.name }} </label>
    <label v-for="(item, index) in datas" :key="index"> 商品 : NT$ {{ item.price }} </label>
  </div>

  <br />

  <div v-for="(d, index) in datas" :key="index">
    <label>商品名稱 : {{ d.name }} </label>
    <label>商品 : NT$ {{ d.price }} </label>
    <span class="spec" v-if="d.price <= 20">特價中</span>
  </div>
</template>

<style>
.spec {
  color: red;
  background-color: yellow;
}
</style>
