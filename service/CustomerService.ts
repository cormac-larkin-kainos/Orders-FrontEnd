import axios, { AxiosResponse } from "axios";
import { Customer } from "../model/Customer";

export default class ProductService {

    /**
     * Retrieves all customers from the API.
     * 
     * @returns An array of Customer objects, representing all of the customers in the database.
     */
    async getAllCustomers(): Promise<Customer[]> {

        let allCustomers: Customer[];

        try {
            const response: AxiosResponse = await axios.get("http://localhost:8080/api/customers");

            allCustomers = response.data;
            return allCustomers;

        } catch (error) {
            throw new Error("Unable to retrieve customers")
        }
    }
}