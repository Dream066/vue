import Vue from 'vue';
import App from './App.vue';
// import {message,message2} from './data/file1';
// import vueAlert from './data/file2'
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');

// vueAlert();
