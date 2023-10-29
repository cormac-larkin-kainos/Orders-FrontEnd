import { Application, Request, Response } from "express";
import { ProductResponse } from "../model/ProductResponse";
import ProductService from "../service/ProductService";

module.exports = function(app: Application) {
    
    let productService: ProductService = new ProductService();

    // Route to view all products
    app.get("/products", async (req: Request, res: Response) => {

        let products: ProductResponse[];

        try {
            products = await productService.getAllProducts();
        } catch (error) {
            console.error(error.message);
        }
        
        return res.render("view-all-products", { products });

    });

}