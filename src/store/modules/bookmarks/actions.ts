export default {
    toggleBookmark(context, data) {
        const bookmarkData = {
            title: data.product.title,
            price: data.product.price,
            oldPrice: data.product.oldPrice,
            code: data.product.code
        };

        context.commit('toggleBookmark', bookmarkData);
    },

    editBookmark(context, data) {
        const bookmarkData = {
            title: data.bookmark.title,
            price: data.bookmark.price,
            oldPrice: data.bookmark.oldPrice,
            code: data.bookmark.code
        };

        context.commit('toggleBookmark', bookmarkData);
    }
}