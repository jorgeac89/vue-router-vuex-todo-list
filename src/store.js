import Vue from 'vue';
import Vuex from 'vuex';
import listModule from 'list/store-module';
import newModule from 'new/store-module';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    list: listModule,
    new: newModule
  }
});
