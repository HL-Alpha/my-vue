<script setup>
import { ref } from 'vue'
const weekday = ref(1)
</script>

<template>
  <h2>05-條件渲染</h2>
  <div>
    今天星期幾
    <input v-model="weekday" type="number" min="1" max="7" />
    <!-- <input v-model.number="weekday" type="number" min="1" max="7" /> -->
  </div>

  <div>
    <h2>v-if / v-else-if / v-else</h2>
    <h3 v-if="weekday >= 1 && weekday <= 5">今天星期{{ weekday }}，有營業。</h3>
    <h3 v-else-if="weekday == 6">今天星期{{ weekday }}，營業半天。</h3>
    <h3 v-else>今天星期{{ weekday }}，休息。</h3>
  </div>

  <div>
    <h2>v-show (display: none)</h2>
    <h3></h3>
    <h3 v-show="weekday >= 1 && weekday <= 5">今天星期{{ weekday }}，有營業。</h3>
    <h3 v-show="weekday == 6">今天星期{{ weekday }}，營業半天。</h3>
    <h3 v-show="weekday == 7">今天星期{{ weekday }}，休息。</h3>
  </div>
</template>

<style></style>
