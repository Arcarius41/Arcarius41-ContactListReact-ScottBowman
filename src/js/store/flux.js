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
				}
			],
			
		},
		actions: {
				
		}
	};
};

export default getState;
