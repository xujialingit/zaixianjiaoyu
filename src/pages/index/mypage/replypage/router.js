export default {
  path: '/replypage',
  component: r =>  require.ensure([], () => r(require('./replypage.vue')), 'replypage'),
};
