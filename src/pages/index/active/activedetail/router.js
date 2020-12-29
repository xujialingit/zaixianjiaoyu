export default {
  path: '/activedetail',
  component: r =>  require.ensure([], () => r(require('./activedetail.vue')), 'activedetail'),
};
