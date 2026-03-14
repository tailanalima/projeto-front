import { Link } from 'react-router-dom';
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
  <h3 className="font-semibold mb-4 text-white">Informação</h3>
  <ul className="space-y-2 text-sm text-gray-400">
    <li><Link to="/sobre" className="hover:text-pink-600 transition">Sobre Império Doces</Link></li>
    <li><Link to="/seguranca" className="hover:text-pink-600 transition">Segurança</Link></li>
    <li><Link to="/wishlist" className="hover:text-pink-600 transition">Wishlist</Link></li>
    <li><Link to="/trabalhe-conosco" className="hover:text-pink-600 transition">Trabalhe conosco</Link></li>
    <li><Link to="/pedidos" className="hover:text-pink-600 transition">Meus Pedidos</Link></li>
  </ul>
</div>

        <div>
  <h3 className="font-semibold mb-4 text-white">Categorias</h3>
  <ul className="space-y-2 text-sm text-gray-400">
    {/* O "to" deve bater exatamente com os nomes que você definiu no array de categorias */}
    <li>
      <Link to="/produtos?categoria=Bolos" className="hover:text-pink-600 transition">
        Bolos
      </Link>
    </li>
    <li>
      <Link to="/produtos?categoria=Brownies" className="hover:text-pink-600 transition">
        Brownies
      </Link>
    </li>
    <li>
      <Link to="/produtos?categoria=Dindins" className="hover:text-pink-600 transition">
        Dindins
      </Link>
    </li>
    <li>
      <Link to="/produtos?categoria=ConesTrufados" className="hover:text-pink-600 transition">
        Conestrufados
      </Link>
    </li>
    <li>
      <Link to="/produtos?categoria=Sobremesas" className="hover:text-pink-600 transition">
        Sobremesas
      </Link>
    </li>
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