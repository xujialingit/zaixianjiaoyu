export default {
  path: '/test',
  component: r =>  require.ensure([], () => r(require('./test.vue')), 'test'),
};
