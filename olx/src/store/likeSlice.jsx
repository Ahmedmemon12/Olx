import { createSlice } from "@reduxjs/toolkit";

const likeSlice = createSlice({
    name: 'like',
    initialState: {
        liked: []
    },
    reducers: {
        updateLiked: (state, data) => {
            state.liked.push(data.payload)
        },
        removeLiked: (state, action) => {
            const itemIdToRemove = action.payload;
            state.liked = state.liked.filter(item => item.id !== itemIdToRemove);
        }
    }
})

export const { updateLiked, removeLiked } = likeSlice.actions

export default likeSlice