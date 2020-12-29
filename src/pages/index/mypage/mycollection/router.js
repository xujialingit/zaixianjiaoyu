export default {
  path: '/mycollection',
  component: r =>  require.ensure([], () => r(require('./mycollection.vue')), 'mycollection'),
};
