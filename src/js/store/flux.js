const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contactList: [
				// {
				// 	full_name: "John Doe",
				// 	email: "johndoe@example.com",
				// 	phone: "1234567890",
				// 	address: "123 Main St"
				// },
				// {
				// 	full_name: "Jane Smith",
				// 	email: "janesmith@example.com",
				// 	phone: "9876543210",
				// 	address: "456 Elm St"
				// },
				// {
				// 	full_name: "Michael Johnson",
				// 	email: "michaeljohnson@example.com",
				// 	phone: "5555555555",
				// 	address: "789 Oak St"
				// },
				// {
				// 	full_name: "Emily Davis",
				// 	email: "emilydavis@example.com",
				// 	phone: "9999999999",
				// 	address: "321 Pine St"
				// }
			],

		},
		actions: {
			getContactList: async () => {
				const store = getStore();
				const response = await fetch("https://playground.4geeks.com/apis/fake/contact/agenda/Scotts_blahblah");
				const data = await response.json();
				setStore({ contactList:data });
			},
			addContact: async (full_name, email, phone, address) => {
				const store = getStore();
				const response = await fetch("https://playground.4geeks.com/apis/fake/contact/", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						full_name: full_name,
						email: email,
						agenda_slug: "Scotts_blahblah",
						address: address,
						phone: phone
					})
				});
				if (response.status==201)	{
					getActions().getContactList();
				}		},
			updateContact: async (full_name, email, phone, address, contactId) => {
				const store = getStore();
				const response = await fetch("https://playground.4geeks.com/apis/fake/contact/" + contactId, {
					method: "PUT",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						full_name: full_name,
						email: email,
						agenda_slug: "Scotts_blahblah",
						address: address,
						phone: phone
					})
				});
				const data = await response.json();
				
			},
			deleteContact: async (contactId) => {
				const store = getStore();
				const response = await fetch("https://playground.4geeks.com/apis/fake/contact/" + contactId, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json"
					}
				});
				const data = await response.json();
				setStore({ contactList: store.contactList.filter((contact) => contact.id !== contactId) });
			}
		}
	};
};

export default getState;
