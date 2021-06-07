import React, { useContext } from 'react';
import { Context } from './store/appContext';
import { Link } from 'react-router-dom';


const Resumen = () => {

    const { store } = useContext(Context)

    return (
        <>
            <div className='container mt-5'>
                <div className="row border">
                    <table>
                        <thead>
                            <tr>
                                <th scope="row">Operador</th>
                                <th>Fecha</th>
                                <th>Grupo</th>
                                <th>Kilometraje</th>
                                <th>Total</th>
                                <th>Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                store.resumen != null && store.resumen.length > 0 &&
                                store.resumen.map((item) => {
                                    return (
                                        <tr>
                                            <td>{item.operador}</td>
                                            <td>{item.fecha}</td>
                                            <td>{item.grupo}</td>
                                            <td>{item.kilometraje}</td>
                                            <td>{item.total}</td>
                                            <td>{item.estado}</td>
                                        </tr>
                                    );
                                })}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='container'>
                <div className='row justify-content-center mt-3'>
                    <Link to="/"><button type="button" className="btn btn-info">Formulario</button></Link>
                </div>
            </div>
        </>
    )
}

export default Resumen;