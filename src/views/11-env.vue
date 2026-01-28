<script setup>
import {ref} from 'vue'
const window_app_js_title = ref('')
window_app_js_title.value = window.App_JS_TITLE

const env_app_title = ref('')
env_app_title.value = import.meta.env.VITE_APP_TITLE

import {getCurrentInstance} from 'vue'
const global_app_title = ref('')
global_app_title.value = getCurrentInstance().proxy.$globalAppTitle
//解構寫法
// const {proxy} = getCurrentInstance()
// global_app_title.value = proxy.$globalAppTitle

import {inject} from 'vue'
const inject_app_title = ref('')
inject_app_title.value = inject('provideAppTitle')

</script>

<template>
  <h2>11-全域變數</h2>
  <div>js 全域變數 = {{ window_app_js_title }}</div>
  <div>.env環境變數 = {{ env_app_title }}</div>
  <div>globalglobalProperties 全域屬性 = {{ global_app_title }}</div>
  <div>provide / inject = {{ inject_app_title }}</div>
</template>

<style></style>
