import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'user',
    initialState: {
        authUser: null,
    },
    reducers: {
        signup: (state, action) => {
            state.authUser = action.payload
        },
        signin: (state, action) => {
            state.authUser = action.payload
            localStorage.setItem('authUser', JSON.stringify(action.payload.user))
            console.log(action.payload.user)
        },
        logout: (state) => {
            state.authUser = null
        }
    }
})

export const { signup, signin } = authSlice.actions

export default authSlice.reducer