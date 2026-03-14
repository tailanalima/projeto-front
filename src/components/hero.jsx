import { useState } from 'react';
import dotsImage from '../assets/dots.png';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import bolochocotudo from "../assets/fotos/bolochocotudo.jpg";
import conetrufapascoa from "..//assets/fotos/conetrufadopascoa.jpg";
import brownie from "..//assets/fotos/sanduichedebrowniechocotudo.jpg";
import pave from "../assets/fotos/pavedechocolate.jpg";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const slides = [
    {
      title: 'Bolos no precinho',
      description: 'Descontos imperdíveis em Bolos de pote.',
      image: bolochocotudo,
    },
    {
      title: 'Novidades Páscoa',
      description: 'Conheça os lançamentos Da Pascoá.',
      image: conetrufapascoa,
    },
    {
      title: 'Brownie em Alta',
      description: 'Os Doces mais procurados com descontos especiais.',
      image: brownie,
    },
    {
      title: 'Promoção Relâmpago',
      description: 'Só hoje: até 60% off em diversos Doces!',
      image: pave,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 2000);

    return () => clearInterval(interval); 
  }, [slides.length]);

  const goToProducts = () => {
    navigate('/produtos');
    window.scrollTo(0, 0);
  };

  const current = slides[currentSlide];

  return (
    <section className="relative overflow-hidden py-3 px-4 md:px-8 lg:px-16 bg-[#f0f0f0]">
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 
        w-[400px] h-[600px] md:w-[500px] md:h-[600px] 
        bg-gradient-to-t from-[#f0f0f0] to-white blur-2xl z-0">
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[500px_auto] items-center gap-10 max-w-7xl mx-auto min-h-[400px]">
        <div className="text-center lg:text-left max-w-[900px] mx-auto lg:mx-0 transition-all duration-300">
          <p className="text-yellow-500 text-sm font-semibold mb-2">
            Melhores ofertas personalizadas:
          </p>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-neutral-900 leading-snug mb-6">
          Os Queridinhos em{' '}
          <span className="inline-flex items-center gap-2">
          Oferta!
            
            
          </span>
        </h1>

          <p className="text-gray-600 text-sm md:text-base font-normal mb-6 max-w-xl mx-auto lg:mx-0">
            {current.description}
          </p>

          <button
            onClick={goToProducts}
            className="bg-pink-600 hover:bg-pink-700 text-white px-12 py-2 rounded-lg font-semibold transition"
          >
            Ver Ofertas
          </button>
        </div>

        <div className="relative flex justify-center lg:justify-end items-center w-full">
          <img
            src={current.image}
            alt={current.title}
            className="w-full object-contain drop-shadow-xl transition-all duration-300"
          />

        </div>
      </div>

      <div className="relative z-10 flex justify-center mt-6 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Selecionar slide ${index + 1}`}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-pink-600 scale-110' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;