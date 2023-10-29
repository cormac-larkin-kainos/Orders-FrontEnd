import axios, { AxiosResponse } from "axios";
import { ProductResponse } from "../model/ProductResponse";

export default class ProductService {

    /**
     * Retrieves all products from the API.
     * 
     * @returns An array of ProductResponse objects, representing all of the Products in the database.
     */
    async getAllProducts(): Promise<ProductResponse[]> {

        let allProducts: ProductResponse[];

        try {
            const response: AxiosResponse = await axios.get("http://localhost:8080/api/products");

            allProducts = response.data;
            return allProducts;

        } catch (error) {
            throw new Error("Unable to retrieve products")
        }
    }
}