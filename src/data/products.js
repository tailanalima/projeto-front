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
import bolonn1 from '../assets/fotos/boloninhocomnutela1.jpg';
import brigadeiro from '../assets/fotos/brigadeironopote.jpg';
import bolonn2 from '../assets/fotos/boloninhocomnutela2.jpg';
import bolopistache1 from "../assets/fotos/bolopistache1.jpg";
import bolopistache2 from "../assets/fotos/bolopistache2.jpg";
import bolopistache3 from "../assets/fotos/bolopistache3.jpg";
import bolosensacao1 from '../assets/fotos/bolosensacao1.jpg';
import bolosensacao2 from '../assets/fotos/bolosensacao2.jpg';
import bolosensacao4 from '../assets/fotos/bolosensacao4.jpg';
import browdocedeleite1 from '../assets/fotos/browniedocedeleite1.jpg';
import browdocedeleite2 from '../assets/fotos/brownieocedeleite2.jpg';
import chocobrow1 from '../assets/fotos/chocobrownie1.jpg';
import chocobrow2 from '../assets/fotos/chocobrownie2.jpg';
import browpistache2 from '../assets/fotos/browniepistache2.jpg';
import browpistache5 from '../assets/fotos/browniepistache5.jpg';
import conenut1 from '../assets/fotos/coneninhocomnutela.jpg';
import conenut3 from '../assets/fotos/coneninhocomnutela3.jpg';
import conebranco1 from '../assets/fotos/conechocolatebranco1.jpg';
import conebranco3 from '../assets/fotos/conechocolatebranco3.jpg';
import dindin2 from "../assets/fotos/dindin2.jpg";
import dindin3 from "../assets/fotos/dindin3.jpg";
import sobreuva2 from '../assets/fotos/sobremesadeusa2.jpg';
import sobreuva3 from '../assets/fotos/sobremesadeuva3.jpg';
import pave2 from '../assets/fotos/pavedechocolate2.jpg';
import pave4 from '../assets/fotos/pavedechocolate4.jpg';
import brigadeiro1 from '../assets/fotos/brigadeironopote1.jpg';
import brigadeiro2 from '../assets/fotos/brigadeironopote4.jpg';


export const products = [
  {
    id: 1,
    title: "Bolo de pote de ninho com Nutella",
    name: "Bolo de pote de ninho com nutella",
    reference: "Ref. bolo270-BR",
    stars: 4.5,
    rating: 128,
    price: 15.99,
    priceDiscount: 10.00,
    description: "Bolo bom e Gostoso.",
    image: bolonn,
    images: [
      { src: bolonn },
      { src: bolonn1 },
      { src: bolonn2 }
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
      { src: bolopistache1 },
      { src: bolopistache2 },
      { src: bolopistache3 }
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
      { src: bolosensacao1 },
      { src: bolosensacao2 },
      { src: bolosensacao4 }
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
    title: "Brownies de Doce de Leite",
    name: "Brownies sabor doce de leite",
    reference: "Ref. Brow1-BR",
    stars: 4.6,
    rating: 180,
    price: 13.99,
    priceDiscount: 7.00,
    description: "Brownie delicioso de doce de leite",
    image: browdocedeleite,
    images: [
      { src: browdocedeleite },
      { src: browdocedeleite1 },
      { src: browdocedeleite2 }
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
    title: "ChocoBrownies",
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
      { src: chocobrow1 },
      { src: chocobrow2 }
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
    title: "Brownies de Pistache",
    name: "Brownies Sabor pistache",
    reference: "Ref. Browpi-BR",
    stars: 4.4,
    rating: 170,
    price: 12.99,
    priceDiscount: 10.00,
    description: "Um maravilhoso Brownie Sabor pistache",
    image: browpistache,
    images: [
      { src: browpistache},
      { src: browpistache2 },
      { src: browpistache5 }
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
      { src: conenut1 },
      { src: conenut3 }
    ],
    category: "Conestrufados",
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
      { src: conebranco1 },
      { src: conebranco3 }
    ],
    category: "Conestrufados",
    gender: "M",
    condition: "Entrega",
    brand: "ChocoBranco",
    sizes: ["M"],
    relatedProducts: [7]
  },
  {
    id: 9,
    title: "Dindins Gourmet",
    name: "Dindins Gourmet sabor uva",
    reference: "Ref. Uvadin-BR",
    stars: 4.9,
    rating: 95,
    price: 5.00,
    priceDiscount: 2.50,
    description: "Venha experimentar Nosso DinDin Gourmet",
    image: dindin,
    images: [
        { src: dindin },
        { src: dindin2 },
        { src: dindin3 }
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
        { src: sobreuva2 },
        { src: sobreuva3 }
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
        { src: pave2 },
        { src: pave4 }
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
    name: "Brigadeiro de Morango",
    reference: "Ref. bbm-BR",
    stars: 4.9,
    rating: 540,
    price: 5.00,
    priceDiscount: 4.00,
    description: "Brigadeiro deliciocio sabor morango",
    image: brigadeiro,
    images: [
        { src: brigadeiro },
        { src: brigadeiro1 },
        { src: brigadeiro2 }
    ],
    category: "Sobremesas",
    gender: "P",
    condition: "Entrega",
    brand: "Morango",
    sizes: ["Unico"],
    relatedProducts: [10, 11]
  }
];
