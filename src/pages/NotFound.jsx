import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-6xl font-bold text-pink-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Página em construção!</h2>
      <p className="text-gray-500 mb-8">Opa! Ainda estamos preparando essa parte do Império Doces.</p>
      <Link to="/" className="bg-pink-600 text-white px-6 py-2 rounded-md hover:bg-pink-700 transition">
        Voltar para o Início
      </Link>
    </div>
  );
};

export default NotFound;