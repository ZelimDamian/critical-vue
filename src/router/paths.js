/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */
export default [
  {
    path: '/dashboard',
    view: 'Dashboard',
    meta: {
      authRequired: true
    }
  }, {
    path: '/signin',
    view: 'Signin',
    meta: {
      authUnrequired: true
    }
  }, {
    path: '/playback/:id',
    view: 'Playback',
    props: true,
    meta: {
      authRequired: true
    }
  }
]
