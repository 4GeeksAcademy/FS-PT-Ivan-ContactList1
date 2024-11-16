import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext.js"
import { ContactCard } from "../component/contactCard.jsx";

export const Home = () => {
	 const {store, actions} = useContext(Context)
	return(
	<div className="text-center mt-5">
		{
			store.contact?.map(contact =><ContactCard key={contact.id} 
				name={contact.name}
				phone={contact.phone}
				email={contact.email}
				address={contact.address}
				contact={contact.id}
			/>)
		}
	</div>
	)
};
