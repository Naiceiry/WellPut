import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

import { OwnerResume } from "../component/ownerResume";
import { ReviewsResume } from "../component/reviewsResumen";
import { CarouselRoomImg } from "../component/carouselRoomImg";

import rommie1 from "../../img/Becker.jpg";
import rommie2 from "../../img/adriana.jpg";

import "../../styles/detailedView.scss";

export const DetailedView = () => {
	const { store, actions } = useContext(Context);
	const details = JSON.parse(localStorage.getItem("room"));
	let owner;

	useEffect(() => {
		actions.getDetailsRoom(1);
		//actions.getUser(details.user_id);
	}, []);

	console.log("details.user_id : ", details.user_id);
	console.log("Owner : ", actions.getUser(details.user_id));

	return (
		<div className="d-flex flex-column">
			<div id="imgsCarouselDetailRoom">
				<CarouselRoomImg room={details} isDetailRoom={true} />
			</div>

			<div className="row d-flex flex-column mb-3">
				<div className="col-9" id="idescriptionRoomDetail">
					<h5 className="font-weight-bolder"> Description</h5>
					<p>{details.description}</p>
				</div>
			</div>

			<div className="row" id="containerDetailDetail">
				<div className="col-2" id="oRBox">
					<OwnerResume />
				</div>

				<div className="col-9 d-flex justify-content-around" id="detailsDetails">
					<div className="col-2 ">
						<div className="d-flex flex-column">
							<h5 className="font-weight-bolder"> Expenses included</h5>
							<div className="d-flex justify-content-around">
								<i className="fas fa-wifi fa-2x" />
								<i className="fas fa-shower fa-2x" />
								<i className="fas fa-burn fa-2x  " />
								<i className="far fa-lightbulb fa-2x " />
							</div>
						</div>
						<div className="d-flex flex-column">
							<h5 className="font-weight-bolder mt-3">Features</h5>
							<div className="d-flex justify-content-around">
								<i className="fas fa-building fa-2x" />
								<i className="fas fa-couch fa-2x" />
								<i className="fas fa-bath fa-2x" />
							</div>
						</div>
					</div>
					<div className="col-2">
						<div className="roomiesLink d-flex align-items-center flex-column">
							<div className="row mt-1 mb-1 pt-2 text-center" id="titleRewsRes">
								<h5 className="col-12 text-white">Current roomies</h5>
							</div>
							<Link to="/profile">
								<img src={rommie1} className="imgCorrentRom" />
							</Link>
							<Link to="/profile">
								<img src={rommie2} className="imgCorrentRom" />
							</Link>
						</div>
					</div>
					<div className="col-5 ownRes mb-3">
						<ReviewsResume />
					</div>
				</div>
			</div>
		</div>
	);
};
