export default {
  path: '/myattention',
  component: r =>  require.ensure([], () => r(require('./myattention.vue')), 'myattention'),
};
