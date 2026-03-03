import type { Product } from '../types';
import { useCartStore } from '../store/useCartStore';
import { toast } from 'react-hot-toast'; // Importación lista

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const addToCart = useCartStore((state) => state.addToCart);

  // Función para manejar el clic con feedback
  const handleAdd = () => {
    addToCart(product);
    
    // Notificación personalizada
    toast.success(`${product.name} añadido`, {
      icon: '🛒',
      style: {
        borderRadius: '12px',
        background: '#1e293b', // Slate-900 para combinar con tu botón
        color: '#fff',
        fontWeight: '600'
      },
    });
  };

  return (
    <div className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
      {/* Contenedor de Imagen */}
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg shadow-sm">
          <span className="text-sm font-bold text-indigo-600">${product.price}</span>
        </div>
      </div>

      {/* Contenido de Texto */}
      <div className="p-5">
        <span className="text-xs font-semibold text-indigo-500 uppercase tracking-wider">
          {product.category}
        </span>
        <h3 className="text-lg font-bold text-gray-800 mt-1 line-clamp-1">
          {product.name}
        </h3>
        <p className="text-gray-500 text-sm mt-2 line-clamp-2 h-10">
          {product.description}
        </p>

        {/* Botón de Acción con handleAdd */}
        <button
          onClick={handleAdd}
          className="mt-5 w-full bg-slate-900 text-white py-3 rounded-lg font-semibold 
                     hover:bg-indigo-600 active:scale-95 transition-all flex justify-center items-center gap-2 shadow-md shadow-slate-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          Añadir al carrito
        </button>
      </div>
    </div>
  );
};