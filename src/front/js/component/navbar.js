import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

import { SignUp } from "./signUp";
import { Login } from "./login";

import logo from "../../img/WPlogo.png";
import "../../styles/navbar.scss";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const [isActive, setIsActive] = useState(null);
	const history = useHistory();
	const { user_id } = useParams();

	useEffect(() => {
		actions.getLocalStore();
	}, []);

	const goodbye = () => {
		actions.logOut();
		actions.getLocalStore();
		history.push("/");
	};

	const changeElementNavbarActive = element => {
		if (element) {
			setIsActive(element);
		}
	};

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-white no-gutters" id="myNab">
			<div
				className={isActive === "home" ? "col-2 my-active" : "col-2"}
				onClick={() => changeElementNavbarActive("home")}>
				<Link to="/">
					<img src={logo} id="logo" />
				</Link>
			</div>
			<div className="col-10">
				{/*store.myLocalStore.user ? (*/}
				{store.myLocalStore.user ? (
					<div className="col-12 d-flex justify-content-around">
						<span
							className={
								isActive === "profile"
									? "navbar-brand mb-0 mr-2 btn btn-navb my-active"
									: "navbar-brand mb-0 mr-2 btn btn-navb"
							}
							onClick={() => {
								changeElementNavbarActive("profile");
								console.log(JSON.parse(localStorage.getItem("user")));
								history.push(`/profile/${JSON.parse(localStorage.getItem("user")).id}`);
							}}>
							Profile
						</span>
						<Link to="/announcements">
							<span
								className={
									isActive === "announcements"
										? "navbar-brand mb-0 mr-2 btn btn-navb my-active"
										: "navbar-brand mb-0 mr-2 btn btn-navb"
								}
								onClick={() => changeElementNavbarActive("announcements")}>
								Announcements
							</span>
						</Link>
						<Link to="/favorites">
							<span
								className={
									isActive === "favorites"
										? "navbar-brand mb-0 mr-2 btn btn-navb my-active"
										: "navbar-brand mb-0 mr-2 btn btn-navb"
								}
								onClick={() => {
									changeElementNavbarActive("favorites");
									//history.push(`/favorites/${JSON.parse(localStorage.getItem("user")).id}`);
								}}>
								Favorites
							</span>
						</Link>
						<Link to="/">
							<span
								className={
									isActive === "Search"
										? "navbar-brand mb-0 mr-2 btn btn-navb my-active"
										: "navbar-brand mb-0 mr-2 btn btn-navb"
								}
								onClick={() => changeElementNavbarActive("Search")}>
								Search
							</span>
						</Link>
						<Link to="/">
							<span className="navbar-brand mb-0 mr-2 btn btn-navb" onClick={() => goodbye()}>
								Log Out
							</span>
						</Link>
					</div>
				) : (
					<div className="col-12 d-flex justify-content-end">
						<button
							type="button"
							className="navbar-brand mb-0 mr-2 btn btn-navb"
							data-toggle="modal"
							data-target="#signUpModal">
							Sign Up
						</button>
						<button
							type="button"
							className="navbar-brand mb-0 mr-2 btn btn-navb"
							data-toggle="modal"
							data-target="#loginModal">
							Login
						</button>
					</div>
				)}
			</div>

			{/*<!-- SignUp Modal -->*/}
			<div id="signUpModal" className="modal fade" role="dialog">
				<div className="modal-dialog modal-lg">
					<div className="modal-content">
						<SignUp />
					</div>
				</div>
			</div>

			{/*<!-- Login Modal -->*/}
			<div id="loginModal" className="modal fade" role="dialog">
				<div className="modal-dialog modal-lg">
					<div className="modal-content">
						<Login />
					</div>
				</div>
			</div>
		</nav>
	);
};
