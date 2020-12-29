export default {
  path: '/edupage',
  component: r =>  require.ensure([], () => r(require('./edupage.vue')), 'edupage'),
};
