import React from "react";


export const ContactCard = (props) =>{


    return(
        <div className="card">
            <div className="d-flex">
                <img src="https://th.bing.com/th/id/OIP.dxzTBh2E74ZZpTOsATw5fQHaHa?rs=1&pid=ImgDetMain" alt={props.name} />
                <div>
                    
                    <p>name: {props.name}</p>
                    <p>phone: {props.phone}</p>
                    <p> email:{props.email}</p>
                    <p>address: {props.address}</p>
                </div>
            </div>
        </div>
    )
}