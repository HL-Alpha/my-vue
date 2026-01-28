<script setup>
import {useCounterStore} from '@/stores/myCounter'
const myCounter= useCounterStore()
</script>

<template>
  <h2>12-Pinia2</h2>
  <div>百貨公司二樓當前人數 = {{myCounter.countNumber}}</div>
</template>

<style></style>
