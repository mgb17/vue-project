import MyProduct from './Product.vue';
import { Meta, StoryFn } from '@storybook/vue3'
// import store from '../../store/index'
import { createStore, Store } from 'vuex'
import Vuex from 'vuex';

import bookmarkModule from '../../store/modules/bookmarks/index';
import { ProductType } from '../../interface';


const productData: ProductType = {
  code: 1,
  title: 'Sample Product 1st',
  variant: 2,
  availability: '',
  price: 123,
  oldPrice: 456,
  info: 'wenige',
  priceOffer: true
}

export default {
    title: 'Product',
    component: MyProduct,
  
    argTypes: {},
    decorators: [() => ({ template: '<div style="width: 20em; background-color: #bbb;"><story/></div>' })],

} as Meta<typeof MyProduct>;


const Template: StoryFn<typeof MyProduct> = (args) => ({
    components: { MyProduct },
    setup() {
      return { args };
    },
    template: '<my-product v-bind="args" />',
    store: new Vuex.Store ({
      state: {},
      modules: {
          bookmarks: {
            state: {
              bookmarks: []
            },
            getters: {
              bookmarks: () => {
                return [productData]                 
              }
            }
          },
      }
    }), 
  });

  export const Single = Template.bind({});

  Single.args = {
    product: productData
};
