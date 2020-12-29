export default {
  path: '/editName',
  component: r =>  require.ensure([], () => r(require('./editName.vue')), 'editName'),
};
