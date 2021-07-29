import { Box, Button, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FlashOnIcon from "@material-ui/icons/FlashOn";

const useStyles = makeStyles({
	leftContainer: {
		padding: "40px 0 0 40px",
	},
	image: {
		padding: "15px 5px",
		border: "1px solid #f0f0f0",
		image: "85%",
	},
	button: {
		height: 50,
		width: "46%",
		borderRadius: 2,
	},
	addToCart: {
		background: "#ff9f00",
		color: "#fff",
		marginRight: 10,
	},
	buyNow: {
		background: "#fb641b",
		color: "#fff",
	},
});

const ActionItems = ({ product }) => {
	const classes = useStyles();
	return (
		<Box className={classes.leftContainer}>
			<img src={product.detailUrl} className={classes.image} />
			<Button
				variant='contained'
				className={clsx(classes.button, classes.addToCart)}
			>
				<ShoppingCartIcon />
				Add to Cart
			</Button>
			<Button
				variant='contained'
				className={clsx(classes.button, classes.buyNow)}
			>
				<FlashOnIcon />
				Buy Now
			</Button>
		</Box>
	);
};

export default ActionItems;
