import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [], filter: '' },

  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.unshift(action.payload);
      },
      prepare(newContact) {
        return { payload: { ...newContact, id: nanoid() } };
      },
    },
    getFilter: {
      reducer(state, action) {
        console.log(action.payload);
        state.filter = action.payload;
      },
    },

    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(el => el.id !== action.payload.id);
    },
  },
});

export const { addContact, deleteContact, getFilter } = contactSlice.actions;
export default contactSlice.reducer;
