import { configureStore } from '@reduxjs/toolkit';

// Reducer
import users from './slices/users';

export default configureStore({
    reducer: {
        users
    }
});