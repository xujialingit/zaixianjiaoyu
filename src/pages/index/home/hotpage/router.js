export default {
  path: '/hotpage',
  component: r =>  require.ensure([], () => r(require('./hotpage.vue')), 'hotpage'),
};
