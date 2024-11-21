import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { Context } from "../store/appContext";

export const NewContactForm = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        address: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleCancel = () => {
        navigate('/');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);

        // Llamamos a la acción `createContact` y esperamos que complete.
        const result = await actions.createContact(formData);

        // Si el envío es exitoso, redirigimos.
        if (result.success) {
            navigate('/');
        } else {
            alert('Error al enviar los datos. Por favor, intente de nuevo.');
        }
    };

    return (
        <form className="card form-control" onSubmit={handleSubmit}>
            <input
                type="text"
                className="form-control"
                value={formData.name}
                onChange={handleChange}
                name="name"
                required
                placeholder="name"
            />
            <input
                type="text"
                className="form-control"
                value={formData.phone}
                onChange={handleChange}
                name="phone"
                required
                placeholder="phone"
            />
            <input
                type="text"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                name="email"
                required
                placeholder="email"
            />
            <input
                type="text"
                className="form-control"
                value={formData.address}
                onChange={handleChange}
                name="address"
                required
                placeholder="address"
            />
            <input className="btn btn-success" type="submit" value="enviar" />
            <button className="btn btn-danger" type="button" onClick={handleCancel}>
                cancel
            </button>
        </form>
    );
};
