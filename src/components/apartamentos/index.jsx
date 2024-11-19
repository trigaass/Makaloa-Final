import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules"; // A partir da versão 9 do Swiper, módulos são importados assim

export const Apartamentos = () => {
    const [activeImage, setActiveImage] = useState(null);
    const [isAptoVisible, setIsAptoVisible] = useState(false);
    const [isVerdeVisible, setIsVerdeVisible] = useState(false);
    const aptoRef = useRef(null);
    const verdeRef = useRef(null);

    const images = [
        "/outros/PAV 1.png",
        "/outros/PAV 2.png",
        "/outros/PAV 3I.png",
        "/outros/PAV 3S.png",
        "/outros/PAV ROOFTOP.png",
        "/outros/PAV TÉRREO.png"
    ];

    const handleImageClick = () => {
        setActiveImage(images);
    };

    const closeOverlay = () => {
        setActiveImage(null);
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
                    <p>O Makaloa Premium está situado à beira-mar em Porto de Galinhas, destino renomado por suas piscinas naturais de águas cristalinas e mornas, que abrigam uma rica diversidade de vida marinha. Esta praia, considerada uma das melhores do Brasil, é cercada por coqueirais, arrecifes e um clima tropical que atrai visitantes o ano inteiro.
                            <br/><br/>
                    Além disso, Porto de Galinhas preserva uma rica cultura local, com artesanato típico e uma gastronomia diversificada, oferecendo uma experiência única tanto para turistas quanto para moradores. Ao longo do ano, o clima tropical favorece atividades ao ar livre, tornando este lugar um refúgio de beleza natural e tranquilidade.</p>
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
                    <p>18,45m à 23,13m²</p>
                </div>
                <div className={`imgsaptos ${isVerdeVisible ? "animate-left" : ""}`}>
                    <h1>Quartos & Salas</h1>
                    <img src="fotos/SALACOZINHAc.jpeg" alt="Quartos & Salas" />
                    <p>22,22 à 28,93m²</p>
                </div>
                <div className={`imgsaptos ${isVerdeVisible ? "animate-left" : ""}`}>
                    <h1>Duplex</h1>
                    <img src="fotos/DUPLEXINFERIORc.jpeg" alt="Duplex" />
                    <p>44,31 à 58,01m²</p>
                </div>
                <button onClick={handleImageClick}>VER PLANTAS</button>

                {activeImage && (
                    <div className="overlay" onClick={closeOverlay}>
                        <div className="overlay-content">
                            <Swiper
                                spaceBetween={10}
                                slidesPerView={1}
                                pagination={{ clickable: true }}
                                modules={[Pagination]}
                            >
                                {activeImage.map((image, index) => (
                                    <SwiperSlide key={index}>
                                        <img src={image} alt={`Imagem ${index + 1}`} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};