export default {
    toggleBookmark(state, payload) {
    
        let check = state.bookmarks.some(el => el.id === payload.id);

        if(!check) {
            state.bookmarks.push(payload)
        } else {
            state.bookmarks.pop(payload)
        }
    },
};