export default {
  path: '/paysenddou',
  component: r =>  require.ensure([], () => r(require('./paysenddou.vue')), 'paysenddou'),
};
