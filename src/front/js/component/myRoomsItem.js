import React, { useContext } from "react";
import "../../styles/announcements.scss";
import openEye from "../../img/openEye.png";
import closeEye from "../../img/closeEye.png";
import deleteRoom from "../../img/deleteRoom.png";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const MyRoomsItemActive = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="row">
			<div className="third_part mx-auto mt-3 mb-2">
				<div className="row pl-3 pr-3">
					<div className="col-7 mt-4">
						<div className="ml-2 mb-4">
							<h5 className="fontRoom">{props.room.title}</h5>
						</div>
						<p className="ml-2 fontRoom">{props.room.description}</p>
						<h5 className="fontRoom ml-2 ">Price: €{props.room.price}</h5>
						<h5 className="fontRoom ml-2 ">Deposit: €{props.room.deposit}</h5>
					</div>
					<div className="col-3 roomItemBar">
						<Link to={`/detailedView/${props.room.id}`}>
							<img className="roomItemPic" src={props.room.room_url} href="#" />
						</Link>
					</div>
					<div className="col-1 d-flex justify-content-center btn-icons-annonc">
						<div className="d-flex flex-column">
							<button
								type="button"
								className="btn btn-outline-warning roomsButtons mt-4 "
								alt="click to set room inactive"
								data-toggle="tooltip"
								data-placement="top"
								title="Deactivate/Activate"
								onClick={() => {
									actions.setRoomActive(props.room.id);
								}}>
								<img src={props.room.active_room ? closeEye : openEye} className="closedEye" />
							</button>

							<button
								type="button"
								className="btn btn-outline-warning mt-5 roomsButtons"
								data-toggle="tooltip"
								data-placement="top"
								title="Delete"
								onClick={() => {
									actions.setRoomDelete(props.room.id);
								}}>
								<img src={deleteRoom} />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

// export const MyRoomsItemOccupied = () => {
// 	return (
// 		<div className="row">
// 			<div className="third_part2 mx-auto mt-3 mb-2">
// 				<div className="row">
// 					<div className="col-6">
// 						<div className="row">
// 							<h5 className="mx-auto mt-2 ">
// 								<ins className="fontRoom">{exampleTitle}</ins>
// 							</h5>
// 						</div>
// 						<div className="row">
// 							<div className="mx-auto mt-4">
// 								<a href="#">
// 									{" "}
// 									<img className="roomItemPic" src={room} href="#" />{" "}
// 								</a>
// 							</div>
// 						</div>
// 					</div>
// 					<div className="col-4 roomItemBar2">
// 						<div className="row">
// 							<h5 className="mx-auto fontRoom">Occupied by:</h5>
// 						</div>
// 						<a href="#">
// 							{" "}
// 							<img className="roomItemPicRounded rounded-circle " src={Becker} href="#" />{" "}
// 						</a>
// 						<div className="mx-auto">
// 							<h5 id="nameInRooms">{roomieExample}</h5>
// 						</div>
// 						<div>
// 							<button
// 								type="button"
// 								className="btn btn-outline-warning roomsButtons deleteRoomieButton mt-2">
// 								<img src={deleteRoomie} /> Delete Roomie
// 							</button>
// 						</div>
// 					</div>
// 					<div className="col-2">
// 						<div className="roomItemsButton">
// 							<button
// 								type="button"
// 								className="btn btn-outline-warning roomsButtons mb-5"
// 								alt="click to set room active">
// 								<img src={openEye} />
// 							</button>
// 							<br />
// 							<button
// 								type="button"
// 								className="btn btn-outline-warning roomsButtons"
// 								alt="click to set room inactive">
// 								<img src={closeEye} className="closedEye" />
// 							</button>
// 							<button type="button" className="btn btn-outline-warning roomsButtons mt-5">
// 								<img src={deleteRoom} />
// 							</button>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

MyRoomsItemActive.propTypes = {
	room: PropTypes.object
};
