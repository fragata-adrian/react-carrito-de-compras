import React from 'react';

const Producto = ({producto, carrito, agregarProducto, productos}) => {

    // Extraigo los valores del producto
    const {articulo, id, precio} = producto;

    // Hago una función para que agregue un producto cuando cliqueo en el botón
    // Para eso tengo que traer todo el "productos" y filtrar / buscar por id
    // el que yo estoy cliqueando.
    const seleccionarProducto = (id) => {
        const producto = productos.filter(producto => producto.id === id);
        console.log(producto);


        // Acá estoy entrando en el objeto para que lo muestre.
        // Recordamos que lo creé como array, por eso el corchete
        console.log(producto[0]);


        // Ahora vamos a corregir el tema de que necesitamos que cada producto se agregue al
        // state, no reemplace el anterior
        agregarProducto([
            ...carrito,
            ...producto
        ]);
    }

    // Eliminar producto del carro
    const borrarProducto = id => {
        const productos = carrito.filter(producto => producto.id !== id);

        // Quito el producto, como ya es un array no necesito hacer lo que 
        // hice para agregar

        agregarProducto(productos);
    }

    return (
        <div>
            {articulo} <br/> {precio}
            <br/>
                {productos ? 
                    (
                        <button type="button" onClick = {() => seleccionarProducto(id)}>
                            Comprar
                        </button>
                    ) 
                    : 
                    (
                        <button type="button" onClick= {() => borrarProducto(id)}>
                            Borrar
                        </button>
                    )
                }
            <br/>


        </div>
    );
}

export default Producto;