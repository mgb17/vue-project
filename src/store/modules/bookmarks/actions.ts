// import { Product } from '../../../interface'

export default {
    toggleBookmark(context, data) {
        const bookmarkData = {
            productTitle: data.product.title,
            productPrice: data.product.price,
            code: data.product.code
        };

        context.commit('toggleBookmark', bookmarkData);
    },
}