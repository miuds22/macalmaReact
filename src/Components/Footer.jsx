import React from "react";

const Footer = ({redSocial}) => {
    // Aca pongo el codigo js que necesito
    //calculamos el año corriente
    const fecha = new Date().getFullYear();
    return(
        <div className="Footer">
             <p>Aca van las redes sociales</p>
             <p>Derechos reservados {fecha} </p>
             <p>visita nuestra Red Social:{redSocial}</p>
        </div>
    );
}
export default Footer;