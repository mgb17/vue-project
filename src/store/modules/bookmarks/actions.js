export default {
    addBookmark(context, data) {
        const bookmarkData = {
            productTitle: data.title,
            productPrice: data.price
        };

        bookmarkData.id = data.bookmarkId

        context.commit('addBookmark', bookmarkData);
    }
}