const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contactList: [
				{
					fullName: "John Doe",
					email: "johndoe@example.com",
					phone: "1234567890",
					address: "123 Main St"
				},
				{
					fullName: "Jane Smith",
					email: "janesmith@example.com",
					phone: "9876543210",
					address: "456 Elm St"
				},
				{
					fullName: "Michael Johnson",
					email: "michaeljohnson@example.com",
					phone: "5555555555",
					address: "789 Oak St"
				},
				{
					fullName: "Emily Davis",
					email: "emilydavis@example.com",
					phone: "9999999999",
					address: "321 Pine St"
				}
			],
			
		},
		actions: {
				getContactList: async () => {
					const store = getStore();
					const response = await fetch("https://playground.4geeks.com/apis/fake/contact/agenda/Scotts_blahblah");
					const data = await response.json();
					setStore({ contactList: [...store.contactList, data] });
				},
				addContact: async (fullName, email, phone,address) => {
					const store = getStore();
					const response = await fetch("https://playground.4geeks.com/apis/fake/contact/",{
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify({
							full_name: fullName,
							email: email,
							agenda_slug: "Scotts_blahblah",
							address: address,
							phone: phone
						})
					});
					const data = await response.json();
					setStore({ contactList: [...store.contactList, data] });
				},
				updateContact: async (fullName, email, phone,address,contactId) => {
					const store = getStore();
					const response = await fetch("https://playground.4geeks.com/apis/fake/contact/"+contactId,{
						method: "PUT",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify({
							full_name: fullName,
							email: email,
							agenda_slug: "Scotts_blahblah",
							address: address,
							phone: phone
						})
					});
					const data = await response.json();
					setStore({ contactList: [...store.contactList, data] });
				},
				deleteContact: async (contactId) => {
					const store = getStore();
					const response = await fetch("https://playground.4geeks.com/apis/fake/contact/"+contactId,{
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
