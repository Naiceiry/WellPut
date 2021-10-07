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
	const [notification, setNotification] = useState();
	const history = useHistory();
	const { user_id } = useParams();

	useEffect(() => {
		//actions.getLocalStore();
		getNotification();
	}, []);

	useEffect(() => {
		//actions.getLocalStore();
		getNotification();
	}, [notification]);

	const getNotification = () => {
		actions.getLocalStore();
		store &&
			store.myLocalStore.user?.rooms.map(room => {
				if (room.temporal_renter !== null) {
					setNotification(room.temporal_renter);
				}
			});
	};

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

	// To show or hide the notification bell
	const showNotif = () => {
		let source;

		if (store.user?.hasOwnProperty("rooms")) {
			source = store.user;
		}

		if (store.user?.user?.hasOwnProperty("rooms")) {
			source = store.user.user;
		}

		if (source) {
			return (
				source.rooms?.length > 0 &&
				source.rooms?.some(room => room.temporal_renter !== null) && (
					<i className="fas fa-bell fa-lg text-white notifications-bell" aria-hidden="true" />
				)
			);
		} else {
			return null;
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
								history.push(
									`/profile/${JSON.parse(localStorage.getItem("user")).user?.id ||
										JSON.parse(localStorage.getItem("user")).id}`
								);
							}}>
							Profile &nbsp;
							{showNotif()}
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
