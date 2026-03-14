import { useNavigate } from 'react-router-dom';

const ProdutoEsgotado = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 bg-purple-50">
      <div className="text-8xl mb-4">🥺</div>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Poxa, esgotou!</h1>
      <p className="text-gray-500 mb-8 max-w-md">
        Esse doce faz muito sucesso e acabou saindo rápido demais. Mas não fique triste, temos outras delícias esperando por você!
      </p>
      
      {/* O navigate(-1) volta para a página anterior do histórico */}
      <button 
        onClick={() => navigate(-1)} 
        className="bg-pink-600 text-white font-semibold px-8 py-3 rounded-md hover:bg-pink-700 transition shadow-lg"
      >
        Voltar e ver mais doces
      </button>
    </div>
  );
};

export default ProdutoEsgotado;