export default {
  path: '/activemsg',
  component: r =>  require.ensure([], () => r(require('./activemsg.vue')), 'activemsg'),
};
