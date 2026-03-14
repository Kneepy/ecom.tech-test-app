import type {Product} from "./types";
import testImage from "@assets/images/test.png"

export const MockProductApi = {
    async getAll(): Promise<Product[]> {
        return new Promise((resolve) => resolve(Array(10).fill(1).map((_, i) => ({
            id: i,
            title: `Product ${i} Звук клавиш печатной машинки развеял последние сомнения`,
            price: Math.round(1000*Math.random()),
            category: `category ${i%4}`,
            image: testImage,
            description: `Принимая во внимание показатели успешности, высокое качество позиционных исследований позволяет оценить значение глубокомысленных рассуждений. Не следует, однако, забывать, что реализация намеченных плановых заданий влечет за собой процесс внедрения и модернизации переосмысления внешнеэкономических политик.`,
        }))))
    }
}