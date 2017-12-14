import Vue from 'vue'
import App from './App'
import router from './router'
import Bus from './bus'
import axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import * as Cookies from 'tiny-cookie'
import {CitySelect} from 'vue-ydui/dist/lib.px/cityselect';
import {Tab, TabPanel} from 'vue-ydui/dist/lib.rem/tab';
import 'vue-ydui/dist/ydui.base.css';
import CustomComponents from './components/components'
import './icons'


Vue.config.productionTip = false;
Vue.prototype.$bus = Bus;
Vue.prototype.$cookies = Cookies;
Vue.use(Cookies);
Vue.use(VueAwesomeSwiper);
Vue.use(CustomComponents);
Vue.component(CitySelect.name, CitySelect);
Vue.component(Tab.name, Tab);
Vue.component(TabPanel.name, TabPanel);


// request 拦截器
axios.interceptors.request.use(
  config => {
    if (!Cookies.get('_prs_wx_user')) {
      // location.href = process.env.NODE_HOST + `extensions/wx/user/authorize/?state=${location.href}`;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

// response 拦截器
axios.interceptors.response.use(
  response => {
    if (response.data.code === 1101) {
      router.push({name: 'Bind'});
    }
    return response;
  },
  error => {
    return Promise.reject(error.response.data.message)   // 返回接口返回的错误信息
  }
);

router.beforeEach((to, from, next) => {
  if (from.name === 'OrderDetails') {
    to.meta.isBack = true;
  }
  next();
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
});

new Vue({
  el: "title",
  computed: {
    title() {
      return this.$bus.title;
    }
  }
});
