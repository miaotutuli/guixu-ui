import Vue from 'vue'
import App from './App.vue'
// 引入插件
import GxUI from '../packages/index';

Vue.use(GxUI);

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
