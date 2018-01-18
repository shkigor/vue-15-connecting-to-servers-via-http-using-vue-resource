import Vue from 'vue'
import VueResource from 'vue-resource';
import App from './App.vue'

Vue.use(VueResource);

// Vue.$http we use only in Vue instances. In global scope we don't use $
Vue.http.options.root = 'https://vuejs-http-23956.firebaseio.com/';
// Add another global options for each request
//Vue.http.options.headers =

Vue.http.interceptors.push((request, next) => {
  console.log(request);
  if (request.method == 'POST') {
    request.method = 'PUT';
  }
  next(response => {
    response.json = () => { return {messages: response.body}}
  });
});

new Vue({
  el: '#app',
  render: h => h(App)
})
