import { useState, useMemo } from 'react'; 
import Section from '../components/section';
import Hero from '../components/hero';
import ProductListing from '../components/HomePage/productListing';
import { IoShirtOutline } from "react-icons/io5";
import { PiBaseballCapLight, PiHeadphonesLight, PiPantsLight } from "react-icons/pi";
import { GiConverseShoe } from "react-icons/gi";
import { FaArrowLeft } from "react-icons/fa"; 
import airJordanImg from '../assets/Laye 1.png';
import { useNavigate } from 'react-router-dom';
import bolodepotinho from "../assets/fotos/bolodepoteninhocomnutela.jpg";
import bolopistache from "../assets/fotos/bolodepotepistache.jpg";
import bolosensacao from '../assets/fotos/bolodepotesensacao.jpg';
import browdocedeleite from '../assets/fotos/browniecomdocedeleite.jpg';
import chocobrow from '../assets/fotos/chocobrownie.jpg';
import browpistache from '../assets/fotos/sanduichedebrowniedepistache.jpg';
import conenut from '../assets/fotos/conetrufadoninhocomnutela.jpg';
import conebranco from '../assets/fotos/conetrufadochocolatebranco.jpg';
import dindin from "../assets/fotos/dindingourmetdeuva.jpg";
import sobreuva from '../assets/fotos/sobremesadeuva.jpg';
import pave from '../assets/fotos/pavedechocolate.jpg';
import brigadeiro from '../assets/fotos/brigadeironopote.jpg';
import conenatal from '../assets/fotos/conetrufadonatal.jpg';



const categoryIcons = [
  { icon: <IoShirtOutline size={40} />, label: "Bolos" },
  { icon: <PiPantsLight size={40} />, label: "Brownies" },
  { icon: <PiBaseballCapLight size={40} />, label: "Dindins" },
  { icon: <PiHeadphonesLight size={40} />, label: "Cones Trufados" },
  { icon: <GiConverseShoe size={40} />, label: "Sobremesas" },
];

const productsData = [
  { id: 1, name: "Bolo de pote ninho com nutella", image: bolodepotinho, price: 200, priceDiscount: 149.9, category: "Bolos" },
  { id: 2, name: "Bolo de pote de pistache", image: bolopistache, price: 200, category: "Bolos", priceDiscount: 180 },
  { id: 3, name: "Bolo de pote sensacao", image: bolosensacao, price: 99.9, category: "Bolos", priceDiscount: 89.9 },
  { id: 4, name: "Brownie com doce de leite", image: browdocedeleite, price: 150, category: "Brownie", priceDiscount: 120 },
  { id: 5, name: "ChocoBrownie", image: chocobrow, price: 75, category: "Brownie" },
  { id: 6, name: "Brownie de pistache", image: browpistache, price: 30, category: "Brownie" },
  { id: 7, name: "Cone Trufado ninho com nutella", image: conenut, price: 200, priceDiscount: 180, category: "Cones Trufados" },
  { id: 8, name: "Cone Trufado de chocolate branco", image: conebranco, price: 250, category: "Cones Trufados" },
  { id: 9, name: "DinDin Goumet sabor uva", image: dindin, price: 100, category: "DinDin" },
  { id: 10, name: "Sobremesa de uva", image: sobreuva, price: 400, category: "Sobremesas" },
  { id: 11, name: "Pave de chocolate", image: pave, price: 200, category: "Sobremesas" },
  { id: 12, name: "Brigadeiro de pote", image: brigadeiro, price: 299, category: "Sobremesas" },
];

const HomePage = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);

  // CORREÇÃO: Em vez de usar useEffect + outro useState, calculamos o filtro "on the fly".
  // O useMemo memoriza o resultado e só recalcula se 'selectedCategory' mudar.
  const filteredProducts = useMemo(() => {
    if (!selectedCategory) {
      return productsData;
    }
    return productsData.filter(product => product.category === selectedCategory);
  }, [selectedCategory]);

  const handleCategoryClick = (categoryLabel) => {
    if (selectedCategory === categoryLabel) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(categoryLabel);
    }
  };

  const goToProducts = () => {
    navigate('/produtos');
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Hero />

      <div className="bg-[#f6f6f6] pb-20 pt-10">
        <h2 className="text-2xl font-semibold text-gray-700 px-2 md:px-20 lg:px-40 xl:px-58 mb-6">
          Coleções em destaque:
        </h2>

        <div className="grid sm:grid-cols-4 md:grid-cols-3 gap-3 px-2 md:px-20 lg:px-40 xl:px-58">
          {[ "/assets/fotos/logo.jpg", "/assets/fotos/logo.jpg", "/assets/fotos/logo.jpg" ].map((image, index) => (
            <div key={index} className="relative overflow-visible bg-white rounded-xl shadow aspect-square">
              <img src={image} alt={`Coleção ${index + 1}`} className="w-full h-full object-contain p-4" />
              <div className="absolute top-2 left-4 bg-lime-200 text-[12px] font-bold text-gray-900 px-3 py-[3px] rounded-full z-10">30% OFF</div>
              <div className="absolute bottom-6 left-4 z-10">
                <button onClick={goToProducts} className="bg-white text-pink-600 text-sm font-semibold px-6 py-2 rounded-md shadow hover:bg-pink-100 transition">Comprar</button>
              </div>
            </div>
          ))}
        </div>

        <Section>
          <div className="flex justify-center gap-6 flex-wrap px-4 md:px-0 mt-10">
            {categoryIcons.map((item, index) => (
              <div
                key={index}
                onClick={() => handleCategoryClick(item.label)}
                className="flex flex-col items-center gap-2 cursor-pointer group"
              >
                <div className={`w-24 h-24 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 group-hover:text-pink-600 transition-colors ${selectedCategory === item.label ? 'ring-2 ring-offset-2 ring-pink-600' : ''}`}>
                  {item.icon}
                </div>
                <span className="text-sm text-gray-700 font-medium group-hover:text-pink-600 transition-colors">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {selectedCategory && (
            <div className="text-center mt-8">
              <button
                onClick={() => setSelectedCategory(null)}
                className="flex items-center gap-2 mx-auto text-pink-600 font-semibold hover:underline"
              >
                <FaArrowLeft />
                Voltar para todos os produtos
              </button>
            </div>
          )}
        </Section>

        <Section>
          {/* Passamos o 'filteredProducts' calculado pelo useMemo */}
          <ProductListing products={filteredProducts} />
        </Section>
      </div>

      <section className="bg-white py-16 px-4 md:px-20 lg:px-32 flex flex-col md:flex-row items-center gap-12 relative">
        <div className="absolute left-1/2 -translate-x-1/2 md:left-44 md:translate-x-0 top-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full bg-gradient-to-t from-white to-purple-200/40 z-0"></div>
        <div className="flex-1 z-10">
          <img src={conenatal} alt="Cones Trufados para o natal" className="w-full max-w-md ml-0 mx-auto" />
        </div>
        <div className="flex-1 text-center md:text-left z-10">
          <p className="text-sm font-semibold text-pink-600 mb-2">Oferta especial</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-600 leading-tight mb-4">
            Cones Trufados para o<br />Natal
          </h2>
          <p className="text-gray-600 mb-6 max-w-lg">
            Não perca essa chanche de conseguir seu Cone Trufado para este Natal. adiquira logo o seu!!
          </p>
          <button onClick={goToProducts} className="bg-pink-600 hover:bg-pink-700 text-white px-12 py-2 rounded-lg font-semibold transition">
            Ver Oferta
          </button>
        </div>
      </section>
    </>
  );
};

export default HomePage;
