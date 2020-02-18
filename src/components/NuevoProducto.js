import React from "react";

import { useDispatch, useSelector } from "react-redux";

//Actions de  Redux
import { crearNuevoProductoAction } from "../actions/productoActions";

const NuevoProducto = () => {
  // Utilizar useDispatch y te crea una funcion
  const dispatch = useDispatch();

  // Mandar llamar el actio de productoAction
  const agregarProducto = () => dispatch(crearNuevoProductoAction());

  // Cuadno el usuario haga submit
  const submitNuevoProducto = e => {
    e.preventDefault();

    // Validar Formulario

    // Si no hay errores

    // Crear el nuevo producto
    agregarProducto();
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Agregar Nuevo Producto
            </h2>
            <form onSubmit={submitNuevoProducto}>
              <div className="form-group">
                <label htmlFor="">Nombre Producto</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Producto"
                  name="nombre"
                  id=""
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Precio del Producto</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Precio del Producto"
                  name="precio"
                  id=""
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                Agregar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuevoProducto;
