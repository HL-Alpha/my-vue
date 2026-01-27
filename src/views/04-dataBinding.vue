<script setup>
import { ref } from 'vue'
const data = ref('這是測試資料')
</script>

<template>
  <h2>04-資料綁定 v-bind / v-model</h2>
  <div>單向綁定 : {data} = {{ data }}</div>
  <div>
    單向綁定 : v-bind:value =
    <input :value="data" />
  </div>

  <br />
  <div>
    雙向綁定 : v-model:value =
    <input v-model="data" />
  </div>

  <div>
    雙向綁定2 : v-model:value =
    <input v-model="data" />
  </div>
</template>

<style></style>
