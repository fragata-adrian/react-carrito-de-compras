import React from 'react';
import './carrito.css';
import Producto from './Producto';

const Carrito = ({carrito, agregarProducto}) => (
    <div className="carrito">
        <h3>Carrito de Compras</h3>
        
        {carrito.length === 0 ?
            <p>El carrito esta vacio</p>
            :
            carrito.map(producto => (
                <Producto 
                    key = {producto.key}
                    producto = {producto}
                    carrito = {carrito}
                    agregarProducto = {agregarProducto}
                />
            ))
        }
    </div>
);


export default Carrito;
