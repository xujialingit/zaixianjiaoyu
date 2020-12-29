export default {
  path: '/orderpage',
  component: r =>  require.ensure([], () => r(require('./orderpage.vue')), 'orderpage'),
};
