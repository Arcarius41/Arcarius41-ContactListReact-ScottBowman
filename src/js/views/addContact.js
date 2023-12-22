import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const AddContact = (props) => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");

	return (
		<div className="jumbotron">
			<div className="input-group">
				<label for="name">Full Name</label>
				<input onChange={(e) => setFullName(e.target.value)} type="text" id="name" name="name" placeholder="Full Name" />
			</div>

			<div className="input-group">
				<label for="email">Email</label>
				<input onChange={(e) => setEmail(e.target.value)} type="text" id="email" name="email" placeholder="Email" />
			</div>
			<div className="input-group">
				<label for="phone">phone</label>
				<input onChange={(e) => setPhone(e.target.value)} type="text" id="phone" name="phone" placeholder="phone" />
			</div>
			<div className="input-group">
				<label for="address">address</label>
				<input onChange={(e) => setAddress(e.target.value)} type="text" id="address" name="address" placeholder="address" />
			</div>
			<Link to="/" onClick={() => actions.addContact(fullName, email, phone, address)} className="btn btn-primary form-control">save</Link>
		</div>

	);
};


