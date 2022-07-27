# feipeng

飛鹏旗下，包含婚庆和蛋糕定制等多种业务


## 技术栈

* vue3 + vite2 + ts + uniapp(内置vuex4)

### 使用插件
* uni-crazy-router

## 问题记录

### 1. ts中使用别名
1、使用path模块需要安装 `npm install @types/node --save-dev`
2、tsconfig.json 配置
```json
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```
3、配置vite.config.ts
```ts
{
    resolve: {
      alias: {  // 这里就是需要配置resolve里的别名
        "@": path.join(__dirname, "./src") // path记得引入
      }
    }
}
```