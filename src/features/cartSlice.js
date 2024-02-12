import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        user: "UserLogged",
        updatedAt: Date.now().toLocaleString(),
        total: 0,
        items: []
    },
    reducers: {

        addItem: (state, action) => {
            const isProductInCart = state.items.find(item => item.id === action.payload.id)
            if (!isProductInCart) {
                state.items.push(action.payload)
                const total = state.items.reduce(
                    (acc, current) => acc += current.price * current.quantity, 0
                )
                state.total = total
                state = {
                    ...state,
                    total,
                    updatedAt: Date.now().toLocaleString()
                }
            } else {
                const itemsUpdated = state.items.map(item => {
                    if (item.id === action.payload.id) {
                        item.quantity += action.payload.quantity
                        return item
                    }
                    return item
                })
                const total = itemsUpdated.reduce(
                    (acc, current) => acc += current.price * current.quantity, 0
                )
                state.total = total
                state = {
                    ...state,
                    items: itemsUpdated,
                    total,
                    updatedAt: Date.now().toLocaleString()
                }
            }
        },
        removeItem: (state, action) => {
            const index = state.items.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state.items.splice(index, 1);
                state.total = state.items.reduce(
                    (acc, current) => acc += current.price * current.quantity, 0
                );
                state.updatedAt = Date.now().toLocaleString();
            }
        }
    }
})

export const { addItem, removeItem } = cartSlice.actions

export default cartSlice.reducer