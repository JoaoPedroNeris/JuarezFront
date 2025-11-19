import sorveteria from "@/assets/juarez-foto-1.webp"
const Sobre = () => {
    return (
        <div className="flex  p-10 bg-casquinha">
            <div>
                <img className="rounded w-200 mx-10" src={sorveteria.src} alt="" />
            </div>
            <div className="w-2/5 text-2xl">
                <h2 className="text-center mb-5 text-5xl! text-abril">Nossa História</h2>
                <p>Sorveteria Juarez fundada nos anos sessenta em Parnaiba PI vindo para Fortaleza nos anos setenta mais precisamente em 1973.</p>
                <p className="my-10">Sempre trabalhando com as melhores frutas e com os melhores produtos em matéria-prima que existe. Na manipulação de nosso sorvete, só trabalhamos com fruta, leite e açúcar.</p>
                <p>É como se o seu mais caro devaneio de intimidade, a tal fórmula secreta do sorvete cuja feitura artesanal só ele e o filho varão conhecem, nos advertisse sobre como a verificação faz as imagens morrerem. E assim nos lembrasse que imaginar sempre será maior do que viver.</p>
            </div>
        </div>
        
    );
}

export default Sobre;