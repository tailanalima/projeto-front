import logo from "../assets/fotos/logo.jpg"
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#111] text-white px-6 md:px-20 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        <div>
          <img src={logo} alt="Imperio doces Logo" className="h-8 mb-4" />
          <p className="text-sm text-gray-400 mb-4">
            "Onde cada receita é feita para transformar pequenos momentos em grandes alegrias.”
          </p>
         <div className="flex space-x-4">
  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
    <FaFacebookF className="text-white hover:text-pink-600 cursor-pointer" />
  </a>

  <a 
    href="https://www.instagram.com/imperio.doces.f_e?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <FaInstagram className="text-white hover:text-pink-600 cursor-pointer" />
  </a>

  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
    <FaTwitter className="text-white hover:text-pink-600 cursor-pointer" />
  </a>
</div>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Informação</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#">Sobre Império Doces</a></li>
            <li><a href="#">Segurança</a></li>
            <li><a href="#">Wishlist</a></li>
      
            <li><a href="#">Trabalhe conosco</a></li>
            <li><a href="#">Meus Pedidos</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Categorias</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#">Bolos</a></li>
            <li><a href="#">Brownies</a></li>
            <li><a href="#">Dindins</a></li>
            <li><a href="#">Cones Trufados</a></li>
            <li><a href="#">Sobremesas</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Contato</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Rua Expedito de Brito,18 - São Joaquim, Umirim - CE, Brasil
          </p>
          <p className="text-sm text-gray-400 mt-2">(85) 981169050</p>
        </div>
      </div>.

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-xs text-gray-500">
        © 2026 Império Doces
      </div>
    </footer>
  );
};

export default Footer;