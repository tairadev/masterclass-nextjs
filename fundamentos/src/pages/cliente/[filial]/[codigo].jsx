import Layout from '../../../components/Layout'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default () => {

    useEffect(() => {
        console.log(router.query.codigo)
    }, [])

    const router = useRouter()

    return (
        <Layout titulo="Navegação dinâmica">
            <h4>Código = {router.query.codigo}</h4>
            <span>Filial = {router.query.filial}</span>
        </Layout>
    )
}