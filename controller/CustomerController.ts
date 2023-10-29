import { Application, Request, Response } from "express";
import { Customer } from "../model/Customer";
import CustomerService from "../service/CustomerService";

module.exports = function(app: Application) {
    
    let customerService: CustomerService = new CustomerService();

    // Route to view all customers
    app.get("/customers", async (req: Request, res: Response) => {

        let customers: Customer[];

        try {
            customers = await customerService.getAllCustomers();
        } catch (error) {
            console.error(error.message);
        }
        
        return res.render("view-all-customers", { customers });

    });

}