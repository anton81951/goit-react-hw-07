import { configureStore } from '@reduxjs/toolkit';
import contactsSlice from './contactsSlice';
import { filtersReducer } from './filtersSlice';
const store = configureStore({
  reducer: {
    contacts: contactsSlice,
    filters: filtersReducer,
  },
});

export default store;