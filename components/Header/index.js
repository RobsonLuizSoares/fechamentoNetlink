import React from 'react'
import Link from 'next/link'

const Header = () => {
    return (
        <React.Fragment>
            <div className='header p-4 flex-col md:shadow-lg'>
                <div className=''>
                    <Link href='/'>
                        <a><img className='md:w-40 mx-auto' src='logo16.png' alt='Net Link' /></a>
                    </Link>
                </div>
                <div className=' container mx-auto md:mt-4'>
                    <h1 className='text-center font-bold md:text-xl'>Fechamento de Caixa</h1>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Header