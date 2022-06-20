import React, { lazy } from "react";
import { Container, Container2, Container3 } from "./styles";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function PadariaExemplo() {
	// const image1: any = lazy(() => import("./companies/hamburgueria/1.png"));
	// const image2: any = lazy(() => import("./companies/hamburgueria/2.png"));
	// const image3: any = lazy(() => import("./companies/hamburgueria/3.png"));
	const image1: any = "./companies/hamburgueria/1.png";
	const image2: any = "./companies/hamburgueria/2.png";
	const image3: any = "./companies/hamburgueria/3.png";

	return (
		<>
			{/* <Container />
			<Container2 />
			<Container3 /> */}
			<LazyLoadImage src={image1} threshold={100} effect={"blur"} />
			<LazyLoadImage src={image2} threshold={100} effect={"blur"} />
			<LazyLoadImage src={image3} threshold={100} effect={"blur"} />
		</>
	);
}

export default PadariaExemplo;
