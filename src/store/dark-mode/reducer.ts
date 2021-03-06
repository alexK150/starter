import {createSlice} from '@reduxjs/toolkit';

export const initialState = () => false;

const darkModeSlice = createSlice({
    name: 'darkMode',
    initialState,
    reducers: {
        toggleDarkModeAction(state) {
            return !state;
        }
    }
});

export const {toggleDarkModeAction} = darkModeSlice.actions;
const darkModeReducer = darkModeSlice.reducer;
export default darkModeReducer;
