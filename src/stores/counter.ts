/**
 * @Author: songfangzheng
 * @Date: 2022/7/26 14:39
 * @Description:
 */
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => {
    return { count: 0 };
  },
  // 也可以这样定义
  // state: () => ({ count: 0 })
  actions: {
    increment() {
      this.count++;
    },
  },
});
