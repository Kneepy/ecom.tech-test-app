import type {Product} from "./types";
import testImage from "@assets/images/test.png"

export const ProductApi = {
    async getAll(): Promise<Product[]> {
        return new Promise((resolve) => resolve(Array(5).fill({
            id: 1,
            title: "[eke ,ellewegewgweg",
            price: 4424,
            category: "fwefewg",
            image: testImage,
            description: "fegewgewgewgwegevsbagfdntdhtjhewgag fhgherhWEHE",
        })))
    }
}