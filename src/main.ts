import { createSSRApp } from "vue";
import App from "./App.vue";
import * as Pinia from 'pinia';
import { setupRouter } from './router'
export function createApp() {
  const app = createSSRApp(App);
  setupRouter(app)
  app.use(Pinia.createPinia());
  return {
    app,
  };
}
