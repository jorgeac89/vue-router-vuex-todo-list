import Vue from 'vue';
import App from 'src/App';
import router from 'src/router';
import store from 'src/store';

import(/* webpackChunkName: "bootstrap" */ 'bootstrap');
import(/* webpackChunkName: "fontawesome" */ '@fortawesome/fontawesome-free');
import(/* webpackChunkName: "style" */ './style');

if (process.env.NODE_ENV === 'development') {
  /* eslint-disable global-require */
  const MockFetch = require('lib/MockFetch');
  const mocks = require('mocks/responses');
  /* eslint-enable global-require */
  Object.values(mocks).forEach(mock => MockFetch.addMock(mock));
  MockFetch.startMocking();
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
