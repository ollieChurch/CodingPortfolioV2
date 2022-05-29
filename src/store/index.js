import Vue from 'vue'
import Vuex from 'vuex'

import articles from './modules/articles.js'
import jobs from './modules/jobs.js'
import projects from './modules/projects.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
      articles, jobs, projects
  }
})
