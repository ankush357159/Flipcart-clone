import { navData } from "../../constants/data";
import { Box, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
	component: {
		display: "flex",
		margin: "0 20px 0 20px",
		justifyContent: "space-between",
	},
	container: {
		textAlign: "center",
	},
	image: {
		width: 60,
	},
	text: {
		fontSize: 14,
		fontWeight: 600,
	},
});
const NavBar = () => {
	const classes = useStyles();
	return (
		<Box className={classes.component}>
			{navData.map((data) => (
				<Box className={classes.container}>
					<img
						src={data.url}
						key={data.url}
						className={classes.image}
						alt='url'
					/>
					<Typography className={classes.text}>{data.text}</Typography>
				</Box>
			))}
		</Box>
	);
};

export default NavBar;
