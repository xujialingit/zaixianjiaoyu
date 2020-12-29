export default {
  path: '/myclass',
  component: r =>  require.ensure([], () => r(require('./myclass.vue')), 'myclass'),
};
