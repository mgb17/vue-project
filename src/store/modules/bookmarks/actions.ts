export default {
    toggleBookmark(context, data) {
        const bookmarkData = {
            code: data.product.code,
            title: data.product.title,
            price: data.product.price,
            oldPrice: data.product.oldPrice,
            variant: data.product.variant,
            info: data.product.info,
            availability: data.product.availability,
            priceOffer: data.product.priceOffer
        };

        context.commit('toggleBookmark', bookmarkData);
    },
}