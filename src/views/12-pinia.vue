<script setup>
import { useCounterStore } from '@/stores/myCounter'
const myCounter= useCounterStore()
// myCounter.countNumber
// myCounter.increment()

import { useCounterStore as myPersist } from '@/stores/myCounterPersist'
const myCounterPersist = useCounterStore()

</script>

<template>
  <h2>12-Pinia</h2>
  <div>當前計數={{myCounter.countNumber}}</div>
  <div><button @click="myCounter.increment()">進來一個人</button></div>
  <div><button @click="myCounter.decrement()">離開一個人</button></div>
  <div>持久化當前計數={{myCounterPersist.countNumber}}</div>
</template>

<style></style>
