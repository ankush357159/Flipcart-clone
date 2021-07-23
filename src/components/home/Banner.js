import Carousel from "react-material-ui-carousel";
import { bannerData } from "../../constants/data";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
	image: {
		width: "100%",
		height: 280,
	},
	carousel: {
		marginTop: 10,
	},
});

const Banner = () => {
	const classes = useStyles();
	return (
		<Carousel
			autoPlay={true}
			animation='slide'
			indicators={false}
			navButtonsAlwaysVisible={true}
			navButtonsProps={{
				style: {
					background: "#FFFFFF",
					color: "#494949",
					borderRadius: 0,
					margin: 0,
				},
			}}
			className={classes.carousel}
		>
			{bannerData.map((image) => (
				<img src={image} key={image} className={classes.image} alt='image' />
			))}
		</Carousel>
	);
};

export default Banner;
