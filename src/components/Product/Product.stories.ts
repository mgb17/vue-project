import MyProduct from './Product.vue';
import { Meta, StoryFn } from '@storybook/vue3'
// import store from '../../store/index'
import { createStore } from 'vuex'

// const store = createStore({
//   state: {
//     bookmarks:  {
//       code: 1,
//       title: 'mock Product 1st',
//       variant: 2,
//       availability: '',
//       price: 123,
//       oldPrice: 456,
//       info: 'wenige',
//       priceOffer: true
//     },
//   }
// })

export default {
    title: 'Product',
    component: MyProduct,
    // store: store,
    // $store: store,
    argTypes: {},
    decorators: [() => ({ template: '<div style="width: 20em; background-color: #bbb;"><story/></div>' })],

} as Meta<typeof MyProduct>;



const Template: StoryFn<typeof MyProduct> = (args) => ({
    components: { MyProduct },
    setup() {
      return { args };
    },
    template: '<my-product v-bind="args" />',
  });

  export const Single = Template.bind({});

  // export const store = Template.bind({})


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
