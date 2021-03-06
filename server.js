const express = require("express");

console.log("Starting server...");

const path = require("path");
const { resolve } = require("path");
const app = express();

app.use("/", express.static(resolve(__dirname, "./dist")));

app.get("/*", (req, res) => {
	res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(process.env.PORT || 3000, (err) => {
	err ? console.log("error", err) : console.log("Funcionando...");
});
