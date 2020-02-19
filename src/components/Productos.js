import React, { useEffect } from "react";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { obtenerProductosAction } from "../actions/productoActions";

import Producto from "./Producto";

const Productos = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Consultar la api
    const cargarProductos = () => dispatch(obtenerProductosAction());
    cargarProductos();
  }, []);

  // Obtener el state
  const productos = useSelector(state => state.productos.productos);
  console.log(productos);

  return (
    <React.Fragment>
      <h2 className="text-center my-5">Listado de Productos</h2>
      <table className="table table-striped">
        <thead className="bg-primary table-dark">
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.length === 0
            ? "No hay productos"
            : productos.map(producto => (
                <Producto key={producto.id} producto={producto} />
              ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default Productos;
