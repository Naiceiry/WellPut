import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
// Librería para el carousel
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css?raw";
import "../../styles/carouselRoomImg.scss";
import { RatingStatic } from "./ratingStatic";

import roomDetails1 from "../../img/roomDetails.png";
import bathroom from "../../img/bathroom.jpg";
import roomDetails3 from "../../img/login-room.png";

import "../../styles/detailedView.scss";

const titleExple = "Habitación luminosa en Sagrada Familia";
const priceExple = 450;

export const CarouselRoomImg = () => {
	const { store, actions } = useContext(Context);
	const slider = (
		<div>
			<div id="carouselOne" className="carousel slide" data-ride="carousel" data-interval="false">
				<div className="carousel-inner caroShape d-flex">
					<div className="carousel-item  active ">
						<img className="d-block w-100 caro_pic_fix" src={roomDetails1} alt="First slide" />
						<div className="carousel-caption ">
							<h4 className="maybeWorks">{titleExple} </h4>
							{/**/}
							<div className=" row">
								<div className="caroPrice">
									<h2>€{priceExple}</h2>
								</div>
								<div className="starCaro">
									<RatingStatic />
								</div>
								<div className="heartButton">
									<button className="heartButtonFix">
										{" "}
										<i className="far fa-heart fa-2x" />
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="carousel-item  ">
						<img className="d-block w-100 caro_pic_fix" src={roomDetails2} alt="Second slide" />
						<div className="carousel-caption ">
							<h4 className="maybeWorks">{titleExple} </h4>
							{/**/}
							<div className=" row">
								<div className="caroPrice">
									<h2>€{priceExple}</h2>
								</div>
								<div className="starCaro">
									<RatingStatic />
								</div>
								<div className="heartButton">
									<button className="heartButtonFix">
										{" "}
										<i className="far fa-heart fa-2x" />
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="carousel-item ">
						<img className="d-block w-100 caro_pic_fix" src={roomDetails3} alt="Third slide" />
						<div className="carousel-caption ">
							<h4 className="maybeWorks">{titleExple} </h4>
							{/**/}
							<div className=" row">
								<div className="caroPrice">
									<h2>€{priceExple}</h2>
								</div>
								<div className="starCaro">
									<RatingStatic />
								</div>
								<div className="heartButton">
									<button className="heartButtonFix">
										{" "}
										<i className="far fa-heart fa-2x" />
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<a className="carousel-control-prev" href="#carouselOne" role="button" data-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true" />
					<span className="sr-only">Previous</span>
				</a>
				<a className="carousel-control-next" href="#carouselOne" role="button" data-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true" />
					<span className="sr-only">Next</span>
				</a>
			</div>
		</div>
	);

	return slider;
};
export const CarouselRoomImg2 = () => {
	const { store, actions } = useContext(Context);
	const slider = (
		<div>
			<div id="carouselTwo" className="carousel slide" data-ride="carousel" data-interval="false">
				<div className="carousel-inner caroShape d-flex">
					<div className="carousel-item  active ">
						<img className="d-block w-100 caro_pic_fix" src={roomDetails1} alt="First slide" />
						<div className="carousel-caption ">
							<h4 className="maybeWorks">{titleExple} </h4>
							{/**/}
							<div className=" row">
								<div className="caroPrice">
									<h2>€{priceExple}</h2>
								</div>
								<div className="starCaro">
									<RatingStatic />
								</div>
								<div className="heartButton">
									<button className="heartButtonFix">
										{" "}
										<i className="far fa-heart fa-2x" />
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="carousel-item  ">
						<img className="d-block w-100 caro_pic_fix" src={roomDetails2} alt="Second slide" />
						<div className="carousel-caption ">
							<h4 className="maybeWorks">{titleExple} </h4>
							{/**/}
							<div className=" row">
								<div className="caroPrice">
									<h2>€{priceExple}</h2>
								</div>
								<div className="starCaro">
									<RatingStatic />
								</div>
								<div className="heartButton">
									<button className="heartButtonFix">
										{" "}
										<i className="far fa-heart fa-2x" />
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="carousel-item ">
						<img className="d-block w-100 caro_pic_fix" src={roomDetails3} alt="Third slide" />
						<div className="carousel-caption ">
							<h4 className="maybeWorks">{titleExple} </h4>
							{/**/}
							<div className=" row">
								<div className="caroPrice">
									<h2>€{priceExple}</h2>
								</div>
								<div className="starCaro">
									<RatingStatic />
								</div>
								<div className="heartButton">
									<button className="heartButtonFix">
										{" "}
										<i className="far fa-heart fa-2x" />
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<a className="carousel-control-prev" href="#carouselTwo" role="button" data-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true" />
					<span className="sr-only">Previous</span>
				</a>
				<a className="carousel-control-next" href="#carouselTwo" role="button" data-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true" />
					<span className="sr-only">Next</span>
				</a>
			</div>
		</div>
	);

	return slider;
};
export const CarouselRoomImg3 = () => {
	const { store, actions } = useContext(Context);
	const slider = (
		<div>
			<div id="carouselThree" className="carousel slide" data-ride="carousel" data-interval="false">
				<div className="carousel-inner caroShape d-flex">
					<div className="carousel-item  active ">
						<img className="d-block w-100 caro_pic_fix" src={roomDetails1} alt="First slide" />
						<div className="carousel-caption ">
							<h4 className="maybeWorks">{titleExple} </h4>
							{/**/}
							<div className=" row">
								<div className="caroPrice">
									<h2>€{priceExple}</h2>
								</div>
								<div className="starCaro">
									<RatingStatic />
								</div>
								<div className="heartButton">
									<button className="heartButtonFix">
										{" "}
										<i className="far fa-heart fa-2x" />
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="carousel-item  ">
						<img className="d-block w-100 caro_pic_fix" src={roomDetails2} alt="Second slide" />
						<div className="carousel-caption ">
							<h4 className="maybeWorks">{titleExple} </h4>
							{/**/}
							<div className=" row">
								<div className="caroPrice">
									<h2>€{priceExple}</h2>
								</div>
								<div className="starCaro">
									<RatingStatic />
								</div>
								<div className="heartButton">
									<button className="heartButtonFix">
										{" "}
										<i className="far fa-heart fa-2x" />
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="carousel-item ">
						<img className="d-block w-100 caro_pic_fix" src={roomDetails3} alt="Third slide" />
						<div className="carousel-caption ">
							<h4 className="maybeWorks">{titleExple} </h4>
							{/**/}
							<div className=" row">
								<div className="caroPrice">
									<h2>€{priceExple}</h2>
								</div>
								<div className="starCaro">
									<RatingStatic />
								</div>
								<div className="heartButton">
									<button className="heartButtonFix">
										{" "}
										<i className="far fa-heart fa-2x" />
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<a className="carousel-control-prev" href="#carouselThree" role="button" data-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true" />
					<span className="sr-only">Previous</span>
				</a>
				<a className="carousel-control-next" href="#carouselThree" role="button" data-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true" />
					<span className="sr-only">Next</span>
				</a>
			</div>
		</div>
	);

	return slider;
};
export const CarouselRoomImg4 = () => {
	const { store, actions } = useContext(Context);
	const slider = (
		<div>
			<div id="carouselFour" className="carousel slide" data-ride="carousel" data-interval="false">
				<div className="carousel-inner caroShape d-flex">
					<div className="carousel-item  active ">
						<img className="d-block w-100 caro_pic_fix" src={roomDetails1} alt="First slide" />
						<div className="carousel-caption ">
							<h4 className="maybeWorks">{titleExple} </h4>
							{/**/}
							<div className=" row">
								<div className="caroPrice">
									<h2>€{priceExple}</h2>
								</div>
								<div className="starCaro">
									<RatingStatic />
								</div>
								<div className="heartButton">
									<button className="heartButtonFix">
										{" "}
										<i className="far fa-heart fa-2x" />
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="carousel-item  ">
						<img className="d-block w-100 caro_pic_fix" src={roomDetails2} alt="Second slide" />
						<div className="carousel-caption ">
							<h4 className="maybeWorks">{titleExple} </h4>
							{/**/}
							<div className=" row">
								<div className="caroPrice">
									<h2>€{priceExple}</h2>
								</div>
								<div className="starCaro">
									<RatingStatic />
								</div>
								<div className="heartButton">
									<button className="heartButtonFix">
										{" "}
										<i className="far fa-heart fa-2x" />
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="carousel-item ">
						<img className="d-block w-100 caro_pic_fix" src={roomDetails3} alt="Third slide" />
						<div className="carousel-caption ">
							<h4 className="maybeWorks">{titleExple} </h4>
							{/**/}
							<div className=" row">
								<div className="caroPrice">
									<h2>€{priceExple}</h2>
								</div>
								<div className="starCaro">
									<RatingStatic />
								</div>
								<div className="heartButton">
									<button className="heartButtonFix">
										{" "}
										<i className="far fa-heart fa-2x" />
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<a className="carousel-control-prev" href="#carouselFour" role="button" data-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true" />
					<span className="sr-only">Previous</span>
				</a>
				<a className="carousel-control-next" href="#carouselFour" role="button" data-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true" />
					<span className="sr-only">Next</span>
				</a>
			</div>
		</div>
	);

	return slider;
};
export const CarouselRoomImg5 = () => {
	const { store, actions } = useContext(Context);
	const slider = (
		<div>
			<div id="carouselFive" className="carousel slide" data-ride="carousel" data-interval="false">
				<div className="carousel-inner caroShape d-flex">
					<div className="carousel-item  active ">
						<img className="d-block w-100 caro_pic_fix" src={roomDetails1} alt="First slide" />
						<div className="carousel-caption ">
							<h4 className="maybeWorks">{titleExple} </h4>
							{/**/}
							<div className=" row">
								<div className="caroPrice">
									<h2>€{priceExple}</h2>
								</div>
								<div className="starCaro">
									<RatingStatic />
								</div>
								<div className="heartButton">
									<button className="heartButtonFix">
										{" "}
										<i className="far fa-heart fa-2x" />
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="carousel-item  ">
						<img className="d-block w-100 caro_pic_fix" src={roomDetails2} alt="Second slide" />
						<div className="carousel-caption " />
					</div>
					<div className="carousel-item ">
						<img className="d-block w-100 caro_pic_fix" src={roomDetails3} alt="Third slide" />
						<div className="carousel-caption" />
					</div>
				</div>
				<a className="carousel-control-prev" href="#carouselFive" role="button" data-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true" />
					<span className="sr-only">Previous</span>
				</a>
				<a className="carousel-control-next" href="#carouselFive" role="button" data-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true" />
					<span className="sr-only">Next</span>
				</a>
			</div>
		</div>
	
	);

	return slider;
};
