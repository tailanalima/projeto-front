import bolonn from "../assets/fotos/bolodepoteninhocomnutela.jpg";
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
export const products = [
  {
    id: 1,
    title: "Bolo de pote",
    name: "Bolo de pote de ninho com nutela",
    reference: "Ref. bolo270-BR",
    stars: 4.5,
    rating: 128,
    price: 299.99,
    priceDiscount: 209.99,
    description: "Bolo bom e Gostoso.",
    image: bolonn,
    images: [
      { src: bolonn },
      { src: "https://imgnike-a.akamaihd.net/360x360/0163497WA1_1.jpg" },
      { src: "https://imgnike-a.akamaihd.net/360x360/0163497WA1_2.jpg" }
    ],
    category: "Bolos",
    gender: "P",
    condition: "Entrega",
    brand: "Ninho",
    sizes: [1,2,3],
    colors: ["#000000", "#FFFFFF"],
    relatedProducts: [2, 3, 4]
  },
  {
    id: 2,
    title: "Bolo de Pote de Pistache",
    name: "Bolo de Pistache",
    reference: "Ref. Bolo271-BR",
    stars: 4.7,
    rating: 200,
    price: 349.99,
    priceDiscount: 249.99,
    description: "Um Bolo Maravilho com sabor de pistache",
    image: bolopistache,
    images: [
      { src: bolopistache },
      { src: "https://imgadidas-a.akamaihd.net/360x360/0163498WA1_1.jpg" },
      { src: "https://imgadidas-a.akamaihd.net/360x360/0163498WA1_2.jpg" }
    ],
    category: "Bolos",
    gender: "P",
    condition: "Entrega",
    brand: "Pistache",
    sizes: [37, 38, 39, 40, 41],
    colors: ["#1a1a1a", "#eaeaea"],
    relatedProducts: [1, 3]
  },
  {
    id: 3,
    title: "Bolo de pote sensação",
    name: "Bolo Sabor Sensação",
    reference: "Ref. Bolo272-BR",
    stars: 4.3,
    rating: 150,
    price: 279.99,
    priceDiscount: 199.99,
    description: "Bolo de bote delicioso sabor Chocolate com Morango.",
    image: bolosensacao,
    images: [
      { src: bolosensacao },
      { src: "https://imgpuma-a.akamaihd.net/360x360/0163499WA1_1.jpg" },
      { src: "https://imgpuma-a.akamaihd.net/360x360/0163499WA1_2.jpg" }
    ],
    category: "Bolos",
    gender: "P",
    condition: "Entrega",
    brand: "Sensação",
    sizes: [],
    colors: ["#d62828", "#003049"],
    relatedProducts: [1, 2]
  },
  {
    id: 4,
    title: "Brownie de Doce de Leite",
    name: "Brownie sabor doce de leite",
    reference: "Ref. Brow1-BR",
    stars: 4.6,
    rating: 180,
    price: 249.99,
    priceDiscount: 179.99,
    description: "Brownie delicioso de doce de leite",
    image: browdocedeleite,
    images: [
      { src: browdocedeleite },
      { src: "https://imgnewbalance-a.akamaihd.net/360x360/0163500WA1_1.jpg" },
      { src: "https://imgnewbalance-a.akamaihd.net/360x360/0163500WA1_2.jpg" }
    ],
    category: "Brownies",
    gender: "M",
    condition: "Entrega",
    brand: "DoceDeLeite",
    sizes: [39, 40, 41, 42, 43],
    colors: ["#2b2d42", "#8d99ae"],
    relatedProducts: [1, 5]
  },
  {
    id: 5,
    title: "ChocoBrownie",
    name: "Brownie Sabor chocolate",
    reference: "Ref. Browc-BR",
    stars: 4.8,
    rating: 220,
    price: 399.99,
    priceDiscount: 299.99,
    description: "Brownie inrresistivel de Chocolate",
    image: chocobrow,
    images: [
      { src: chocobrow },
      { src: "https://imgasics-a.akamaihd.net/360x360/0163501WA1_1.jpg" },
      { src: "https://imgasics-a.akamaihd.net/360x360/0163501WA1_2.jpg" }
    ],
    category: "Brownies",
    gender: "M",
    condition: "Entrega",
    brand: "Chocolate",
    sizes: [37, 39, 41, 43],
    colors: ["#264653", "#e76f51"],
    relatedProducts: [4, 6]
  },
  {
    id: 6,
    title: "Brownie de Pistache",
    name: "Brownie Sabor pistache",
    reference: "Ref. Browpi-BR",
    stars: 4.4,
    rating: 170,
    price: 229.99,
    priceDiscount: 169.99,
    description: "Um maravilhoso Brownie Sabor pistache",
    image: browpistache,
    images: [
      { src: browpistache},
      { src: "https://imgreebok-a.akamaihd.net/360x360/0163502WA1_1.jpg" },
      { src: "https://imgreebok-a.akamaihd.net/360x360/0163502WA1_2.jpg" }
    ],
    category: "Brownies",
    gender: "M",
    condition: "Entrega",
    brand: "Pistache",
    sizes: [36, 38, 40, 42],
    colors: ["#f5f3f4", "#22223b"],
    relatedProducts: [5, 7]
  },
  {
    id: 7,
    title: "Cone Trufado Ninho com Nutela",
    name: "Cone Trufado Sabor Ninho com nutela",
    reference: "Ref. Conenn-BR",
    stars: 4.5,
    rating: 190,
    price: 199.99,
    priceDiscount: 149.99,
    description: "Um cone",
    image: conenut,
    images: [
      { src: conenut },
      { src: "https://imgvans-a.akamaihd.net/360x360/0163503WA1_1.jpg" },
      { src: "https://imgvans-a.akamaihd.net/360x360/0163503WA1_2.jpg" }
    ],
    category: "Cones Trufados",
    gender: "M",
    condition: "Entrega",
    brand: "Nutela",
    sizes: [35, 37, 39, 41],
    colors: ["#000000", "#ffffff", "#ff595e"],
    relatedProducts: [6, 8]
  },
  {
    id: 8,
    title: "Cone Trufado de Chocolate Branco",
    name: "Cone sabor Chocolate Branco",
    reference: "Ref. COneB-BR",
    stars: 4.6,
    rating: 210,
    price: 179.99,
    priceDiscount: 139.99,
    description: "Seu delecioso Cone Trufado Agora no sabor de Chocolate Branco",
    image: conebranco,
    images: [
      { src: conebranco },
      { src: "https://imgconverse-a.akamaihd.net/360x360/0163504WA1_1.jpg" },
      { src: "https://imgconverse-a.akamaihd.net/360x360/0163504WA1_2.jpg" }
    ],
    category: "Cones Trufados",
    gender: "M",
    condition: "Entrega",
    brand: "ChocoBranco",
    sizes: [36, 37, 38, 39, 40],
    colors: ["#ffffff", "#000000", "#e63946"],
    relatedProducts: [7]
  },
  {
    id: 9,
    title: "DinDin Gourmet",
    name: "DinDin Gourmet sabor uva",
    reference: "Ref. Uvadin-BR",
    stars: 4.9,
    rating: 95,
    price: 179.99,
    priceDiscount: 29.99,
    description: "Venha experimentar Nosso DinDin Gourmet",
    image: dindin,
    images: [
        { src: dindin },
        { src: "https://exemplo.com/camisa_costas.jpg" },
        { src: "https://exemplo.com/camisa_detalhe.jpg" }
    ],
    category: "Dindins",
    gender: "P",
    condition: "Retirar",
    brand: "Uva",
    sizes: ["P", "M", "G", "GG"],
    colors: ["#000000"],
    relatedProducts: [10, 11]
  },
  {
    id: 10,
    title: "Delicia De Uva",
    name: "Delicia De Uva",
    reference: "Ref. deliu-BR",
    stars: 4.7,
    rating: 110,
    price: 400.00,
    priceDiscount: 349.99,
    description: "Mravilhosa sobremesa sabor uva",
    image: sobreuva,
    images: [
        { src: "https://oqvestir.fbitsstatic.net/img/p/calca-feminina-mom-jeans-azul-178657/463134.jpg?w=1600&h=2133&v=202501231556" },
        { src: "https://exemplo.com/calca_costas.jpg" },
        { src: "https://exemplo.com/calca_detalhe.jpg" }
    ],
    category: "Sobremesas",
    gender: "G",
    condition: "Retirar",
    brand: "Uva",
    sizes: [36, 38, 40, 42, 44],
    colors: ["#89c2d9"],
    relatedProducts: [9, 7]
  },
  {
    id: 11,
    title: "Pavê de chocolate",
    name: "Pavê Delicia",
    reference: "Ref. pav-BR",
    stars: 4.8,
    rating: 350,
    price: 89.90,
    priceDiscount: 69.90,
    description: pave,
    image: pave,
    images: [
        { src: pave },
        { src: "https://exemplo.com/bone_lado.jpg" },
        { src: "https://exemplo.com/bone_tras.jpg" }
    ],
    category: "Sobremesas",
    gender: "G",
    condition: "Retirar",
    brand: "Chocolate",
    sizes: ["Único"],
    colors: ["#d62828"],
    relatedProducts: [9, 12]
  },
  {
    id: 12,
    title: "Headphone JBL",
    name: "Headphone JBL Tune 520BT",
    reference: "Ref. JBL-T520-BR",
    stars: 4.9,
    rating: 540,
    price: 299.00,
    priceDiscount: 249.00,
    description: "Headphone on-ear sem fio JBL Tune 520BT com tecnologia Bluetooth 5.3, som JBL Pure Bass e bateria de longa duração.",
    image: brigadeiro,
    images: [
        { src: "https://m.media-amazon.com/images/I/61BDf8KO8AL.__AC_SX300_SY300_QL70_ML2_.jpg" },
        { src: "https://exemplo.com/headphone_lado.jpg" },
        { src: "https://exemplo.com/headphone_dobrado.jpg" }
    ],
    category: "Headphones",
    gender: "Unissex",
    condition: "Novo",
    brand: "JBL",
    sizes: ["N/A"],
    colors: ["#000000", "#FFFFFF", "#0077b6"],
    relatedProducts: [11, 2]
  }
];
