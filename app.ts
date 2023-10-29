import express, { Request, Response } from "express";
import path from "path";
import nunjucks from "nunjucks";
import session from "express-session";


const app = express();

// Configure Nunjucks
const appViews = path.join(__dirname, "/views/");

const nunjucksConfig = {
    autoescape: true,
    noCache: true,
    express: app
}
nunjucks.configure(appViews, nunjucksConfig);

// Configure Express
app.set("view engine", "html");
app.use("/public", express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// Configure express-session
app.use(session({ secret: "HARDCODED SECRET", 
    cookie: { maxAge: 60000000 }, 
    saveUninitialized: false, 
    resave: false
}))

app.listen(3000, () => {
    console.log("*** Server listening on Port 3000 ***");
})

// Express routes
app.get("/", (req: Request, res: Response) => {
    res.render("index", {
        title: "Engineering Academy - NodeJS"
    })
});

require("./controller/ProductController")(app);
require("./controller/CustomerController")(app);