import React from "react";
import "../../styles/announcements.scss";
import openEye from "../../img/openEye.png";
import closeEye from "../../img/closeEye.png";
import deleteRoom from "../../img/deleteRoom.png";

export const MyRoomsItemActive = () => {
	return (
		<div className="row">
			<div className="third_part mx-auto mt-3 mb-2">
				<div className="row">
					<div className="col-6">Room description here</div>
					<div className="col-4 roomItemBar">Room picture here</div>
					<div className="col-2">
						<div className="roomItemsButton">
							<button
								type="button"
								className="btn btn-outline-dark roomsButtons"
								alt="click to set room inactive">
								<img src={closeEye} className="closedEye" />
							</button>

							<button type="button" className="btn btn-outline-dark mt-5 roomsButtons">
								<img src={deleteRoom} />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export const MyRoomsItemInactive = () => {
	return (
		<div className="row">
			<div className="third_part mx-auto mt-3 mb-2">
				<div className="row">
					<div className="col-6">Room description here</div>
					<div className="col-4 roomItemBar">Room picture here</div>
					<div className="col-2">
						<div className="roomItemsButton">
							<button
								type="button"
								className="btn btn-outline-dark roomsButtons"
								alt="click to set room active">
								<img src={openEye} />
							</button>

							<button type="button" className="btn btn-outline-dark mt-5 roomsButtons">
								<img src={deleteRoom} />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export const MyRoomsItemOccupied = () => {
	return (
		<div className="row">
			<div className="third_part mx-auto mt-3 mb-2">
				<div className="row">
					<div className="col-6">Room description here</div>
					<div className="col-4 roomItemBar">Room picture here</div>
					<div className="col-2">
						<div className="roomItemsButton">
							<button
								type="button"
								className="btn btn-outline-dark roomsButtons mb-2"
								alt="click to set room active">
								<img src={openEye} />
							</button>
							<button
								type="button"
								className="btn btn-outline-dark roomsButtons"
								alt="click to set room inactive">
								<img src={closeEye} className="closedEye" />
							</button>
							<button type="button" className="btn btn-outline-dark mt-2 roomsButtons">
								<img src={deleteRoom} />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
