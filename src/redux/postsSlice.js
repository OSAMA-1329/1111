import { createSlice } from '@reduxjs/toolkit'

export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        items: [{
            id: 1,
            title: "JavaScript",
            content: "JavaScript is the world's most popular programming language."
        },
        {
            id: 2,
            title: "Java",
            content: "Java is used to develop mobile apps, web apps, desktop apps, games and much more."
        },
        {
            id: 3,
            title: "JavaScript",
            content: "Python can be used on a server to create web applications."
        },
        ]
    },
    reducers: {
        addPost: function (state, action) {
            state.items.push(action.payload)
        },
        deletePost: function (state, action) {
            state.items = state.items.filter((item) => item.id !== action.payload)
        },
        updatedPost: function (state, action) {
            state.items.forEach(item => {
                if (item.id === action.payload.id) {
                    item.title = action.payload.title;
                    item.content = action.payload.content;
                }
            })
        }
    }
})

export const { addPost, deletePost, updatedPost } = postsSlice.actions

export default postsSlice.reducer