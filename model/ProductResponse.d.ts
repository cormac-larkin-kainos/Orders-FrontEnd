/**
 * The Product Response returned from the API.
 */
export type ProductResponse = {
    productID: number;
    name: string;
    description: string;
    price: number;
    supplierName: string;
    supplierID: number;
}