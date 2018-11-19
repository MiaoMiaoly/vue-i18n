import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueI18n from 'vue-i18n'
// 导入Element-UI 语言包
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'

Vue.use(VueI18n);

// 注册i18n实例并引入我们语言文件，将Element-UI的语言包与我们的合并
// 使用到es6的Object.assign()方法 
const i18n = new VueI18n({
   locale: 'zh',
   messages:{
     'en':Object.assign(require('./i18n/langs/en.js'), enLocale),
     'zh':Object.assign(require('./i18n/langs/cn.js'), zhLocale)
   },
});

Vue.use(ElementUI, {
  i18n: (key,value) => i18n.t(key,value)
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  components: { App },
  template: '<App/>'
})
