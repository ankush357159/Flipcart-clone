import { Badge, Box, Button, makeStyles, Typography } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
	login: {
		backgroundColor: "#ffffff",
		color: "#2874f0",
		textTransform: "none",
		fontSize: 16,
		fontWeight: 500,
		borderRadius: 2,
		padding: "0 30px",
		boxShadow: "none",
	},
	wrapper: {
		margin: "0 8% 0 auto",
		display: "flex",
		"& > * ": {
			marginRight: 50,
			fontSize: 20,
			textDecoration: "none",
			color: "#fff",
		},
		alignItems: "center",

		container: {
			display: "flex",
		},
	},
});
const HeaderButtons = () => {
	const classes = useStyles();
	return (
		<Box className={classes.wrapper}>
			<Link>
				<Button variant='contained' className={classes.login}>
					Login
				</Button>
			</Link>

			<Link>
				<Typography style={{ marginTop: 5 }}>More</Typography>
			</Link>
			<Link to='/cart' className={classes.container}>
				<Badge badgeContent={3} color='secondary'>
					<ShoppingCartIcon />
					<Typography style={{ marginLeft: 10 }}>Cart</Typography>
				</Badge>
			</Link>
		</Box>
	);
};

export default HeaderButtons;
