<script setup>
import axios from 'axios'
import { ref } from 'vue'
const isEdit = ref(false)
const result = ref('')
const editId = ref(null)
const productName = ref('')
const productCategory = ref('')
const productPrice = ref('')
const apiUrl = import.meta.env.VITE_API_URL


function getProduct(){
  // axios.get('https://localhost:7193/api/Test')
  axios.get(apiUrl)
  .then(resp => {
    console.log(resp.data)
    result.value = resp.data
  })
  .catch(error => {
    console.log('發生錯誤', error)
  })
}

function addProducts(){
  const data = {
    name:'switch2',
    category:'3C',
    price:999
  }

  // axios.post('https://localhost:7193/api/Test', data)
  axios.post(apiUrl, data)
  .then(resp => {
    console.log(resp.data)
    getProduct()
  })
  .catch(error => {
    console.log('發生錯誤', error)
  })
}

function addMyProduct(){
  const data = {
    name: productName.value,
    category: productCategory.value,
    price: productPrice.value
  }

  // axios.post('https://localhost:7193/api/Test', data)
  axios.post(apiUrl, data)
  .then(resp => {
    console.log(resp.data)
    getProduct()
    productName.value = ''
    productCategory.value = ''
    productPrice.value = 0
  })
  .catch(error => {
    console.log('發生錯誤', error)
  })
}

function updateProduct(){
  const data = {
    name:'富士蘋果',
    category:'日本水果',
    price:50
  }

  // axios.put('https://localhost:7193/api/Test/2', data)
  axios.put(apiUrl+'2', data)
  .then(resp => {
    console.log(resp.data)
    alert('更新成功')
    getProduct()
  })
  .catch(error => {
    console.log('發生錯誤', error)
  })

}

function getMyProduct(id){
  isEdit.value = true
  editId.value = id
  // axios.get('https://localhost:7193/api/Test/'+id)
  axios.get(apiUrl+id)
  .then(resp => {
    console.log(resp.data)
    productName.value = resp.data.name
    productCategory.value = resp.data.category
    productPrice.value = resp.data.price
  })
  .catch(error => {
    console.log('發生錯誤', error)
  })
}

function updateMyProduct(){
  const data = {
    name: productName.value,
    category: productCategory.value,
    price: productPrice.value
  }

  // axios.put('https://localhost:7193/api/Test/'+editId.value, data)
  axios.put(apiUrl+editId.value, data)
  .then(resp => {
    console.log(resp.data)
    alert('更新成功')
    getProduct()
    productName.value = ''
    productCategory.value = ''
    productPrice.value = 0
    isEdit.value = false
    editId.value = ''
  })
  .catch(error => {
    console.log('發生錯誤', error)
  })

}

function deleteProduct(){
  // axios.delete('https://localhost:7193/api/Test/7')
  axios.delete(apiUrl+'7')
  .then(resp => {
    console.log(resp.data)
    getProduct()
  })
  .catch(error => {
    console.log('發生錯誤', error)
  })
}
function deleteMyProduct(id, name){
  if(confirm('確定刪除'+name+'嗎?')){
    // axios.delete('https://localhost:7193/api/Test/'+id)
    axios.delete(apiUrl+id)
    .then(resp => {
      console.log(resp.data)
      getProduct()
    })
    .catch(error => {
      console.log('發生錯誤', error)
    })
  }

}
</script>

<template>
  <h2>13-Axios 前後端串接</h2>
  <div>
    <button @click="getProduct()">get</button>
    <button @click="addProducts()">post</button>
    <button @click="updateProduct()">update</button>
    <button @click="deleteProduct()">delete</button>
    <div>
      axios回傳結果：{{ result }}
    </div>

    <!-- <div v-for="item in result" :key="item.id">
      <p>商品名：{{ item.name }}</p>
      <p>分類：{{ item.category }}</p>
      <p>價格：{{ item.price }}</p>
    </div> -->

    <hr>
    id:{{ editId }} <br>
    名稱:<input v-model="productName"> <br>
    分類:<input v-model="productCategory"> <br>
    價格:<input v-model.number="productPrice" type="number"><br>
    <button @click="addMyProduct()" v-if="isEdit==false">新增</button>
    <button @click="updateMyProduct()" v-else-if="isEdit==true">修改</button>
    <hr>

    <table border = '1'>
      <thead>
        <tr>
          <th>id</th>
          <th>商品名</th>
          <th>分類</th>
          <th>價格</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="data in result" :key="data.id">
          <td>{{ data.id }}</td>
          <td>{{ data.name }}</td>
          <td>{{ data.category }}</td>
          <td>{{ data.price }}</td>
          <td><button @click="getMyProduct(data.id)">編輯</button></td>
          <td><button @click="deleteMyProduct(data.id, data.name)">刪除</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
