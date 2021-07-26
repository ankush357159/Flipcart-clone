import { Box, makeStyles } from "@material-ui/core";
import Banner from "./Banner";
import NavBar from "./NavBar";
import Slide from "./Slide";
import MidSection from "./MidSection";

//import { products } from "../../constants/data";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts as listProducts } from "../../redux/actions/productActions";

const useStyles = makeStyles({
	component: {
		padding: 10,
		background: "#f2f2f2",
	},
	rightWrapper: {
		background: "#FFFFFF",
		padding: 5,
		margin: "12px 0 0 10px",
		width: "20%",
	},
});

const Home = () => {
	const classes = useStyles();
	const adURL =
		"https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70";

	const getProducts = useSelector((state) => state.getProducts);
	const { products } = getProducts;

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(listProducts());
	}, [dispatch]);
	return (
		<div>
			<NavBar />
			<Box className={classes.component}>
				<Banner />

				<Box style={{ display: "flex" }}>
					<Box style={{ width: "80%" }}>
						<Slide timer={true} title='Deal of the day' products={products} />
					</Box>
					<Box className={classes.rightWrapper}>
						<img src={adURL} style={{ width: 230 }} />
					</Box>
				</Box>
			</Box>
			<MidSection />
			<Slide timer={false} title='Discounts for you' products={products} />
			<Slide timer={false} title='Suggested items' products={products} />
			<Slide timer={false} title='Top Selection' products={products} />
			<Slide timer={false} title='Recommended items' products={products} />
			<Slide timer={false} title='Best Sellers' products={products} />
		</div>
	);
};

export default Home;
