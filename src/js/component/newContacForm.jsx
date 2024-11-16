import React from "react";



const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: ''
})


const handleChange = e => {
    const {name, value} = e.target;
    setFormData[{...formData, [name]: value}];
}

const handleCancel = () =>{

}

const handleSubmit = () =>{
    e.preventDefault();
    console.log(formData);
}


export const NewContactForm = () => {
    return (
        <form className="card form-control" onSubmit={handleSubmit}>
            <input type="text" className="form-control" value={ formData.name } onChange={handleChange} name="" requires placeholder="name"  />
            <input type="text" className="form-control" value={formData.phone } onChange={handleChange} name="" requires  placeholder="phone" />
            <input type="text" className="form-control" value={formData.email } onChange={handleChange} name="" requires  placeholder="email" />
            <input type="text" className="form-control" value={formData.address } onChange={handleChange} name="" requires placeholder="address"/>
            
            <input className="btn btn-success" type="submit" value="enviar" />
            <button className="btn btn-danger" onClick={handleCancel}>
                cancel
            </button>
        </form>
    )
}