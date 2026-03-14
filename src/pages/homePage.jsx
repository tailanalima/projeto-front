import { useState, useMemo } from 'react'; 
import Section from '../components/section';
import Hero from '../components/hero';
import ProductListing from '../components/HomePage/productListing';
import { IoShirtOutline } from "react-icons/io5";
import { PiBaseballCapLight, PiHeadphonesLight, PiPantsLight } from "react-icons/pi";
import { GiConverseShoe } from "react-icons/gi";
import { FaArrowLeft } from "react-icons/fa"; 
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
import sanduicheBrownieChocotudo from "../assets/fotos/sanduichedebrowniechocotudo.jpg"
import sanduicheBrownieDoceDeLeite from "../assets/fotos/sanduichedebrowniededocedeleite.jpg"
import sanduicheBrownieNinho from "../assets/fotos/sanduichedebrowniedeninho.jpg"


const categoryIcons = [
  { icon: <i className="pi pi-gift text-4xl"></i>, label: "Bolos" },
  { icon: <i className="pi pi-star text-4xl"></i>, label: "Brownies" },
  { icon: <i className="pi pi-sun text-4xl"></i>, label: "Dindins" },
  { icon: <i className="pi pi-box text-4xl"></i>, label: "Conestrufados" },
  { icon: <i className="pi pi-heart text-4xl"></i>, label: "Sobremesas" },
];

const productsData = [
  { id: 1,  title: "Bolo de pote de ninho com Nutella", name: "Bolo de Pote Ninho com Nutella", image: bolodepotinho, price: 12.50, priceDiscount: 10, category: "Bolos" },
  { id: 2, title: "Bolo de Pote de Pistache", name: "Bolo de Pote de Pistache", image: bolopistache, price: 12.50, category: "Bolos", priceDiscount: 9.99 },
  { id: 3, title: "Bolo de pote sensação", name: "Bolo de Pote Sensação", image: bolosensacao, price: 12.50, category: "Bolos", priceDiscount: 10 },
  { id: 4, title: "Brownie de Doce de Leite", name: "Brownie com Doce de Leite", image: browdocedeleite, price: 10.00, category: "Brownie", priceDiscount: 8 },
  { id: 5,  title: "ChocoBrownie", name: "ChocoBrownie", image: chocobrow, price: 8, category: "Brownie" },
  { id: 6, title: "Brownie de Pistache", name: "Brownie com Pistache", image: browpistache, price: 10, category: "Brownie" },
  { id: 7, title: "Cone Trufado Ninho com Nutela", name: "Cone Trufado Ninho com Nutella", image: conenut, price: 12.50, priceDiscount: 10, category: "Conestrufados" },
  { id: 8, title: "Cone Trufado de Chocolate Branco", name: "Cone Trufado de Chocolate branco", image: conebranco, price: 8, category: "Conestrufados" },
  { id: 9,  title: "DinDin Gourmet", name: "DinDin Gourmet", image: dindin, price: 2.4, category: "DinDin" },
  { id: 10,  title: "Delicia De Uva", name: "Sobremesa de Uva", image: sobreuva, price: 50, category: "Sobremesas" },
  { id: 11, title: "Pavê de chocolate", name: "Pave de Chocolate", image: pave, price: 10, category: "Sobremesas" },
  { id: 12, title: "Brigadeiro de Morango", name: "Brigadeiro de Pote", image: brigadeiro, price: 4, category: "Sobremesas" },
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
    return productsData.filter(product => {
      // Normaliza para ignorar maiúsculas, minúsculas e o "s" no final
      const pCat = product.category.toLowerCase().trim().replace(/s$/, '');
      const sCat = selectedCategory.toLowerCase().trim().replace(/s$/, '');
      
      return pCat === sCat;
    });
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
          Sobremesas em destaque:
        </h2>

        <div className="grid sm:grid-cols-4 md:grid-cols-3 gap-3 px-2 md:px-20 lg:px-40 xl:px-58">
  {[
    sanduicheBrownieChocotudo,
    sanduicheBrownieDoceDeLeite,
    sanduicheBrownieNinho
  ].map((image, index) => (
    <div key={index} className="relative overflow-visible bg-white rounded-xl shadow aspect-square">
      <img src={image} alt={`Coleção ${index + 1}`} className="w-full h-full object-contain p-4" />
      <div className="absolute top-2 left-4 bg-lime-200 text-[12px] font-bold text-gray-900 px-3 py-[3px] rounded-full z-10">
        30% OFF
      </div>
      <div className="absolute bottom-6 left-4 z-10">
        {/* Aqui mudamos o onClick para levar para a página de esgotado */}
        <button 
          onClick={() => navigate('/esgotado')} 
          className="bg-white text-pink-600 text-sm font-semibold px-6 py-2 rounded-md shadow hover:bg-pink-100 transition"
        >
          Comprar
        </button>
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
            Não perca essa chance de conseguir seu Cone Trufado para este Natal. Adiquira logo o seu!!
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
