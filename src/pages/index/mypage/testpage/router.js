export default {
  path: '/testpage',
  component: r =>  require.ensure([], () => r(require('./testpage.vue')), 'testpage'),
};
