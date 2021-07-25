import { useState } from "react";
import { Menu, MenuItem, Typography, makeStyles } from "@material-ui/core";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
	component: {
		marginTop: 40,
	},
	logout: {
		marginLeft: 20,
		fontSize: 14,
	},
});

const Profile = ({ account, setAccount }) => {
	const classes = useStyles();
	const [open, setOpen] = useState(false);
	const handleClose = () => {
		setOpen(false);
	};
	const handleClick = (event) => {
		setOpen(event.currentTarget);
	};
	const logout = () => {
		setAccount("");
	};

	return (
		<>
			<Link>
				<Typography onClick={handleClick} style={{ marginTop: 2 }}>
					{account}
				</Typography>
			</Link>
			<Menu
				anchorEl={open}
				open={Boolean(open)}
				onClose={handleClose}
				className={classes.component}
			>
				<MenuItem
					onClick={() => {
						handleClose();
						logout();
					}}
				>
					<PowerSettingsNewIcon
						style={{ fontSize: "small", color: "primary" }}
					/>
					<Typography className={classes.logout}>Logout</Typography>
				</MenuItem>
			</Menu>
		</>
	);
};

export default Profile;
