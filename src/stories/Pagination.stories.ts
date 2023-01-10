import MyPagination from './Pagination.vue';

export default {
    title: 'Pagination',
    component: MyPagination,
    argTypes: {
      onClick: {},
      availability: {
        control: { type: 'select' },
        options: ['low', 'medium', 'high'],
      },
    },
};

const Template = (args) => ({
    components: { MyPagination },
    setup() {
      return { args };
    },
    template: '<my-pagination v-bind="args" />',
  });

  export const Pages = Template.bind({});

//   Pages.args = {
//     totalPageNumber: 4,
//     currentPage: 1,
// };