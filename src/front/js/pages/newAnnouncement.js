import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export const NewAnnouncement = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1>NewAnnouncement Iña testttttt</h1>
		</div>
	);
};
