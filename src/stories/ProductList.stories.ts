import ProductList from './ProductList.vue';
import { Meta, StoryFn } from '@storybook/vue3'
import productsJSON from '../products.json'


export default {
    title: 'ProductList',
    component: ProductList,
    argTypes: {
    //   onClick: {},
    // availability: {
    //   control: { type: 'select' },
    //   options: ['low', 'medium', 'high'],
    // },
    },
} as Meta<typeof ProductList>;

const Template: StoryFn<typeof ProductList> = (args) => ({
    components: { ProductList },
    setup() {
      return { args };
    },
    template: '<product-list v-bind="args" />',
  });

  export const Examp = Template.bind({});
  let result = JSON.stringify(productsJSON)

  Examp.args = {

    products: JSON.parse(result)
    
};