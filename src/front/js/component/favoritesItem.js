import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/favorites.scss";
import room from "../../img/room.jpg";
import deleteRoom from "../../img/deleteRoom.png";
import { RatingStatic } from "./ratingStatic";
import { RoomiesItem } from "./roomiesItem";
import PropTypes from "prop-types";

let id_user = JSON.parse(localStorage.getItem("user"))
	? JSON.parse(localStorage.getItem("user")).user?.id || JSON.parse(localStorage.getItem("user")).id
	: null;

export const FavoritesItem = ({ favorites, makeFavorites, getFavorites }) => {
	const { store, actions } = useContext(Context);

	return (
		<div className="row favoritesBg my-1">
			<div className="col-7 fvSecondBg">
				<div className="row mt-1">
					<div className="favTitle">
						<h3 className="ml-2 mt-2  pl-3 ">{favorites.title}</h3>
					</div>
				</div>
				<div className="row mt-3">
					<h4 className="pl-3 ml-2 favPrice ">
						<i className="fas fa-tag awePrice"></i> Price: €{favorites.price}
					</h4>
					<h4 className="pl-3 ml-2 favPrice">
						<i className="fas fa-tags awePrice"></i> Deposit: €{favorites.deposit}
					</h4>
				</div>

				<div className="row mt-3">
					<h4 className="pl-3 ml-2 favPrice ">
						<i className="fas fa-map-marker-alt rojelio"></i> Address: {favorites.address}
					</h4>
				</div>
			</div>
			<div className="col-3 picBar">
				<img
					className="favoritesPic"
					src={
						favorites.room_url
							? favorites.room_url
							: "https://img.freepik.com/vector-gratis/plantilla-fondo-interior-dormitorio-dibujos-animados-acogedora-habitacion-moderna-luz-manana_33099-171.jpg?size=626&ext=jpg"
					}
				/>
			</div>
			<div className="col-1">
				<button
					type="button"
					className="btn btn-outline-warning favButton"
					onClick={() => {
						makeFavorites(id_user, favorites.id);
						getFavorites(id_user);
						actions.setFavButton(favorites.id);
					}}>
					<img src={deleteRoom} />
				</button>
			</div>
		</div>
	);
};
FavoritesItem.propTypes = {
	favorites: PropTypes.object,
	room: PropTypes.object,
	makeFavorites: PropTypes.func,
	getFavorites: PropTypes.func
};
