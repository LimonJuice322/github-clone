import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { svgSpritePlugin } from 'vue-svg-sprite'

createApp(App).use(store).use(router).use(svgSpritePlugin, {
  url: '/public/',
  class: 'my-class',
}).mount('#app')
