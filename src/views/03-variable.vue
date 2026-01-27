<script setup>
import { ref, reactive } from 'vue'
const message = ref('Hello, Vue!')
message.value = '今天是1.26'

const num = ref(0)
// ref宣告物件
const data0 = ref({
  id: 1,
  text: '今天是0126',
})
data0.value.id = 2
data0.value.text = '今天是1.26'

// reactive宣告物件
const data = reactive({
  id: 1,
  text: '今天是0127',
})
data.id = 2
data.text = '今天是1.27'
</script>

<template>
  <h2>03-響應式變數</h2>
  <div>{{ message }}</div>
  <a href="#">{{ message }}</a>
  <div>ref的數字{{ num }}</div>
  <div>data的id = {{ data.id }}</div>
  <div>data的text = {{ data.text }}</div>
</template>

<style></style>
