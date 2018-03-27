// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { mapGetters, mapActions } from 'vuex'
import store from './store'
import axios from 'axios'
import qs from 'qs'

Vue.prototype.$http = axios
Vue.prototype.$qs = qs

// ui默认全部加载
import Element from 'element-ui';
Vue.use(Element)


// ui按需加载，此时需在.bablerc配置plugin,详见element-ui文档
// import { Button, Select} from 'element-ui';
// Vue.component(Button.name, Button);

Vue.config.productionTip = false

/* eslint-disable no-new */
window.vm = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  data: {
    mapGetters,     // 全局引入 vuex mapGetters 函数
    mapActions      // 全局引入 vuex mapActions 函数
  }
})
