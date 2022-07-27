* @componentName index
* @module
* @desc
* @author songfangzheng
* @date 2022/7/26 11:47
* @example
-->
<template>
  <div class="detail">{{ `name: ${name}` }}</div>
  <div class="detail">{{ `count: ${counter.count}` }}</div>
</template>

<script lang="ts" setup>

import { ref, getCurrentInstance, onBeforeMount } from 'vue'
import { useCounterStore } from '@/stores';

const counter = useCounterStore();
// const instance = getCurrentInstance()

counter.count++;
// 可以手动触发
counter.$patch({ count: counter.count + 1 });
// 或者使用 actions
counter.increment();

onBeforeMount(() => {
  const currentPage: any = getCurrentPages()[getCurrentPages().length - 1]
  console.log(currentPage.$passedParams)
})

const name = ref('sfz')

</script>

<style lang="scss" scoped>

</style>