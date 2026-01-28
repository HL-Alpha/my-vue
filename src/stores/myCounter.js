import {ref} from 'vue'
import { defineStore} from 'pinia'
export const useCounterStore = defineStore('myCounterId', () => {
  const countNumber = ref(0)
  function increment() {
    countNumber.value++
  }
  function decrement() {
    countNumber.value--
  }
  return { countNumber, increment, decrement }
})
