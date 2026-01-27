<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
console.log('我的id', route.params.id)
console.log('我的category', route.params.category)
</script>

<template>
  <h2>01-路由參數傳遞-動態參數(params)</h2>
  <p>ID: {{ route.params.id }}</p>
  <p>Category: {{ route.params.category }}</p>
</template>

<style></style>
