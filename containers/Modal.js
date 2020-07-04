import React, { useState } from 'react'

const Modal = (props) => {
    const [showResult, setShowResult] = useState(false)

    function showResults() {
        setShowResult(true)
    }
    return (
        <div className='md:mt-6'>
            {
                showResult && (
                    <div>
                        <table className='table table-bordered md:w-2/3 mx-auto text-center'>
                            <thead>
                                <tr>
                                    <th>Cópias</th>
                                    <th>Impressões</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{props.valorCopia}</td>
                                    <td>{props.valorImpressao}</td>
                                    <td>{props.total}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>)
            }
            <div className='text-center'>
                <button type="button" className="btn btn-secondary md:mt-6" data-toggle="modal" data-target="#exampleModalCenter" onClick={() => showResults()}>
                    Conferir Valores
                </button>
            </div>
        </div>
    )
}

export default Modal