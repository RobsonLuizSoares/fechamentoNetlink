import React from 'react'
import Link from 'next/link'
import useSWR from 'swr'


const fetcher = (...args) => fetch(...args).then(res => res.json())

const Index = () => {

    const { data, error } = useSWR('/api/mensagem', fetcher)

    return (
        <div>
            <p className='text-center text-lg text-xl md:text-2xl font-semibold mt-20'>Sistema Net Link de Envio de Caixas</p>
            <div className='text-center my-20'>
                <Link href='/caixas'>
                    <a className=' btn-caixas px-8 py-3 mb-4  md:text-lg rounded-md md:hover:shadow-lg font-bold md:py-2 md:px-6' >Fechar Caixa</a>
                </Link>
            </div>

            {!data && <p>Carregando...</p>}
            {!error && data && data.showMessage &&
                <p className='my-12 text-center text-lg'>
                    {data.message}
                </p>

            }

        </div>
    )
}

export default Index