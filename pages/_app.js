import React from 'react'
import '../css/styles.css'
import Layout from '../components/Layout'
import PageTitle from '../containers/PageTitle'

const MyApp = ({ Component, pageProps }) => {
    return (
        <Layout>
            <PageTitle title='Fechamento de Caixa' />
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp