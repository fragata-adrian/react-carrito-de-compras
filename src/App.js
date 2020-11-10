import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';
import Carrito from './components/Carrito';

function App() {

  const [productos, setProductos] = useState([
    {id:0, articulo:"Atril de madera", precio:4500},
    {id:1, articulo:"Acuarela Van Gogh", precio:500},
    {id:2, articulo:"Acuarela Cotman", precio:350},
    {id:3, articulo:"Papel Arches / M", precio:2300},
    {id:4, articulo:"Kit regalo W & N", precio:12000},
  ]);

  const [carrito, agregarProducto] = useState([]);

  return (
    <Fragment>
      <Header 
        titulo = "Carrito de compras" 
      />

      <h3>Listado de Productos</h3>
      {productos.map(producto => (
        <Producto 
          key = {Producto.id}
          producto = {producto}
          productos = {productos}
          carrito = {carrito}
          agregarProducto = {agregarProducto}
        />
      ))}
      <Carrito 
        carrito = {carrito}
        agregarProducto = {agregarProducto}
      />
      
      <Footer />
    </Fragment>
  );
}

export default App;
