import fs from "fs";
import express from "express";

export const routeServices = express.Router();

routeServices.get("/get", (req, res) => {
	try {
		const paramPage = parseInt(req.query.page);
		const paramServicesPerPage = parseInt(req.query.per_page);

		let services = JSON.parse(fs.readFileSync("./src/store/services.json"));
		const servicesCount = services.length;

		if (paramPage > 0) {
			if (paramPage > Math.floor(services.length / paramPage)) {
				return res.status(400).send("Неверный запрос");
			}

			services = services.slice(
				(paramPage - 1) * paramServicesPerPage,
				(paramPage - 1) * paramServicesPerPage + paramServicesPerPage
			);
		}

		return res.json({
			data: services,
			dataPage: paramPage,
			dataCount: servicesCount
		});
	} catch (e) {
		return res.status(500).send("Ошибка сервера: " + e);
	}
});

export default routeServices;
