export const Banner = () => {
        const scrollToBottom = () => {
            window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: 'smooth'
            });
        };

        return (
            <div className="banner" id="banner">
                <div className="gradient">
                    <img src="/simblos/estrelab.png" className="estrelab" />
                    <img src="/simblos/estrelal.png" className="estrelal" />
                    <div className="txt">
                        <p className="titulo">
                            <strong>Porto de Galinhas,</strong>
                            <br />
                            O litoral que você sempre quis, <strong>agora ao seu alcance.</strong>
                        </p>
                        <p>
                            UM ESPAÇO QUE UNE NATUREZA E LUXO, PROJETADO PARA SEU BEM ESTAR
                        </p>
                        <button onClick={scrollToBottom}>Quero saber mais</button>
                    </div>
                </div>
                <img src="/simblos/penab.png" className="penab" />
            </div>
        )
    }