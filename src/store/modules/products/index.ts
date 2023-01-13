import getters from './getters';
import productsJSON from '../../../products.json'


export default {
    namespaced: true,
    state() {
      let result = JSON.stringify(productsJSON)

        return {
            products: JSON.parse(result)
        };
    },
    getters
};
