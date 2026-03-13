import type {Product} from "./types";
import testImage from "@assets/images/test.png"

export const ProductApi = {
    async getAll(): Promise<Product[]> {
        return new Promise((resolve) => resolve(Array(5).fill(1).map((_, i) => ({
            id: i,
            title: `Hello ${i + 1}`,
            price: 10*i,
            category: `category ${i + 1}`,
            image: testImage,
            description: `Hello world ${i + 1}`,
        }))))
    }
}