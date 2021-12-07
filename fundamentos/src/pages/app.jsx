import Cabecalho from '../components/Cabecalho'
import Link from 'next/link'

export default () => {
    return (
        <>
            <Link href="/">
                Voltar!
            </Link>
            <Cabecalho titulo="Fundamentos de Next.js" />
        </>
    )
}