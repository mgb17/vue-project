export default {
    toggleBookmark(state, payload) {
    
        let check = state.bookmarks.some(el => el.code === payload.code);

        if(!check) {
            state.bookmarks.push(payload)
        } else {
            const index = state.bookmarks.findIndex(el => el.code === payload.code)
            state.bookmarks.splice(index, 1)
        }
    },
};