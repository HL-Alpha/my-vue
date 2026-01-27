<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <h2>01-巢狀路由</h2>
  <div>{{ route }}</div>
</template>

<style></style>
