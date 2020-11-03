import React, { Fragment } from 'react';

const Header = (props) => { //Puedo usar tambien {titulo, anio}
    const universidad = 'UNaHur';

    let mensaje;

    if (universidad === 'UNaHur') {
        mensaje = 'Bienvenido'
    } 
    else {
        mensaje = 'Acceso no autorizado'
    }
    
    return (
        <Fragment>
            <h1>{props.titulo}</h1>
        </Fragment>
    );
}

export default Header;