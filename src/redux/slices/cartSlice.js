import { createSlice } from "@reduxjs/toolkit";



const initialState={
    cartItems:[],
    totalAmount:0,
    totalQuantity:0,
}


const cartSlice = createSlice({
    name:'cart',
    initialState: initialState,
    reducers:{
        addItem:(state,{payload})=>{
            const newItem = payload;
            const existingItem = state.cartItems.find((item)=> item.id == newItem.id);

            state.totalQuantity ++

            if(!existingItem){
                state.cartItems.push({
                    id:newItem.id,
                    productName:newItem.productName,
                    imgUrl:newItem.imgUrl,
                    price:newItem.price,
                    quantity:1,
                    totalItemPrice:newItem.price,
                })
            }else{
                existingItem.quantity ++
                existingItem.totalItemPrice = Number(existingItem.price) + Number(newItem.price);
            }

            state.totalAmount = state.cartItems.reduce((accumulator,item)=> accumulator + (item.price * item.quantity),0 ); 

            // console.log(state.totalAmount);
            // console.log(state.totalQuantity);
            // console.log(newItem);
            // console.log(state);
        },
        deleteItem:(state,{payload})=>{
            const existingItem = state.cartItems.find(item => item.id == payload);
            state.totalQuantity = state.totalQuantity - existingItem.quantity;

            if(existingItem){
            state.cartItems = state.cartItems.filter(item => item.id !== payload);
            state.totalAmount = state.cartItems.reduce((accumulator,item)=> accumulator + (item.price * item.quantity),0 ); 
                }
        }
    }
})


export default cartSlice.reducer;
export const {addItem,deleteItem} = cartSlice.actions;