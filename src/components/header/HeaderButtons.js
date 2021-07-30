import { Badge, Box, Button, makeStyles, Typography } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

//components
import LoginDialog from "../login/Login";
import { LoginContext } from "../../context/ContextProvider";
import Profile from "./Profile";

const useStyles = makeStyles({
	login: {
		backgroundColor: "#ffffff",
		color: "#2874f0",
		textTransform: "none",
		fontSize: 16,
		fontWeight: 600,
		borderRadius: 2,
		padding: "5px 30px",
		boxShadow: "none",
	},
	wrapper: {
		margin: "0 5% 0 auto",
		display: "flex",
		"& > * ": {
			marginRight: 50,
			fontSize: 12,
			textDecoration: "none",
			color: "#fff",
			alignItems: "center",
		},
	},
	container: {
		display: "flex",
	},	
});
const HeaderButtons = () => {
	const classes = useStyles();
	const [open, setOpen] = useState(false);
	const { account, setAccount } = useContext(LoginContext);

	const { cartItems } = useSelector((state) => state.cart);

	const openLoginDialog = () => {
		setOpen(true);
	};
	return (
		<Box className={classes.wrapper}>
			{account ? (
				<Profile account={account} setAccount={setAccount} />
			) : (
				<Link>
					<Button
						variant='contained'
						className={classes.login}
						onClick={() => openLoginDialog()}
					>
						Login
					</Button>
				</Link>
			)}

			<Link>
				<Typography style={{ marginTop: 5 }}>More</Typography>
			</Link>
			<Link to='/cart' className={classes.container}>
				<Badge badgeContent={cartItems?.length} color='secondary'>
					<ShoppingCartIcon />
				</Badge>
				<Typography style={{ marginLeft: 10 }}>Cart</Typography>
			</Link>
			<LoginDialog open={open} setOpen={setOpen} setAccount={setAccount} />
		</Box>
	);
};

export default HeaderButtons;
