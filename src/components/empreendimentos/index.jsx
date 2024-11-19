import { useEffect, useRef, useState } from "react";

export const Empreendimento = () => {
    const [isEmpVisible, setIsEmpVisible] = useState(false);
    const [isGalleryVisible, setIsGalleryVisible] = useState(false);
    const [activeImage, setActiveImage] = useState(null);
    const [activeImageIndex, setActiveImageIndex] = useState(null);
    const [animationClass, setAnimationClass] = useState("");
    const empreendimentoRef = useRef(null);
    const galeriaRef = useRef(null);

    const imageSources = [
        "fotos/FACHADARUA.jpeg",
        "fotos/BICICLETARIO.jpeg",
        "fotos/CONVENIENCIA.jpeg",
        "fotos/CONVIVENCIA.jpeg",
        "fotos/PISCINAFIREPLACE.jpeg",
        "fotos/ACADEMIA.jpeg",
        "fotos/QUARTO.jpeg",
        "fotos/RECEPCAO.jpeg",
        "fotos/SAUNA.jpeg"
    ];

    useEffect(() => {
        const empreendimentoObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsEmpVisible(true);
                    empreendimentoObserver.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        if (empreendimentoRef.current) {
            empreendimentoObserver.observe(empreendimentoRef.current);
        }

        const galeriaObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsGalleryVisible(true);
                    galeriaObserver.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        if (galeriaRef.current) {
            galeriaObserver.observe(galeriaRef.current);
        }

        return () => {
            if (empreendimentoRef.current) {
                empreendimentoObserver.unobserve(empreendimentoRef.current);
            }
            if (galeriaRef.current) {
                galeriaObserver.unobserve(galeriaRef.current);
            }
        };
    }, []);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (activeImage !== null) {
                if (e.key === "ArrowRight") {
                    setAnimationClass("slide-in-right");
                    navigateToNextImage();
                } else if (e.key === "ArrowLeft") {
                    setAnimationClass("slide-in-left");
                    navigateToPreviousImage();
                } else if (e.key === "Escape") {
                    closeOverlay();
                }
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [activeImage]);

    const handleImageClick = (src) => {
        const index = imageSources.indexOf(src);
        setActiveImage(src);
        setActiveImageIndex(index);
        setAnimationClass("");
        setTimeout(() => {
            setAnimationClass("slide-in-right");
        }, 0);
    };

    const navigateToNextImage = () => {
        if (activeImageIndex !== null) {
            const nextIndex = (activeImageIndex + 1) % imageSources.length;
            setActiveImageIndex(nextIndex);
            setAnimationClass("");
            setTimeout(() => {
                setActiveImage(imageSources[nextIndex]);
                setAnimationClass("slide-in-right");
            }, 0);
        }
    };

    const navigateToPreviousImage = () => {
        if (activeImageIndex !== null) {
            const prevIndex = (activeImageIndex - 1 + imageSources.length) % imageSources.length;
            setActiveImageIndex(prevIndex);
            setAnimationClass("");
            setTimeout(() => {
                setActiveImage(imageSources[prevIndex]);
                setAnimationClass("slide-in-left");
            }, 0);
        }
    };

    const closeOverlay = () => {
        setActiveImage(null);
        setActiveImageIndex(null);
        setAnimationClass("");
    };

    const handleButtonClick = (e, direction) => {
        e.stopPropagation();
        if (direction === "next") {
            navigateToNextImage();
        } else {
            navigateToPreviousImage();
        }
    };

    return (
        <>
            <div
                id="empreendimento"
                className={`empbic ${isEmpVisible ? "animate" : ""}`}
                ref={empreendimentoRef}
            >
                <div className="laranja">
                    <img src="fotos/CONVIVENCIA.jpeg" className="fundo" />
                    <div className="txtemp">
                        <h1>Áreas exclusivas com o melhor em conforto e vista privilegiada do mar.</h1>
                    </div>
                    <div className="difemp">
                        <div className="pd">
                            <p><img src="/outros/4.png" />Recepção</p>
                            <p><img src="/outros/1.png" />Bicicletário</p>
                            <p><img src="/outros/3.png" />Área de convivência</p>
                            <p><img src="/outros/7.png" />Deck com piscina</p>
                        </div>
                        <div className="pe">
                            <p><img src="/outros/5.png" />Salão de jogos</p>
                            <p><img src="/outros/6.png" />Academia</p>
                            <p><img src="/outros/2.png" />Sauna</p>
                            <p><img src="/outros/8.png" />Piscina com Bar</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="galeria" ref={galeriaRef}>
                {imageSources.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Imagem ${index + 1}`}
                        className={`gallery-image ${isGalleryVisible ? "animate" : ""}`}
                        style={{
                            transitionDelay: `${index * 0.2}s`
                        }}
                        onClick={() => handleImageClick(src)}
                    />
                ))}
                <img src="simblos/ondasv.png" className={`ondasv ${isGalleryVisible ? "animate" : ""}`} />
                <img src="simblos/conchal.png" className={`conchal ${isGalleryVisible ? "animate" : ""}`} />
            </div>
            {activeImage && (
                <div className="overlaye" onClick={closeOverlay}>
                    <div className="overlaye-content">
                        <img
                            key={activeImage}
                            src={activeImage}
                            alt="Overlay"
                            className={`overlay-image ${animationClass}`}
                        />
                        <div className="navigation-buttons">
                            <button 
                                onClick={(e) => handleButtonClick(e, "prev")} 
                                className="nav-button">◀</button>
                            <button 
                                onClick={(e) => handleButtonClick(e, "next")} 
                                className="nav-button">▶</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};