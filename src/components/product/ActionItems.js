import { Box, Button, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import { addToCart } from "../../redux/actions/cartActions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
	leftContainer: {
		padding: "40px 0 0 60px",
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
	const dispatch = useDispatch();
	const history = useHistory();
	const addItemToCart = () => {
		dispatch(addToCart(product.id));
		history.push("/cart");
	};
	return (
		<Box className={classes.leftContainer}>
			<img src={product.detailUrl} alt='' className={classes.image} /> <br />
			<Button
				onClick={() => addItemToCart()}
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
