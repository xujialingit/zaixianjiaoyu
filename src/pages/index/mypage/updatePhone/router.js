export default {
  path: '/updatePhone',
  component: r =>  require.ensure([], () => r(require('./updatePhone.vue')), 'updatePhone'),
};
