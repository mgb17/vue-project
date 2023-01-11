import ProductList from './ProductList.vue';
import { Meta, StoryFn } from '@storybook/vue3'


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

  Examp.args = {
    products: [
        {
            code: 1,
            title: 'GARDENA combisystem-Vertikutier-Boy asdasdasd 1st',
            variant: '2',
            price: '64,99',
            oldPrice: '44,95',
            info: 'wenige',
            availability: 'medium',
          },
          {
            code: 2,
            title: 'Lorem asdqw ahashdasjd 2nd',
            variant: '2',
            price: '128,99',
            oldPrice: '22,95',
            info: 'mehrere',
            availability: 'medium',
          },
          {
            code: 3,
            title: 'Lorem asdqw ahashdasjd 3rd',
            variant: '2',
            price: '128,99',
            oldPrice: '22,95',
            info: 'mehrere',
            availability: 'high',
          },
          {
            code: 4,
            title:
              'GARDENA combisystem-Vertikutier-Boy asdasdasd GARDENA combisystem-Vertikutier-Boy asdasdasd 4th',
            variant: '2',
            price: '64,99',
            oldPrice: '44,95',
            info: 'wenige',
            availability: 'low',
          },
          {
            code: 5,
            title: 'GARDENA combisystem-Vertikutier-Boy asdasdasd 5th',
            variant: '2',
            price: '64,99',
            oldPrice: '44,95',
            info: 'wenige',
            availability: 'low',
          },
    ]
};