// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// ui默认全部加载
import Element from 'element-ui';
Vue.use(Element)


// ui按需加载，此时需在.bablerc配置plugin,详见element-ui文档
// import { Button, Select} from 'element-ui';
// Vue.component(Button.name, Button);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
