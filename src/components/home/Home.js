import { Box, makeStyles } from "@material-ui/core";
import Banner from "./Banner";
import NavBar from "./NavBar";

const useStyles = makeStyles({
	component: {
		padding: 10,
		background: "#f2f2f2",
	},
});

const Home = () => {
	const classes = useStyles();
	return (
		<div>
			<NavBar />
			<Box className={classes.component}>
				<Banner />
			</Box>
		</div>
	);
};

export default Home;
