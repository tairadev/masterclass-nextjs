import Layout from '../components/Layout';

export default () => {
    const titulo = <h1>Teste 12345</h1>;

    function subtitulo() {
        return <h2>{"é muito legal".toUpperCase()}</h2>
    }

    return (
        <Layout titulo="Exemplo de CSS Modularizado">
            {titulo}
            {subtitulo()}
        </Layout>
    )
}