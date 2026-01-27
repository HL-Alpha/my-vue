<script setup>
const categories = [
  { id: 'f1', name: '水果' },
  { id: 'f2', name: '蔬菜' },
  { id: 'f3', name: '飲料' },
]

const items = [
  { id: 1, name: '蘋果', categoryId: 'f1' },
  { id: 2, name: '香蕉', categoryId: 'f1' },
  { id: 3, name: '胡蘿蔔', categoryId: 'f2' },
  { id: 4, name: '青花菜', categoryId: 'f2' },
  { id: 5, name: '可樂', categoryId: 'f3' },
  { id: 6, name: '柳橙汁', categoryId: 'f3' },
]

import { ref, computed } from 'vue'
const selectedCategory = ref('')
const filteredItems = computed(() => {
  if (selectedCategory.value == '') {
    return []
  } else if (selectedCategory.value == 'all') {
    return items
  } else {
    return items.filter((d) => d.categoryId === selectedCategory.value)
  }
})
</script>
<template>
  <h2>08-計算屬性</h2>
  <div>
    商品分類
    <select v-model="selectedCategory">
      <option value="">請選擇</option>
      <option value="all">全部</option>

      <option v-for="item in categories" :key="item.id" :value="item.id">
        {{ item.name }}
      </option>
    </select>
    你選到了 : {{ selectedCategory }}
  </div>

  <div>
    商品
    <select>
      <option v-for="data in filteredItems" :key="data.id" :value="data.id">
        {{ data.categoryId }} - {{ data.name }}
      </option>
    </select>
  </div>
</template>
