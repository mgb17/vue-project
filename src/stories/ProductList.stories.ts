import ProductList from './ProductList.vue';

export default {
    title: 'ProductList',
    component: ProductList,
    argTypes: {
      onClick: {},
      availability: {
        control: { type: 'select' },
        options: ['low', 'medium', 'high'],
      },
    },
};

const Template = (args) => ({
    components: { ProductList },
    setup() {
      return { args };
    },
    template: '<product-list v-bind="args" />',
  });

  export const Examp = Template.bind({});

  Examp.args = {
    totalPageNumber: 4,
    currentPage: 1,
};