//import os from "os";
import fs from "fs";
import express from "express";

export const routeServices = express.Router();

routeServices.get("/get", (_, res) => {
	try {
		const services = JSON.parse(fs.readFileSync("./src/store/services.json"));

		return res.json(services);
	} catch (e) {
		return res.status(500).send("Ошибка сервера: " + e);
	}
});

/*routeServices.post("/add", (req, res) => {
	const data = req.body;

	if (!data) return res.status(400).send("Неверный запрос");

	try {
		const curCart = JSON.parse(fs.readFileSync("./src/store/cart.json"));
		const finalCart = [...curCart, data];

		fs.writeFileSync(
			"./src/store/services.json",
			JSON.stringify(finalCart, null, "	").replace(/\n/, os.EOL)
		);

		return res.send("Сервис успешно добавлен");
	} catch (e) {
		return res.status(500).send("Ошибка сервера: " + e);
	}
});*/

export default routeServices;
