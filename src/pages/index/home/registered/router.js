export default {
  path: '/registered',
  component: r =>  require.ensure([], () => r(require('./registered.vue')), 'registered'),
};
