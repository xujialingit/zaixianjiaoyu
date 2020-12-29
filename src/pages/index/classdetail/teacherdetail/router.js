export default {
  path: '/teacherdetail',
  component: r =>  require.ensure([], () => r(require('./teacherdetail.vue')), 'teacherdetail'),
};
