import { Product } from '../../../interface'

export default {
    toggleBookmark(context: Object, data:Product) {
        const bookmarkData = {
            productTitle: data.title,
            productPrice: data.price,
            code: data.code
        };


        context.commit('toggleBookmark', bookmarkData);
    },
}