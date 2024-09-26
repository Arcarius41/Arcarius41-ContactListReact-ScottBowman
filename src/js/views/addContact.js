import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";


export const AddContact = (props) => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");
	const navigate = useNavigate();

	const handleClick = async () => {
		await actions.addContact(fullName, email, phone, address);
		navigate("/");
	};

	return (
		<div className="addContactCard">
			<div className="w-50 col-4 mx-auto mb-3">
				<label className="form-label" htmlFor="name">Full Name</label>
				<input className="form-control" onChange={(e) => setFullName(e.target.value)} type="text" id="name" name="name" placeholder="Full Name" />
			</div>
			
			<div className="w-50 col-4 mx-auto mb-3">
				<label className="form-label" htmlFor="email">Email</label>
				<input className="form-control" onChange={(e) => setEmail(e.target.value)} type="text" id="email" name="email" placeholder="Email" />
			</div>
			<div className="w-50 col-4 mx-auto mb-3">
				<label className="form-label" htmlFor="phone">phone</label>
				<input className="form-control" onChange={(e) => setPhone(e.target.value)} type="text" id="phone" name="phone" placeholder="phone" />
			</div>
			<div className="w-50 col-4 mx-auto mb-3">
				<label className="form-label" htmlFor="address">address</label>
				<input className="form-control" onChange={(e) => setAddress(e.target.value)} type="text" id="address" name="address" placeholder="address" />
			</div>
			<div className="text-center">
    <button onClick={handleClick} className="btn btn-primary" style={{ width: "auto" }}>Save</button>
</div>

		</div>

	);
};


