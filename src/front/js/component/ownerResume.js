import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { API_BASE_URL } from "../constants";

import "../../styles/detailedView.scss";

export const OwnerResume = props => {
	const { store, actions } = useContext(Context);

	// Para hacer la llamada del owner
	useEffect(() => {
		actions.getOwner(props.ownerId);
	}, []);

	// Para hacer el cambio de owner
	useEffect(() => {
		actions.getOwner(props.ownerId);
	}, [props.ownerId]);

	let owner = JSON.parse(localStorage.getItem("owner"));

	return owner ? (
		<div className="d-flex flex-column">
			<div className="row d-flex justify-content-end">
				<img
					src={
						owner.avatar_url
							? owner.avatar_url
							: "https://st4.depositphotos.com/27867620/30472/v/600/depositphotos_304728180-stock-illustration-male-avatar-web-icon.jpg"
					}
					className="col-10"
					id="ownerIMG"
				/>
			</div>
			<div className="row d-flex justify-content-end">
				<div className="col-10 d-flex flex-column p-1 mt-2 ownRes ">
					<div className="text-center" id="owneReContainer">
						<p className="text-white p-3 align-self-start">{owner.description}</p>
						<Link to={`/owner-profile/${owner.id}`}>
							<button className="btn mb-5 btnYeOwnR align-self-end">Know more about {owner.name}</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	) : (
		<div className="text-center text-warning spiner-loading-data">
			<i className="fas fa-spinner fa-pulse fa-6x" />
		</div>
	);
};

OwnerResume.propTypes = {
	ownerId: PropTypes.number
};
