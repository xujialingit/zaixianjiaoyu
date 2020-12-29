export default {
  path: '/active',
  component: r =>  require.ensure([], () => r(require('./active.vue')), 'active'),
};
