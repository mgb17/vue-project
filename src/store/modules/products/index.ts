import getters from './getters';
import productsJSON from '../../../products.json'


export default {
    namespaced: true,
    state() {
      let productsToParse = JSON.stringify(productsJSON)

      return {
          products: JSON.parse(productsToParse)
      };
    },
    getters
};
