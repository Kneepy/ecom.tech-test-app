import {create} from "zustand/react";
import {createProductSlice} from "@store/slices";
import type {ProductsSlice} from "@store/types";

export const useStore = create<ProductsSlice>()((...a) => ({
    ...createProductSlice(...a)
}))