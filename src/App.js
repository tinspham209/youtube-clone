import React, { Suspense } from "react";
import NotFound from "./components/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";

const HomePageContainer = React.lazy(() => import("./container"));
const SearchPageContainer = React.lazy(() => import("./container/SearchPage"));

function App() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Router>
				<Header />

				<Switch>
					<Route exact path="/" component={HomePageContainer}></Route>
					<Route path="/search/:searchTerm">
						<SearchPageContainer />
					</Route>

					<Route component={NotFound} />
				</Switch>
			</Router>
		</Suspense>
	);
}

export default App;
