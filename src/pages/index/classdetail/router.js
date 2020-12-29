export default {
  path: '/classdetail',
  component: r =>  require.ensure([], () => r(require('./classdetail.vue')), 'classdetail'),
};
