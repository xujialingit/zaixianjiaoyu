export default {
  path: '/changedou',
  component: r =>  require.ensure([], () => r(require('./changedou.vue')), 'changedou'),
};
