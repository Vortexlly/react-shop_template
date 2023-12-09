import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem(state, action) {
            state.items.push(action.payload);
        },
        deleteItem(state, action) {
            const idToDelete = action.payload;
            state.items = state.items.filter(item => item.id !== idToDelete );
        },
        incrementQuantity(state, action) {
            const idToIncrement = action.payload;
            const result = state.items.indexOf(state.items.find(item => item.id === idToIncrement));
            state.items[result].quantity += 1;
        },
        decrementQuantity(state, action) {
            const idToIncrement = action.payload;
            const result = state.items.indexOf(state.items.find(item => item.id === idToIncrement));
            state.items[result].quantity -= 1;
        }
    }
});

export default cartSlice.reducer;
export const {addItem, deleteItem, incrementQuantity, decrementQuantity} = cartSlice.actions; 