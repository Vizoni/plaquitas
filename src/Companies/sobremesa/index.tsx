import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Sobremesa() {
	const image1: any = "./companies/sobremesa/1.webp";
	const image2: any = "./companies/sobremesa/2.webp";
	const image3: any = "./companies/sobremesa/3.webp";

	const SkeletonComponent = (
		<Skeleton count={1} style={{ margin: "0.5rem" }} height={"30vh"} />
	);

	return (
		<>
			<LazyLoadImage
				src={image1}
				threshold={100}
				effect={"blur"}
				placeholder={SkeletonComponent}
				width={"100%"}
			/>
			<LazyLoadImage
				src={image2}
				threshold={100}
				effect={"blur"}
				placeholder={SkeletonComponent}
				width={"100%"}
			/>
			<LazyLoadImage
				src={image3}
				threshold={100}
				effect={"blur"}
				placeholder={SkeletonComponent}
				width={"100%"}
			/>
		</>
	);
}

export default Sobremesa;
