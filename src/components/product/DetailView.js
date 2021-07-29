import {
	Box,
	makeStyles,
	Table,
	TableBody,
	TableRow,
	TableCell,
	Typography,
} from "@material-ui/core";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetails } from "../../redux/actions/productActions";
import clsx from "clsx";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import ActionItems from "./ActionItems";

const useStyles = makeStyles({
	component: {
		marginTop: 55,
		background: "#f2f2f2",
	},
	container: {
		margin: "0 80px",
		background: "#fff",
		display: "flex",
	},
	rightContainer: {
		marginTop: 50,
		"& > *": {
			marginTop: 10,
		},
	},
	smallText: {
		fontSize: 14,
		verticalAlign: "baseline",
		"& > *": {
			fontSize: 14,
			marginTop: 10,
		},
	},
	greyTextColor: {
		color: "#878787",
	},
	price: {
		fontSize: 28,
	},
	badge: {
		fontSize: 14,
		marginRight: 10,
		color: "#00cc00",
	},
});
const DetailView = ({ match }) => {
	const classes = useStyles();
	const fassured =
		"https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
	const sellerURL =
		"https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50";

	const { product } = useSelector((state) => state.getProductDetails);

	const date = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProductDetails(match.params.id));
	}, [dispatch]);
	return (
		<Box className={classes.component}>
			{product && Object.keys(product).length && (
				<Box className={classes.container}>
					<Box style={{ minWidth: "40%" }}>
						<ActionItems product={product} />
					</Box>
					<Box className={classes.rightContainer}>
						<Typography>{product.title.longTitle}</Typography>
						<Typography
							className={clsx(classes.smallText, classes.greyTextColor)}
						>
							8 Ratings and 1 Review
							<span>
								<img
									src={fassured}
									alt=''
									style={{ width: 77, marginLeft: 20 }}
								/>
							</span>
						</Typography>
						<Typography>
							<span className={classes.price}>₹{product.price.cost}</span>{" "}
							&nbsp;&nbsp;&nbsp;
							<span className={classes.greyTextColor}>
								<strike>₹{product.price.mrp}</strike>
							</span>{" "}
							&nbsp;&nbsp;&nbsp;&nbsp;
							<span style={{ color: "#388e3c" }}>
								{product.price.discount} off
							</span>{" "}
							&nbsp;&nbsp;&nbsp;&nbsp;
						</Typography>
						<Typography style={{ marginTop: 20, fontWeight: 600 }}>
							Available Offers
						</Typography>

						<Box className={classes.smallText}>
							<Typography>
								<span style={{ fontWeight: 600 }}>
									<LocalOfferIcon className={classes.badge} />
									Bank Offer
								</span>{" "}
								10% off on ICICI Bank Credit Cards, up to ₹1500. On orders of
								₹5000 and above
							</Typography>
							<Typography>
								<span style={{ fontWeight: 600 }}>
									<LocalOfferIcon className={classes.badge} />
									Bank Offer
								</span>{" "}
								10% off on ICICI Bank Debit Cards, up to ₹500. On orders of
								₹5000 and above
							</Typography>
							<Typography>
								<span style={{ fontWeight: 600 }}>
									<LocalOfferIcon className={classes.badge} />
									Bank Offer
								</span>{" "}
								5% Unlimited Cashback on Flipkart Axis Bank Credit Card
							</Typography>
							<Typography>
								<span style={{ fontWeight: 600 }}>
									<LocalOfferIcon className={classes.badge} />
									Partner Offer
								</span>{" "}
								Purchase select Tablets and get Edukemy’s Neev course worth
								₹4999, for free
							</Typography>
						</Box>
						<Table>
							<TableBody>
								<TableRow className={classes.smallText}>
									<TableCell className={classes.greyTextColor}>
										Delivery
									</TableCell>
									<TableCell style={{ fontWeight: 600 }}>
										{date.toDateString()} | ₹40
									</TableCell>
								</TableRow>
								<TableRow className={classes.smallText}>
									<TableCell className={classes.greyTextColor}>
										Warranty
									</TableCell>
									<TableCell>No Warranty</TableCell>
								</TableRow>
								<TableRow className={classes.smallText}>
									<TableCell className={classes.greyTextColor}>
										Seller
									</TableCell>
									<TableCell className={classes.smallText}>
										<span style={{ color: "#2874f0" }}>SupercomNet</span>
										<Typography>
											7 day seller replacement policy/brand assistance for
											device issues*
										</Typography>
										<Typography>GST Invoice Available</Typography>
										<Typography>
											View more sellers starting from ₹300
										</Typography>
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell colSpan={2}>
										<img src={sellerURL} alt='' style={{ width: 390 }} />
									</TableCell>
								</TableRow>
								<TableRow className={classes.smallText}>
									<TableCell className={classes.greyTextColor}>
										Description
									</TableCell>
									<TableCell>{product.description}</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</Box>
				</Box>
			)}
		</Box>
	);
};

export default DetailView;
