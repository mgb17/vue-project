import MyProduct from './Product.vue';
import { Meta, StoryFn } from '@storybook/vue3'




export default {
    title: 'Product',
    component: MyProduct,
    argTypes: {},

} as Meta<typeof MyProduct>;

const Template: StoryFn<typeof MyProduct> = (args) => ({
    components: { MyProduct },
    setup() {
      return { args };
    },
    template: '<my-product v-bind="args" />',
  });

  export const Single = Template.bind({});

  Single.args = {
    product: {
      code: 1,
      title: 'Sample Product 1st',
      variant: 2,
      availability: '',
      price: 123,
      oldPrice: 456,
      info: 'wenige',
      priceOffer: true
    },
};
