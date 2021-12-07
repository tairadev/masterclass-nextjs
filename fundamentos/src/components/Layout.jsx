import Link from 'next/link'
import style from '../styles/Layout.module.css'

export default (props) => {
    return (
        <div className={style.layout}>
            <div className={style.cabecalho}>
                <h1>{props.titulo ?? 'Mais um exemplo'}</h1>
                <Link href="/">Voltar</Link>
            </div>
            <div className={style.conteudo}>
                {props.children}
            </div>
        </div>
    )
}