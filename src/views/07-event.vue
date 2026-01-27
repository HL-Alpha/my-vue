<script setup>
import { ref } from 'vue'
const num = ref(0)

function increment(i) {
  num.value = num.value + i
}

const inputText = ref('')
const title = ref('')
function changeTitle() {
  title.value = inputText.value
}

const clicked = ref(false)
function onlyOnce() {
  clicked.value = true
  alert('已點一次')
}

const keyword = ref('請輸入關鍵字')
function inputEnter() {
  alert(keyword.value)
}
</script>

<template>
  <h2>07-事件綁定</h2>
  <div>num = {{ num }}</div>
  <div>
    click事件
    <button v-on:click="increment(-1)">點我-1</button>
    <button v-on:click="increment(+1)">點我+1</button>
  </div>
  <br />
  <div>
    change事件

    <input v-model="inputText" @change="changeTitle()" />
    <a href="#">{{ title }}</a>
  </div>
  <br />
  <div>
    once修飾符
    <button @click.once="onlyOnce()">只能點一次</button>
  </div>
  <br />
  <div>
    按下去按鈕消失
    <button v-if="clicked == false" @click.once="onlyOnce()">只能點一次</button>
    <button v-if="!clicked" @click.once="onlyOnce()">只能點一次</button>
  </div>
  <br />
  <div>
    鍵盤修飾符
    <input @keyup.enter="inputEnter()" v-model="keyword" />
  </div>
</template>

<style></style>
