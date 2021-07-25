import {
	Box,
	Button,
	Divider,
	makeStyles,
	Typography,
} from "@material-ui/core";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { products } from "../../constants/data";
import Countdown from "react-countdown";
import green from "@material-ui/core/colors/green";

const responsive = {
	superLargeDesktop: {
		// the naming can be any, depends on you.
		breakpoint: { max: 4000, min: 3000 },
		items: 5,
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 3,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 2,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
	},
};

const useStyles = makeStyles({
	component: {
		marginTop: 12,
		backgroundColor: "#ffffff",
	},
	deal: {
		padding: "15px 20px",
		display: "flex",
	},
	image: {
		height: 150,
	},
	dealText: {
		fontSize: 22,
		fontWeight: 600,
		lineHeight: "32px",
		marginRight: 25,
	},
	timer: {
		color: "#7f7f7f",
		marginLeft: 10,
		display: "flex",
		alignItems: "center",
	},
	button: {
		marginLeft: "auto",
		background: "#2870f4",
		borderRadius: 2,
		fontSize: 13,
		color: "#ffffff",
	},
	text: {
		fontSize: 14,
		marginTop: 5,
	},
	wrapper: {
		padding: "35px 10px",
	},
});
const Slide = ({ timer, title }) => {
	const classes = useStyles();
	const timerURL =
		"https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg";

	const renderer = ({ hours, minutes, seconds }) => {
		return (
			<span className={classes.timer}>
				{hours}:{minutes}:{seconds} left
			</span>
		);
	};

	return (
		<Box className={classes.component}>
			<Box className={classes.deal}>
				<Typography className={classes.dealText}>{title}</Typography>
				{timer && (
					<>
						<img src={timerURL} style={{ width: 24 }} />
						<Countdown date={Date.now() + 5.0e7} renderer={renderer} />
						<Button variant='contained' className={classes.button}>
							View All
						</Button>
					</>
				)}
			</Box>
			<Divider />
			<Carousel
				responsive={responsive}
				infinite={true}
				draggable={false}
				swipeable={false}
				centerMode={true}
				autoPlay={true}
				keyBoardControl={true}
				showDots={false}
				removeArrowOnDeviceType={["tablet", "mobile"]}
				dotListClass='custom-dot-list-style'
				itemClass='carousel-item-padding-40-px'
				containerClass='carousel-container'
			>
				{products.map((product) => (
					<Box textAlign='center' key={product.id} className={classes.wrapper}>
						<img src={product.url} className={classes.image} />
						<Typography
							className={classes.text}
							style={{ fontWeight: 600, color: "#212121" }}
						>
							{product.title.shortTitle}
						</Typography>
						<Typography
							className={classes.text}
							style={{ fontWeight: 600, color: "green", opacity: "0.7" }}
						>
							{product.discount}
						</Typography>
						<Typography
							className={classes.text}
							style={{ color: "#212121", opacity: ".6" }}
						>
							{product.tagline}
						</Typography>
					</Box>
				))}
			</Carousel>
		</Box>
	);
};

export default Slide;
