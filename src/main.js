// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//按需加载的写法
import Vue from 'vue'
import App from './App'
import router from './router'
//--------------------------------写法，安两个插件,用哪个就在这里注册哪个 1.17MB和3.7MB的差别
//cnpm install babel-plugin-component -D
//cnpm install babel-cli babel-preset-es2015
import { Button, Select, Dialog} from 'element-ui'
Vue.use(Button)
Vue.use(Select)
Vue.use(Dialog)
//----------------------------------

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: {
        App
    },
    template: '<App/>'
})
