import React, { useState, ChangeEvent, FormEvent } from "react";
import axios, { AxiosRequestConfig } from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailValidator from "email-validator";

interface CardProps {
  orgName: string;
  token: string;
}

const Card: React.FC<CardProps> = ({ orgName, token }) => {
  const [correo, setCorreo] = useState<string>("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    // Validar el correo
    if (!emailValidator.validate(correo)) {
      toast.error("El correo electrónico proporcionado no es válido.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    // Generar la solicitud para enviar la invitación
    const requestConfig: AxiosRequestConfig = {
      method: "POST",
      url: `https://api.github.com/orgs/${orgName}/invitations`,
      headers: {
        Authorization: `token ${token}`,
        "Content-Type": "application/json",
      },
      data: {
        email: correo,
        role: process.env.REACT_APP_MEMBER as string,
      },
    };

    // Enviar la solicitud para enviar la invitación
    axios(requestConfig)
      .then(() => {
        toast.success(`La invitación se envió correctamente a ${correo}.`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      })
      .catch((error) => {
        toast.error(
          `Error al enviar la invitación a ${correo}: ${error.message}`,
          {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          }
        );
      });
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCorreo(event.target.value);
  };

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blur w-80 p-8 rounded-md">
      <h1 className="text-3xl font-bold mb-4">Guayaba Devs</h1>
      <img
        src="https://avatars.githubusercontent.com/u/112519434?s=200&v=4"
        alt="Logo Guayaba Devs"
        className="w-full mb-4"
      />
      <p className="text-gray-300 mb-4">Coloca el correo de tu cuenta de Github</p>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label className="mb-2">
          <input
            type="text"
            name="email"
            value={correo}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </label>
        <button type="submit" className="bg-blue-500 text-white py-2 rounded-md">
          Ingresar
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Card;
