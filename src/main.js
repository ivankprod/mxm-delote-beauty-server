import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import routeServices from "#core/routes/services.js";

const app = express();

app.use(cors({ origin: "http://localhost:5173" }));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/services", routeServices);

app.listen(8000, () => {
	console.log("Listening at localhost:8000");
});
