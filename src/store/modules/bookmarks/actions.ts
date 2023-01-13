export default {
    toggleBookmark(context, data) {
        const bookmarkData = {
            title: data.product.title,
            price: data.product.price,
            oldPrice: data.product.oldPrice,
            code: data.product.code,
            added: !data.product.added
        };

        context.commit('toggleBookmark', bookmarkData);
    },
}