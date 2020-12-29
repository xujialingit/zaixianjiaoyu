export default {
  path: '/userCenter',
  component: r =>  require.ensure([], () => r(require('./userCenter.vue')), 'userCenter'),
};
