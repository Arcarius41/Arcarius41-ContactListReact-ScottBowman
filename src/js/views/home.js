import React, {useContext} from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import {ContactCard} from "../component/contactCard.js";

export const Home = () => {

	const {store, actions} = useContext(Context);
	
	
	return(
	<div className="text-center mt-5">
	  <div className="container">
		<ul>
			{
				store.contactList.map((item, index) => {
					return <li key={index}><ContactCard contact={item}/></li>;
				})
			}
		</ul>
	  </div>
	</div>
);
}