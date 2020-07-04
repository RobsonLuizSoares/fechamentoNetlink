import React from 'react'
import Link from 'next/link'
import useSWR from 'swr'


const fetcher = (...args) => fetch(...args).then(res => res.json())

const Index = () => {

    const { data, error } = useSWR('/api/mensagem', fetcher)

    return (
        <div>
            <p className='text-center mt-20'>Sistema Net Link de Envio de Caixas</p>
            <div className='text-center my-20'>
                <Link href='/caixas'>
                    <a className='btn-caixas md:text-2xl rounded-lg md:hover:shadow-lg font-bold md:py-2 md:px-6'>Fechar Caixa</a>
                </Link>
            </div>

            {!data && <p>Carregando...</p>}
            {!error && data && data.showMessage &&
                <p className='my-12 text-center'>
                    {data.message}
                </p>

            }

        </div>
    )
}

export default Index