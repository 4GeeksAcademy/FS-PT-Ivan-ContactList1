import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const ContactCard = (props) =>{
    const {store, actions} = useContext(Context);

    const handleDelete = () => {
        console.log("Deleting contact with ID:", props.contactId);
        actions.deleteContact(props.contactId)
    }

    return(
        <div className="card">
            <div className="d-flex">
                <img width={'150px'} src="https://th.bing.com/th/id/OIP.dxzTBh2E74ZZpTOsATw5fQHaHa?rs=1&pid=ImgDetMain" alt={props.name} />
                <div>
                    <p>name: {props.name}</p>
                    <p>phone: {props.phone}</p>
                    <p> email:{props.email}</p>
                    <p>address: {props.address}</p>
                    <button onClick={handleDelete} className="btn btn-danger">Delete</button>
                </div>
            </div>
        </div>
    )
}