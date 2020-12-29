export default {
  path: '/buyclass',
  component: r =>  require.ensure([], () => r(require('./buyclass.vue')), 'buyclass'),
};
