const express = require("express");

console.log("Starting server...");

const { resolve } = require("path");
const app = express();

app.use("/", express.static(resolve(__dirname, "./dist")));

app.listen(process.env.PORT || 3000, () => {
	if (err) {
		return console.log("ERRO", err);
	} else {
		console.log("Tudo funcionando certinho");
	}
});
