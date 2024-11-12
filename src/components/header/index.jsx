import { useState } from "react";

export const Headder = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="headder">
            <div className="hlogo">
                <a href="#banner"><img src="outros/LOGO-MAKALOAflex.png" /></a>
            </div>
            <div className={`menu ${isMenuOpen ? 'show' : ''}`}>
                <a href="#empreendimento">Empreendimento</a>
                <a href="#apartamentos">Apartamentos</a>
                <a href="#localizacao">Localização</a>
                <a href="#contato">Contato</a>
            </div>
            <div className="menu-hamburguer" onClick={toggleMenu}>
                &#9776;
            </div>
        </div>
    )
}