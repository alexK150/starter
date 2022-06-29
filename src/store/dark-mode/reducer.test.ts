import darkModeReducer, {initialState, toggleDarkModeAction} from './reducer';
import {PayloadAction} from '@reduxjs/toolkit';
//15
describe('dark mode reducer', () => {
    test('should return initial state if unknown action', () => {
        expect(darkModeReducer(undefined, {} as PayloadAction)).toEqual(initialState());
    });
    test('should turn off dark mode', () => {
        expect(darkModeReducer(false, toggleDarkModeAction)).toEqual(true);
    });
    test('should turn on dark mode', () => {
        expect(darkModeReducer(true, toggleDarkModeAction)).toEqual(false);
    });
});
