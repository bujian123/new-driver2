// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App'
import router from './router'
import '../static/js/rem.js'
import api from './api/index.js'
Vue.prototype.$api = api;
// import footShow from './components/footShow.js'
// import workbench from './components/workbench/index'
Vue.use(Mint)
    // Vue.use(footShow)
Vue.config.productionTip = false
    // Vue.use(workbench)
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App },
    watch: {

    }
})