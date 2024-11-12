import { Formulario } from "../form"

export const Contato = () =>{
    return(
        <div id="contato" className="contato">
            <div className="form">
                <h1>Ficou interessado?</h1>
                <p>Preencha o formulário e um de nossos especialistas entrará em contato com você.</p>
                <Formulario />
            </div>
            <div className="entreemcontato">
                <h1>Entre em contato</h1>
                <a href="https://api.whatsapp.com/send/?phone=558133145030&text=Quero+mais+informações+sobre+o+Vila+Porto%21&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer"><img src="outros/whatsapp.png" />(81) 3314-5030</a>
                <a href="comercial@vivvar.com.br"> <img src="/outros/o-email.png" />comercial@vivvar.com.br</a>
                <a href="https://www.instagram.com/vivvarconstrutora/" target="_blank" rel="noopener noreferrer"><img src="/outros/instagram.png" />@vivvarconstrutora</a>
                <a href="https://vivvar.com.br" target="_blank" rel="noopener noreferrer"><img src="/outros/vivvar.svg" className="logoc" /></a>
            </div>
        </div>
    )
}