import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/announcements.scss";
import my_rooms from "../../img/my_rooms.png";
import { MyRoomsItemActive } from "../component/myRoomsItem";
import { Link } from "react-router-dom";

export const Announcements = () => {
	const { store, actions } = useContext(Context);

	let user_rooms = store.rooms.filter(
		room =>
			room.owner_id ===
			(JSON.parse(localStorage.getItem("user")).user?.id || JSON.parse(localStorage.getItem("user")).id)
	);

	let active_rooms = user_rooms.filter(room => room.active_room === true && room.delete_room === false);
	let inactive_rooms = user_rooms.filter(room => room.active_room === false && room.delete_room === false);

	return (
		<div className="container-fluid announcements ">
			<div className="row ml-5 mt-3">
				<div id="my_room_pic">
					<img id="my_room_pic2" src={my_rooms} />
				</div>
				<div className="col-3">
					<h3 id="my_rooms_title" className="ml-4">
						My Rooms
					</h3>
				</div>

				<div className="col-4" />
				<div className="col-4">
					<Link to="/newAnnouncement">
						<button type="button" id="new_ann_button" className="btn btnYellow ">
							New Announcement
						</button>
					</Link>
				</div>
			</div>
			<div id="annSquare">
				<ul className="nav nav-tabs mt-3" id="myTab" role="tablist">
					<li className="nav-item" id="tabModi2">
						<a
							className="nav-link active noLink2"
							id="activeR-tab"
							data-toggle="tab"
							href="#activeR"
							role="tab"
							aria-controls="activeR"
							aria-selected="true">
							<h5>Active Rooms</h5>
						</a>
					</li>
					<li className="nav-item" id="tabModi2">
						<a
							className="nav-link noLink2"
							id="inactiveR-tab"
							data-toggle="tab"
							href="#inactiveR"
							role="tab"
							aria-controls="inactiveR"
							aria-selected="false">
							<h5>Inactive Rooms</h5>
						</a>
					</li>
				</ul>
				<div className="tab-content" id="myTabContent">
					<div
						className="tab-pane fade mb-5 show active"
						id="activeR"
						role="tabpanel"
						aria-labelledby="activeR-tab">
						{active_rooms.length ? (
							active_rooms.map(room => {
								return (
									<div key={room.id}>
										<MyRoomsItemActive room={room} />
									</div>
								);
							})
						) : (
							<div className="default-mesage-announcements justify-content-center">
								<p className="align-self-center active-room-text">You have not any active rooms</p>
							</div>
						)}
					</div>
					<div className="tab-pane fade mb-5" id="inactiveR" role="tabpanel" aria-labelledby="inactiveR-tab">
						{inactive_rooms.length ? (
							inactive_rooms.map(room => {
								return (
									<div key={room.id}>
										<MyRoomsItemActive room={room} />
									</div>
								);
							})
						) : (
							<div className="default-mesage-announcements d-flex justify-content-center">
								<p className="align-self-center">You have not any inactive rooms</p>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
