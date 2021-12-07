import Link from 'next/link'
import style from '../styles/Navegador.module.css'

export default (props) => {
    return (
        <Link href={props.destino}>
            <div className={style.navegador} style={{
                backgroundColor: props.cor ?? 'dodgerblue'
            }}>
                {props.texto}
            </div>
        </Link>
    )
}