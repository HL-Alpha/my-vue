<script setup>
import { ref, reactive, toRefs } from 'vue'
const message = ref('Hello, Vue!')
message.value = '今天是1.26'

const num = ref(0)
</script>

<template>
    <h2>03-響應式變數</h2>
    <div>{{ message }}</div>
    <a href="#">{{ message }}</a>
    <div>ref的數字{{ num }}</div>
</template>

<style>

</style>
