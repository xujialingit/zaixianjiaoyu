export default {
  path: '/forgotPwd',
  component: r =>  require.ensure([], () => r(require('./forgotPwd.vue')), 'forgotPwd'),
};
