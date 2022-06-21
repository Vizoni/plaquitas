import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PadariaExemplo from "./Companies/padaria-exemplo";
import SorveteriaExemplo from "./Companies/sorveteria-exemplo";
import Hamburgueria from "./Companies/hamburgueria";
import Sobremesa from "./Companies/sobremesa";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/padaria" element={<PadariaExemplo />} />
				<Route path="/sorveteria" element={<SorveteriaExemplo />} />
				<Route path="/burguer" element={<Hamburgueria />} />
				<Route path="/sobremesa" element={<Sobremesa />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
