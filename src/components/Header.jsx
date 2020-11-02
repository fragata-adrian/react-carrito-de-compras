import React from 'react';

const Header = (props) => { //Puedo usar tambien {titulo, anio}
    const universidad = 'UNaHur';

    let mensaje;

    if (universidad == 'UNaHur') {
        mensaje = 'Bienvenido'
    } 
    else {
        mensaje = 'Acceso no autorizado'
    }
    
    return (
        <div>
            <h1>{props.titulo} - {props.anio}</h1>
            <h1>Este es el header</h1>
            <p>Yo estudio en la {universidad}</p> 
            <p>{mensaje}</p>
        </div>
    );
}

export default Header;