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
				
		}
	};
};

export default getState;
