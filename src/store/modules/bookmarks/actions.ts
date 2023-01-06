import { Product } from '../../../interface'

export default {
    toggleBookmark(context: Object, data:Product) {
        const bookmarkData = {
            productTitle: data.title,
            productPrice: data.price,
            code: data.code
        };


        // const actions = {
        //     toggleBookmark ({commit}): none {
        //       commit('toggleBookmark')
        //     },
        // }

        context.commit('toggleBookmark', bookmarkData);

    },
}