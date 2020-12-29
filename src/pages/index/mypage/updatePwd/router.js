export default {
  path: '/updatePwd',
  component: r =>  require.ensure([], () => r(require('./updatePwd.vue')), 'updatePwd'),
};
