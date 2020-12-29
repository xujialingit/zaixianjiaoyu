export default {
  path: '/message',
  component: r =>  require.ensure([], () => r(require('./message.vue')), 'message'),
};
