import Header from "./components/header/Header";
import Home from "./components/home/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Cart from "./components/cart/Cart";
import { Box } from "@material-ui/core";
function App() {
	return (
		<BrowserRouter>
			<Header />
			<Box style={{ marginTop: 54 }}>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/cart' component={Cart} />
				</Switch>
			</Box>
		</BrowserRouter>
	);
}

export default App;
