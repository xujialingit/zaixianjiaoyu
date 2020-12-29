export default {
  path: '/about',
  component: r =>  require.ensure([], () => r(require('./about.vue')), 'about'),
};
