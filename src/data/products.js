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
    price: 15.99,
    priceDiscount: 10.00,
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
    brand: "Ninho+Nutela",
    sizes: ["P"],
    relatedProducts: [2, 3]
  },
  {
    id: 2,
    title: "Bolo de Pote de Pistache",
    name: "Bolo de Pistache",
    reference: "Ref. Bolo271-BR",
    stars: 4.7,
    rating: 200,
    price: 15.99,
    priceDiscount: 9.99,
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
    sizes: ["P"],
    relatedProducts: [1, 3]
  },
  {
    id: 3,
    title: "Bolo de pote sensação",
    name: "Bolo Sabor Sensação",
    reference: "Ref. Bolo272-BR",
    stars: 4.3,
    rating: 150,
    price: 15.99,
    priceDiscount: 10.00,
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
    sizes: ["P"],
    relatedProducts: [1, 2]
  },
  {
    id: 4,
    title: "Brownie de Doce de Leite",
    name: "Brownie sabor doce de leite",
    reference: "Ref. Brow1-BR",
    stars: 4.6,
    rating: 180,
    price: 13.99,
    priceDiscount: 7.00,
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
    sizes: ["M"],
    relatedProducts: [5, 6]
  },
  {
    id: 5,
    title: "ChocoBrownie",
    name: "Brownie Sabor chocolate",
    reference: "Ref. Browc-BR",
    stars: 4.8,
    rating: 220,
    price: 10.00,
    priceDiscount: 8.00,
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
    sizes: ["M"],
    relatedProducts: [4, 6]
  },
  {
    id: 6,
    title: "Brownie de Pistache",
    name: "Brownie Sabor pistache",
    reference: "Ref. Browpi-BR",
    stars: 4.4,
    rating: 170,
    price: 12.99,
    priceDiscount: 10.00,
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
    sizes: ["M"],
    relatedProducts: [4, 5]
  },
  {
    id: 7,
    title: "Cone Trufado Ninho com Nutela",
    name: "Cone Trufado Sabor Ninho com nutela",
    reference: "Ref. Conenn-BR",
    stars: 4.5,
    rating: 190,
    price: 12.99,
    priceDiscount: 10.00,
    description: "Um cone",
    image: conenut,
    images: [
      { src: conenut },
      { src: "https://imgvans-a.akamaihd.net/360x360/0163503WA1_1.jpg" },
      { src: "https://imgvans-a.akamaihd.net/360x360/0163503WA1_2.jpg" }
    ],
    category: "ConesTrufados",
    gender: "M",
    condition: "Entrega",
    brand: "Ninho+Nutela",
    sizes: ["M"],
    relatedProducts: [8]
  },
  {
    id: 8,
    title: "Cone Trufado de Chocolate Branco",
    name: "Cone sabor Chocolate Branco",
    reference: "Ref. COneB-BR",
    stars: 4.6,
    rating: 210,
    price: 10.00,
    priceDiscount: 8.00,
    description: "Seu delecioso Cone Trufado Agora no sabor de Chocolate Branco",
    image: conebranco,
    images: [
      { src: conebranco },
      { src: "https://imgconverse-a.akamaihd.net/360x360/0163504WA1_1.jpg" },
      { src: "https://imgconverse-a.akamaihd.net/360x360/0163504WA1_2.jpg" }
    ],
    category: "ConesTrufados",
    gender: "M",
    condition: "Entrega",
    brand: "ChocoBranco",
    sizes: ["M"],
    relatedProducts: [7]
  },
  {
    id: 9,
    title: "DinDin Gourmet",
    name: "DinDin Gourmet sabor uva",
    reference: "Ref. Uvadin-BR",
    stars: 4.9,
    rating: 95,
    price: 5.00,
    priceDiscount: 2.50,
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
    sizes: ["P"],
    relatedProducts: [10, 11]
  },
  {
    id: 10,
    title: "Delicia De Uva",
    name: "Delicia De Uva",
    reference: "Ref. deliu-BR",
    stars: 4.7,
    rating: 110,
    price: 69.99,
    priceDiscount: 50.00 ,
    description: "Mravilhosa sobremesa sabor uva",
    image: sobreuva,
    images: [
        { src: sobreuva },
        { src: "https://exemplo.com/calca_costas.jpg" },
        { src: "https://exemplo.com/calca_detalhe.jpg" }
    ],
    category: "Sobremesas",
    gender: "G",
    condition: "Retirar",
    brand: "Uva",
    sizes: ["G"],
    relatedProducts: [11, 12]
  },
  {
    id: 11,
    title: "Pavê de chocolate",
    name: "Pavê Delicia",
    reference: "Ref. pav-BR",
    stars: 4.8,
    rating: 350,
    price: 14.99,
    priceDiscount: 10.00,
    description: "Maravilho pave para comer com a familia",
    image: pave,
    images: [
        { src: pave },
        { src: "https://exemplo.com/bone_lado.jpg" },
        { src: "https://exemplo.com/bone_tras.jpg" }
    ],
    category: "Sobremesas",
    gender: "M",
    condition: "Retirar",
    brand: "Chocolate",
    sizes: ["M"],
    relatedProducts: [10, 12]
  },
  {
    id: 12,
    title: "Brigadeiro de Morango",
    name: "Bricadeiro de Morango",
    reference: "Ref. bbm-BR",
    stars: 4.9,
    rating: 540,
    price: 5.00,
    priceDiscount: 4.00,
    description: "Brigadeiro deliciocio sabor morango",
    image: brigadeiro,
    images: [
        { src: brigadeiro },
        { src: "https://exemplo.com/headphone_lado.jpg" },
        { src: "https://exemplo.com/headphone_dobrado.jpg" }
    ],
    category: "Sobremesas",
    gender: "P",
    condition: "Entrega",
    brand: "Morango",
    sizes: ["Unico"],
    relatedProducts: [10, 11]
  }
];
