export default {
  path: '/alreadysign',
  component: r =>  require.ensure([], () => r(require('./alreadysign.vue')), 'alreadysign'),
};
