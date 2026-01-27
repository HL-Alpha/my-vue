<script setup>
import { ref, watch, watchEffect } from 'vue'
const eggNum = ref(0)
const message = ref('')
watch(eggNum, (val) => {
  if (val < 10) message.value = '賣太少了，至少10顆以上'
  else if (val >= 10 && val < 20) message.value = '買20顆以上打9折'
  else message.value = '打9折'
})

const nowVal = ref(0)
const exVal = ref(0)
watch(eggNum, (newVal, oldVal) => {
  nowVal.value = newVal
  exVal.value = oldVal
})

const total = ref(0)
const message2 = ref('')
watchEffect(() => {
  if (total.value >= 1000) message2.value = '滿1000元打95折'
  else if (total.value < 1000 && total.value >= 400) message2.value = ''
  else message2.value = '未滿400元，需酌收運費'
})
</script>

<template>
  <h2>09-監聽</h2>
  <h2>watch</h2>

  <div>
    購買雞蛋的數量：<input type="number" v-model="eggNum" />
    <br />
    <span>買了幾顆：{{ eggNum }}，{{ message }}</span>
    <div>當前預計購買的數量：{{ nowVal }}，上次購買的數量：{{ exVal }}</div>
  </div>

  <h2>watchEffect</h2>

  <div>總金額：<input type="number" v-model="total" /></div>
  <span>已購買{{ total }}元，{{ message2 }}</span>
</template>

<style></style>
