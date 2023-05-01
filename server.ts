import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { sequelize } from "./model/index";
import { router } from "./app/routes";
// swagger config
import { serve, setup} from "swagger-ui-express";
const swaggerDoc = require("./swaggerDoc/swagger.json");
const app = express();

var corsOptons = {origin: "http://localhost:8080/"};
app.use(cors(corsOptons));

// parse requests of content-type - application/json

app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded

app.use(bodyParser.urlencoded({extended:true}));

//simple route
app.get ('/', (req: any , res: any) => {
res.json({message: 'Welcome to Ineurona App'});
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;

app.use ('/api/items', router);
app.use("/api-docs", serve, setup(swaggerDoc));
app.listen(PORT, () => {
console.log (`Server is running on port ${PORT}.` );
});
sequelize.sync();
export {app}
