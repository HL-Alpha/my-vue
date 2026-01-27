<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>

        <RouterLink to="/myPage">我的路由</RouterLink>
        <RouterLink :to="{ path: '/myPage' }">我的路由</RouterLink>
        <RouterLink :to="{ name: 'my-page' }">我的路由</RouterLink>
        <br />
        <RouterLink :to="{ name: 'router-query', query: { keyword: 'switch', page: 1 } }"
          >01-路由參數傳遞-查詢參數(query)</RouterLink
        >
        <RouterLink :to="{ name: 'router-params', params: { id: 123, category: 'iphone' } }"
          >01-路由參數傳遞-動態參數(params)</RouterLink
        >
        <RouterLink :to="{ name: 'lv1-page' }">01-巢狀路由</RouterLink>
        <RouterLink :to="{ name: 'hook' }">02-生命週期</RouterLink>
        <RouterLink :to="{ name: 'variable' }">03-響應式變數</RouterLink>
        <RouterLink :to="{ name: 'data-binding' }">04-資料綁定 v-bind / v-model</RouterLink>
        <RouterLink :to="{ name: 'condition' }">05-條件渲染</RouterLink>
        <RouterLink :to="{ name: 'loop' }">06-迴圈渲染</RouterLink>
        <RouterLink :to="{ name: 'event' }">07-事件綁定</RouterLink>
        <RouterLink :to="{ name: 'computed' }">08-計算屬性</RouterLink>
        <RouterLink :to="{ name: 'watch' }">09-監聽</RouterLink>
        <RouterLink :to="{ name: 'component' }">10-元件</RouterLink>
      </nav>
    </div>
  </header>
  <hr style="margin: 10px 0" />
  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
