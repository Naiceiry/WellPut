import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import injectContext from "./store/appContext";

import { Home } from "./pages/home";
import { EditProfile } from "./pages/editProfile";
import { Profile } from "./pages/profile";
import { OwnerProfile } from "./pages/ownerProfile";
import { UserProfile } from "./pages/userProfile";
import { Announcements } from "./pages/announcements";
import { Favorites } from "./pages/favorites";
import { NewAnnouncement } from "./pages/newAnnouncement";
import { Navbar } from "./component/navbar";
import { DetailedView } from "./pages/detailedView";
import { Reviews } from "./pages/reviewsVi";

const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/home/">
							<Home />
						</Route>
						<Route exact path="/detailedView/:room_id">
							<DetailedView />
						</Route>
						<Route exact path="/edit_profile/:user_id">
							<EditProfile />
						</Route>
						<Route exact path="/profile/:user_id">
							<Profile />
						</Route>
						<Route exact path="/owner-profile/:owner_id">
							<OwnerProfile />
						</Route>
						<Route exact path="/user-profile/:renter_id">
							<UserProfile />
						</Route>
						<Route exact path="/announcements">
							<Announcements />
						</Route>
						<Route exact path="/newAnnouncement">
							<NewAnnouncement />
						</Route>
						<Route exact path="/favorites">
							<Favorites />
						</Route>
						{/* <Route exact path="/favorites:user_id">
							<Favorites />
						</Route> */}
						<Route exact path="/reviews/:room_id">
							<Reviews />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
