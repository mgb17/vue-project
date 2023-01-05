import { createStore } from 'vuex'

import productModule from './modules/products/index.js';
import bookmarkModule from './modules/bookmarks/index.js';

const store = createStore ({
    state: {},
    modules: {
        products: productModule,
        bookmarks: bookmarkModule,
    }
});

export default store;