import Layout from '../components/Layout'
import styles from '../styles/Estiloso.module.css'

export default () => {
    return (
        <Layout titulo="Exemplo de CSS Modularizado">
            <div className={styles.roxo}>
                <h1>Teste</h1>
            </div>
        </Layout>
    )
}