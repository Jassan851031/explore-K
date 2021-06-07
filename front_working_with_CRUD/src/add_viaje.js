import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom'
import { Context } from './store/appContext';
import './table.css'

const Agregar = (props) => {
    const { actions } = useContext(Context);
    let [newViaje, setNewViaje] = useState({
        operador: '',
        fecha: '',
        grupo: '',
        kilometraje: '',
        estado: '',
        total: 0,
    })

    const handleChange = (event) => {
        setNewViaje({
            ...newViaje,
            [event.target.name]: event.target.value
        })
    }

    const clean = () => {
        setNewViaje({
            operador: '',
            fecha: '',
            grupo: '',
            kilometraje: '',
            estado: '',
            total: 0
        })
        let radio = document.querySelector('input[type=radio][name=estado]:checked');
        radio.checked = false;
        let table = document.getElementsByClassName('table')
        for (let i = 0; i < table.length; i++) {
            let col = table[i].getElementsByTagName('td')
            for (let j = 0; j < col.length; j++) {
                if (j === 1 || j === 2 || j === 3)   {
                    col[j].children[0].checked = false
                }
        
            }
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        actions.addViaje(newViaje);
        clean()
    }

    const getColums = (e) => {
        let table = document.getElementsByClassName('table')
        let aux = 0.0

        for (let i = 0; i < table.length; i++) {
            let col = table[i].getElementsByTagName('td')
            for (let j = 0; j < col.length; j++) {
                if (j === 1 && col[j].children[0].checked) {
                    aux += parseFloat(col[j].children[0].value)
                }
                else if (j === 2 && newViaje.total < 0 && col[j].children[0].checked) {
                    aux -= parseFloat(col[j].children[0].value)
                }
                else if (j === 3 && newViaje.total < 0 && col[j].children[0].checked) {
                    aux -= parseFloat(col[j].children[0].value)
                }
            }
        }

        newViaje.total = aux

        newViaje.estado = aux > 7 ? 'Aprobado' : 'Desaprobado'

        setNewViaje({ ...newViaje })
    }

    return (
        <>
            <div className="container mt-5" >
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                Formulario
                        </div>
                            <div className="container mt-5">
                                <div className="row">
                                    <div className="col-md-12">
                                        <form onSubmit={(e) => handleSubmit(e)}>
                                            <div className="form-row">
                                                <div className="col-md-6 mb-3">
                                                    <label>Operador</label>
                                                    <input className="form-control" name='operador' required value={newViaje.operador} onChange={(e) => handleChange(e)} />
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <label>Fecha</label>
                                                    <input type="text" className="form-control" name='fecha' required value={newViaje.fecha} onChange={(e) => handleChange(e)} />
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="col-md-6 mb-3">
                                                    <label>Grupo</label>
                                                    <input type="text" className="form-control" name='grupo' required value={newViaje.grupo} onChange={(e) => handleChange(e)} />
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <label>Kilometraje</label>
                                                    <input type="number" className="form-control" name='kilometraje' required value={newViaje.kilometraje} onChange={(e) => handleChange(e)} />
                                                </div>
                                            </div>

                                            <div className="form-row">
                                                <div className="col-md-6 mb-3">
                                                    <label>Total</label>
                                                    <input type="text" className="form-control" name='total' required value={newViaje.total} />
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <label>Estado</label>
                                                    <input type="text" className="form-control" name='estado' required defaultValue={newViaje.estado} />
                                                </div>
                                            </div>
                                            <div className="card-footer text-right">
                                                <button className="btn btn-primary mr-1" id='submit' type="submit" >Guardar</button>
                                            </div>
                                        </form>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mt-5'>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <table>
                                <tbody className='myTable'>
                                    <tr className='table-head'>
                                        <th>Carrocería</th>
                                        <th>B</th>
                                        <th>M</th>
                                        <th>N/A</th>
                                    </tr>
                                    <tr className='table'>
                                        <td>PARACHOQUE DELANTERO</td>
                                        <td><input className='myClass' type="radio" id="bueno" name="estado" value={2.5} required onClick={getColums} /></td>
                                        <td><input className='myClass' type="radio" id="malo" name="estado" value={2.5} required onClick={getColums} /></td>
                                        <td><input className='myClass' type="radio" id="N/A" name="estado" value={2.5} required onClick={getColums} /></td>
                                    </tr>
                                    <tr className='table'>
                                        <td>PARACHOQUE TRASERO</td>
                                        <td><input className='myClass' type="radio" id="bueno" name="estado1" value={2.5} required onClick={getColums} /></td>
                                        <td><input className='myClass' type="radio" id="malo" name="estado1" value={2.5} required onClick={getColums} /></td>
                                        <td><input className='myClass' type="radio" id="N/A" name="estado1" value={2.5} required onClick={getColums} /></td>
                                    </tr>
                                    <tr className='table'>
                                        <td>PUERTA DERECHA</td>
                                        <td><input className='myClass' type="radio" id="bueno" name="estado2" value={2.5} required onClick={getColums} /></td>
                                        <td><input className='myClass' type="radio" id="malo" name="estado2" value={2.5} required onClick={getColums} /></td>
                                        <td><input className='myClass' type="radio" id="N/A" name="estado2" value={2.5} required onClick={getColums} /></td>
                                    </tr>
                                    <tr className='table'>
                                        <td>PUERTA IZQUIERDA</td>
                                        <td><input className='myClass' type="radio" id="bueno" name="estado3" value={2.5} required onClick={getColums} /></td>
                                        <td><input className='myClass' type="radio" id="malo" name="estado3" value={2.5} required onClick={getColums} /></td>
                                        <td><input className='myClass' type="radio" id="N/A" name="estado3" value={2.5} required onClick={getColums} /></td>
                                    </tr>
                                    <tr className='table'>
                                        <td>TECHO</td>
                                        <td><input className='myClass' type="radio" id="bueno" name="estado4" value={2.5} required onClick={getColums} /></td>
                                        <td><input className='myClass' type="radio" id="malo" name="estado4" value={2.5} required onClick={getColums} /></td>
                                        <td><input className='myClass' type="radio" id="N/A" name="estado4" value={2.5} required onClick={getColums} /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row justify-content-center'>
                <Link to="/resumen"><button type="button" className="btn btn-info">Información</button></Link>
                </div>
            </div>
        </>
    );
}

export default Agregar;