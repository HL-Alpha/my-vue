<script setup>
  import {ref, defineEmits} from 'vue'
  const score = ref(0)
  const emit = defineEmits(['childScore','childScore2'])
  function handleAction(){
    alert('我考了'+score.value+'分,通知父層')
    emit('childScore','我的XX分數',score.value)
  }
  function handleAction2(){
    alert('我考了'+score.value+'分,通知父層')
    const data = {mySubject:'國文',myScore:score.value}
    emit('childScore2',data)
  }
</script>


<template>
 <h2>這是子元件</h2>
 <input type="number" v-model="score">
 <button @click="handleAction()">告訴父層</button>
 <button @click="handleAction2()">告訴父層(傳物件)</button>
</template>

<style></style>
