export default {
  path: '/noticemsg',
  component: r =>  require.ensure([], () => r(require('./noticemsg.vue')), 'noticemsg'),
};
