export default {
  path: '/setpage',
  component: r =>  require.ensure([], () => r(require('./setpage.vue')), 'setpage'),
};
