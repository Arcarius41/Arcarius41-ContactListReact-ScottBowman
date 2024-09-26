import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { ContactCard } from "../component/contactCard.js";
import { Link } from "react-router-dom";

export const Home = () => {

	const { store } = useContext(Context);


	return (
		<div>
			<div className="mt-5">
				<div className="container">
					<div className="button-container">
						<Link className="btn btn-success" to={"/add-contact"}>Add New Contact</Link>
					</div>

					<ul className="list-group mt-3">
						{
							store.contactList.map((item, index) => (
								<li className="list-group-item" key={index}>
									<ContactCard contact={item} />
								</li>
							))
						}
					</ul>
				</div>
			</div>

		</div>
	);
}