<script setup>
import Product from '@/components/product.vue'

const products = [
{ name: 'apple', price: 10, description: '好吃', stock:1},
{ name: 'banana', price: 20, description: '好吃', stock:1},
{ name: 'cherry', price: 30, description: '好吃', stock:0},
{ name: 'orange', price: 40, description: '好吃', stock:0},
{ name: 'grape', price: 50, description: '好吃', stock:1},
]

import Child from '@/components/child.vue';
function handleChildScore(subject,score){
  alert('子元件：' + subject + '考了' + score + '分')
  if (score ==100) alert('轉帳10000元')
  else alert('表現不錯')
}

function handleChildScore2(data){
  alert('子元件：' + data.mySubject + '考了' + data.myScore + '分')
}

import mySlot from '@/components/slot.vue';
import mySlot2 from '@/components/slot2.vue';
</script>

<template>
  <h2>10-元件</h2>
  <div>
    父傳值給子元件(props)
    <Product title="Switch2" price="999" description="特價中"></Product>
    <br>
    <Product v-for="p in products" :title="p.name" :price="p.price" :description="p.description" :stock="p.stock"></Product>
  </div>
<br>
  <div>
    子通知父(emits)
    <!-- <Child @child-score=""></Child> -->
    <Child @childScore="handleChildScore" @childScore2="handleChildScore2"></Child>
  </div>
  <br>
  <div>
    插槽(slot)
    <mySlot>
      <div>商品熱銷中</div>
    </mySlot>
  </div>
    <br>
  <div>
    插槽(slot)(命名)
    <mySlot2>
    <template #stock>庫存 <  10</template>
    <template #lable><a href="#">商品熱銷中</a></template>
    </mySlot2>
  </div>
</template>

<style></style>
