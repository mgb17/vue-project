import MyPagination from './Pagination.vue';
import { Meta, StoryFn } from '@storybook/vue3'


export default {
    title: 'Pagination',
    component: MyPagination,
    argTypes: {
      onClick: {},
    },
    decorators: [() => ({ template: '<div style="margin-top: 20em;"><story/></div>' })],

} as Meta<typeof MyPagination>;

const Template: StoryFn<typeof MyPagination> = (args) => ({
    components: { MyPagination },
    setup() {
      return { args };
    },
    template: '<my-pagination v-bind="args" />',
  });

  export const Pages = Template.bind({});

  Pages.args = {
    totalPageNumber: 4,
    currentPage: 1,
};