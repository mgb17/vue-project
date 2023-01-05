export default {
    toggleBookmark(state, payload) {
    
        let check = state.bookmarks.some(el => el.code === payload.code);

        if(!check) {
            state.bookmarks.push(payload)
        } else {
            state.bookmarks.pop(payload)
        }
    },
};