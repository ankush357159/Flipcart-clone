import Header from "./components/header/Header";
import Home from "./components/home/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Cart from "./components/cart/Cart";
import { Box } from "@material-ui/core";
import { TemplateProvider } from "./templates/TemplateProvider";
import ContextProvider from "./context/ContextProvider";

function App() {
	return (
		<TemplateProvider>
			<ContextProvider>
				<BrowserRouter>
					<Header />
					<Box style={{ marginTop: 54 }}>
						<Switch>
							<Route exact path='/' component={Home} />
							<Route path='/cart' component={Cart} />
						</Switch>
					</Box>
				</BrowserRouter>
			</ContextProvider>
		</TemplateProvider>
	);
}

export default App;
