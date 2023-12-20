import React, {useContext} from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import {ContactCard} from "../component/contactCard.js";

export const Home = () => {

	const {store, actions} = useContext(Context);
	
	
	return(
	<div className="mt-5">
	  <div className="container">
		<div className="justify-content-right d-flex"><button className="btn btn-success ml-auto">Add New  Contact</button></div>
		
		<ul className="list-group">
			{
				store.contactList.map((item, index) => {
					return <li className="list-group-item" key={index}><ContactCard contact={item}/></li>;
				})
			}
		</ul>
	  </div>
	</div>
);
}