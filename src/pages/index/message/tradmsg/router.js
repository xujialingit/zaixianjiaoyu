export default {
  path: '/tradmsg',
  component: r =>  require.ensure([], () => r(require('./tradmsg.vue')), 'tradmsg'),
};
