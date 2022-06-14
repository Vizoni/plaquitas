const express = require("express");

console.log("Starting server...");

const path = require("path");
const app = express();

// app.use("/", express.static(path.resolve(__dirname, "./dist")));
app.use("/", express.static(path.join(__dirname, "dist")));

app.listen(process.env.PORT || 3000, (err) => {
	err ? console.log("error", err) : console.log("Funcionando...");
});
