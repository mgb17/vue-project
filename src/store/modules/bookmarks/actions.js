export default {
    toggleBookmark(context, data) {
        const bookmarkData = {
            productTitle: data.title,
            productPrice: data.price
        };

        bookmarkData.id = data.bookmarkId

        context.commit('toggleBookmark', bookmarkData);
    },
}