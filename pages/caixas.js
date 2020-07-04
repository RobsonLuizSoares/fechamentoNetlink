import React, { useState } from 'react'
import Modal from '../containers/Modal'
import Link from 'next/link'

const Caixas = () => {
    const [form, setForm] = useState({
        Data: Date.now(),
        Nome: '',
        Loja: '',
        ValorCopia: '',
        ValorImpressao: '',
        Total: ''
    })
    const [success, setSuccess] = useState(false)
    const [retorno, setRetorno] = useState({})
    const save = async () => {
        try {
            const response = await fetch('/api/save', {
                method: 'POST',
                body: JSON.stringify(form)
            })
            const data = await response.json()
            setSuccess(true)
            setRetorno(data)
        } catch (err) {
            console.error(err)
        }
    }

    const onChange = evt => {
        const value = evt.target.value
        const key = evt.target.name
        setForm(old => ({
            ...old,
            [key]: value
        }))
    }

    return (
        <div>
            <h1 className='text-center my-6 font-bold text-2xl'>Envio de Caixa</h1>
            <p className='text-center my-6'>Preencha os campos com os valores correspondentes e depois clique em enviar para enviar os dados do fechamento do seu caixa</p>

            {!success &&
                <div>
                    <div className='md:w-3/6 mx-auto flex'>
                        <label className='md:w-64 my-auto'> Nome: </label>
                        <input
                            className='p-1 border w-full border-gray-300 rounded-md my-4'
                            type='text'
                            name='Nome'
                            placeholder='Nome'
                            value={form.Nome}
                            onChange={onChange}
                        />
                    </div>
                    <div className='md:w-3/6 mx-auto flex'>
                        <label className='md:w-64 my-auto'> Loja: </label>
                        <input
                            className='p-1 border w-full border-gray-300 rounded-md my-4'
                            type='text'
                            name='Loja'
                            placeholder='Loja'
                            value={form.Loja}
                            onChange={onChange}
                        />
                    </div>
                    <div className='md:w-3/6 mx-auto flex'>
                        <label className='md:w-64 my-auto'> Valor Cópias: </label>
                        <input
                            className='p-1 border w-full border-gray-300 rounded-md my-4'
                            type='text'
                            name='ValorCopia'
                            placeholder='Valor das Cópias'
                            value={form.ValorCopia}
                            onChange={onChange}
                        />
                    </div>
                    <div className='md:w-3/6 mx-auto flex'>
                        <label className='md:w-64 my-auto'> Valor Impressões: </label>
                        <input
                            className='p-1 border w-full border-gray-300 rounded-md my-4'
                            type='text'
                            name='ValorImpressao'
                            placeholder='Valor das Impressões'
                            value={form.ValorImpressao}
                            onChange={onChange}
                        />
                    </div>
                    <div className='md:w-3/6 mx-auto flex '>
                        <label className='md:w-64 my-auto font-bold text-lg'> Total: </label>
                        <input
                            className='p-1 border w-full border-gray-300 rounded-md my-4'
                            type='text'
                            name='Total'
                            placeholder='Total'
                            value={form.Total}
                            onChange={onChange}
                        />
                    </div>
                    {
                        !success &&
                        <Modal
                            total={form.Total}
                            valorCopia={form.ValorCopia}
                            valorImpressao={form.ValorImpressao}
                        />
                    }
                    <div className='text-center md:my-12'>
                        <button className='btn-caixas md:text-lg rounded-md md:hover:shadow-lg font-bold md:py-2 md:px-6' onClick={save}>Salvar</button>
                    </div>
                </div>

            }

            {success &&
                <div className='text-center md:mt-12 md:w-1/4 mx-auto'>
                    <h3 className='md:font-bold md:text-lg md:mb-12 bg-blue-100 border-t border-b border-blue-700 px-4 py-3'>Obrigado por enviar o caixa! </h3>
                    <Link href='/'>
                        <a className='btn-caixas md:text-lg rounded-md md:hover:shadow-lg font-bold md:py-2 md:px-6'>Página Inicial</a>
                    </Link>

                </div>
            }
        </div>
    )
}

export default Caixas