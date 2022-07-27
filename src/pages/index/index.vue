<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <text class="title">{{ title }}：飛鹏传媒</text>
    </view>
    <button type="default" open-type="getPhoneNumber" @getphonenumber="decryptPhoneNumber">获取手机号</button>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const title = ref('Hello')

const onClick = () => {
  console.log('onClick')
  uni.navigateTo({
    url: '/pages/detail/index?a=1&b=1', // 不影响原生的参数传递
    // 提供了基于页面级别的路由参数对象
    routeParams: {
      c:1,
      d:1
    },
    // 提供了基于跳转过程的过程参数对象
    passedParams: {
      e:1,
      f:1
    }
  })

}

const decryptPhoneNumber = (event) => {
  if (event.detail.errMsg === 'getPhoneNumber:fail user deny') {
    console.log('不同意授权')
  } else {
    // 解密手机号
  }
}

</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
