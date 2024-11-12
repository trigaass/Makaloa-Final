import { useEffect, useRef, useState } from "react";

export const Apartamentos = () => {
  const [activeImage, setActiveImage] = useState(null);
  const [isAptoVisible, setIsAptoVisible] = useState(false);
  const [isVerdeVisible, setIsVerdeVisible] = useState(false);
  const aptoRef = useRef(null);
  const verdeRef = useRef(null);

  // Defina as imagens que você deseja exibir
  const images = [
    "/outros/PAV 1.png", 
    "/outros/PAV 2.png", 
    "/outros/PAV 3I.png", 
    "/outros/PAV 3S.png", 
    "/outros/PAV ROOFTOP.png", 
    "/outros/PAV TÉRREO.png"
  ];

  // Função chamada ao clicar no botão para exibir as imagens
  const handleImageClick = () => {
    setActiveImage(images); // Atualiza o estado com as imagens
  };

  // Fechar o overlay (opcional, caso queira esconder as imagens novamente)
  const closeOverlay = () => {
    setActiveImage(null); // Limpa as imagens, ocultando o overlay
  };

  useEffect(() => {
    const aptoObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsAptoVisible(true);
          aptoObserver.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (aptoRef.current) {
      aptoObserver.observe(aptoRef.current);
    }

    return () => {
      if (aptoRef.current) {
        aptoObserver.unobserve(aptoRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const verdeObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVerdeVisible(true);
          verdeObserver.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (verdeRef.current) {
      verdeObserver.observe(verdeRef.current);
    }

    return () => {
      if (verdeRef.current) {
        verdeObserver.unobserve(verdeRef.current);
      }
    };
  }, []);

  return (
    <>
      <div id="apartamentos" className="apto" ref={aptoRef}>
        <div className={`ftsapto ${isAptoVisible ? "animate-left" : ""}`}>
          <img src="outros/porto.jpg" alt="Duplex Superior" />
        </div>
        <div className={`txtapto ${isAptoVisible ? "animate-right" : ""}`}>
          <h1>Tranquilidade e proteção em cada detalhe do seu lar à beira-mar.</h1>
          <p>O Makaloa Premium está situado à beira-mar em Porto de Galinhas...</p>
        </div>
        <div className={`enfeiteapto ${isAptoVisible ? "animateapto" : ""}`}>
          <img src="simblos/palhab.png" className="palhab1" />
          <img src="simblos/palhamaiob.png" className="palhab2" />
        </div>
      </div>

      <div className="verde" ref={verdeRef}>
        <div className={`imgsaptos ${isVerdeVisible ? "animate-left" : ""}`}>
          <h1>Studios</h1>
          <img src="fotos/MAKALOAc.jpeg" alt="Studios" />
          <p>xxm² a xx m²</p>
        </div>
        <div className={`imgsaptos ${isVerdeVisible ? "animate-left" : ""}`}>
          <h1>Quartos & Salas</h1>
          <img src="fotos/SALACOZINHAc.jpeg" alt="Quartos & Salas" />
          <p>xxm² a xx m²</p>
        </div>
        <div className={`imgsaptos ${isVerdeVisible ? "animate-left" : ""}`}>
          <h1>Duplex</h1>
          <img src="fotos/DUPLEXINFERIORc.jpeg" alt="Duplex" />
          <p>xxm² a xx m²</p>
        </div>
        <button onClick={handleImageClick}>VER PLANTAS</button>

        {/* Exibir as imagens diretamente quando o botão for clicado */}
        {activeImage && (
          <div className="overlay" onClick={closeOverlay}>
            <div className="overlay-content">
              {activeImage.map((image, index) => (
                <img key={index} src={image} alt={`Imagem ${index + 1}`} />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};