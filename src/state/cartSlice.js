import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    products: [],
    finalAmount: 0
};

if (localStorage.getItem("cartproducts") != null) {
    initialState = JSON.parse(localStorage.getItem("cartproducts"));
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        // storeAddToCart: (state, action) => {
        //   //state.value += action.payload;
        //   let found = false;
        //   state.forEach((product) => {
        //     if (product.id === action.payload.id) {
        //       found = true;
        //     }
        //   });
        //   if (!found) state.push(action.payload);

        //   localStorage.setItem("cartproducts", JSON.stringify(state));
        // },


        storeAddToCart: (state, action) => {
            //state.value += action.payload;
            const product = action.payload;
            const findProduct = state.products.find(item => item.id === product.id);
            if (findProduct) {
                findProduct.quantity += 1;
            } else {
                state.products.push(action.payload)
            }

            // localStorage.setItem("cartproducts", JSON.stringify(state));
        },

        storeRemoveProduct: (state, action) => {
            // for (var i = 0; i < state.length; i++) {
            //     var product = state[i];
            //     if (product.id === action.payload) {
            //         state.splice(i, 1);
            //     }
            // }
            // //Call API
            // localStorage.setItem("cartproducts", JSON.stringify(state));
            state.products = state.products.filter((item) => item.id !== action.payload)

        },
        incrementQuantity: (state, action) => {
            const productId = action.payload;
            const product = state.products.find(item => item.id === productId);
            if (product) {
                product.quantity += 1;
            }
        },
        decrementQuantity: (state, action) => {
            const productId = action.payload;
            const product = state.products.find(item => item.id === productId);
            if (product && product.quantity > 1) {
                product.quantity -= 1;
            }
        },
        setTotalAmount: (state, action) => {
            state.finalAmount = action.payload
        },
        setDiscountAmount: (state, action) => {
            // console.log(action.payload);
            state.finalAmount = state.finalAmount -= action.payload
            console.log(state.finalAmount);
        }
    },
});
export const { storeAddToCart, storeRemoveProduct, incrementQuantity, decrementQuantity, setTotalAmount, setDiscountAmount } = cartSlice.actions;
export default cartSlice.reducer;
