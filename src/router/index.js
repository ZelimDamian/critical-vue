/**
 * Vue Router
 *
 * @library
 *
 * https://router.vuejs.org/en/
 */

// Lib imports
import Vue from 'vue'
import Router from 'vue-router'

import store from '../store'
import paths from './paths'

function route (path, view, name, meta) {
  return {
    name: name || view,
    path, meta,
    component: (resolve) => import(
      `@/views/${view}.vue`
    ).then(resolve)
  }
}

Vue.use(Router);

// Create a new router
const router = new Router({
  mode: 'history',
  routes: paths.map(path => route(path.path, path.view, path.name, path.meta)).concat([
    { path: '*', redirect: '/dashboard' }
  ])
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authRequired)) {
    if (!store.getters['auth/user']) {
      next({
        path: '/signin',
        query: {redirect: to.fullPath}
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.authUnrequired)) {
    if (store.getters['auth/user']) {
      next({
        path: '/dashboard',
        query: {redirect: to.fullPath}
      })
    } else {
      next()
    }
  } else {
    next()
  }
});

export default router
