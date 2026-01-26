<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
console.log('我的keyword', route.query.keyword)
console.log('我的page', route.query.page)
</script>

<template>
    <h2>01-路由參數傳遞 - 查詢參數(query)</h2>
    <p>Keyword: {{ route.query.keyword }}</p>
    <p>Page: {{ route.query.page }}</p>
</template>

<style>

</style>
