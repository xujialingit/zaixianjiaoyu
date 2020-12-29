export default {
  path: '/replyok',
  component: r =>  require.ensure([], () => r(require('./replyok.vue')), 'replyok'),
};
