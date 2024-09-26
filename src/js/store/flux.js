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
				const response = await fetch("https://playground.4geeks.com/contact/agendas/Arcarius41");
				if (response.ok) {
					const data = await response.json();
					setStore({ contactList: data.contacts });
				} else {
					const response = await fetch(
						"https://playground.4geeks.com/contact/agendas/Arcarius41",
						{ method: "POST" }
					);
				}
			},
			addContact: async (full_name, email, phone, address) => {
				const store = getStore();
				const response = await fetch("https://playground.4geeks.com/contact/agendas/Arcarius41/contacts", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						name: full_name,
						email: email,
						address: address,
						phone: phone
					})
				});
				if (response.ok) {
					getActions().getContactList();
				}
			},
			updateContact: async (full_name, email, phone, address, contactId) => {
				const store = getStore();
				const response = await fetch("https://playground.4geeks.com/contact/agendas/Arcarius41/contacts/" + contactId, {
					method: "PUT",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						name: full_name,
						email: email,
						address: address,
						phone: phone
					})
				});
				const data = await response.json();
				if (response.ok) {
					getActions().getContactList();
				}
			},
			deleteContact: async (contactId) => {
				const store = getStore();
				const response = await fetch("https://playground.4geeks.com/contact/agendas/Arcarius41/contacts/" + contactId, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json"
					}
				});
				if (response.ok) {
					getActions().getContactList();
				}
			}
		}
	};
};

export default getState;
