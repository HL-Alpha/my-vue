<script setup>
import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onErrorCaptured,
} from 'vue'

onBeforeMount(() => {
  console.log('掛載前 - onBeforeMount')
})
onMounted(() => {
  console.log('掛載完成 - onMounted')
})
onBeforeUpdate(() => {
  console.log('更新前 - onBeforeUpdate')
})
onUpdated(() => {
  console.log('更新完成 - onUpdated')
})
onBeforeUnmount(() => {
  alert('即將離開此頁面')
  console.log('卸載前 - onBeforeUnmount')
})
onUnmounted(() => {
  console.log('卸載完成 - onUnmounted')
})
onErrorCaptured((err, instance, info) => {
  console.log('錯誤捕捉 - onErrorCaptured', err, instance, info)
})
</script>

<template>
  <h2>02-生命周期</h2>
</template>

<style></style>
