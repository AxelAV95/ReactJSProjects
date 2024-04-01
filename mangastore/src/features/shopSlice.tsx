import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { InitialState } from "../interfaces/InitialState";

const initialState : InitialState= {
    cartItems: [],
    quantity: 0,
    total: 0
}

const shopSlice = createSlice({
    name: "shop",
    initialState,
    reducers: {
        addToCart: (state: InitialState, action: PayloadAction<Manga>) =>{
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id)
            if(itemIndex >= 0){
                state.cartItems[itemIndex].quantity += 1
            }else{
                const manga = {...action.payload, quantity: 1}
                state.cartItems.push(manga)
            }
        },
        cartTotal: (state: InitialState) =>{
            let quantity= 0
            let total= 0

            state.cartItems.forEach((item) =>{
                quantity += item.quantity
                total += item.quantity * item.price
            })

            state.quantity = quantity
            state.total = total
        }

    }
})

export const {addToCart,cartTotal } = shopSlice.actions
export default shopSlice.reducer