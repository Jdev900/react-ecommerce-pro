import { useCartStore } from '../store/useCartStore';
import { ShoppingCart } from 'lucide-react';

// 1. Definimos la interfaz para que TypeScript sepa qué props esperar
interface NavbarProps {
  onOpenCart: () => void;
}

// 2. Desestructuramos onOpenCart de las props
export const Navbar = ({ onOpenCart }: NavbarProps) => {
  const cartItemsCount = useCartStore((state) => state.cart.length);

  return (
    <nav className="sticky top-0 bg-white border-b z-50 px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-indigo-600">DevStore</h1>
      
      {/* 3. Agregamos el onClick aquí para llamar a la función que abre el carrito */}
      <div 
        onClick={onOpenCart} 
        className="relative cursor-pointer hover:text-indigo-600 transition-colors p-2 rounded-full hover:bg-gray-100"
      >
        <ShoppingCart className="w-8 h-8" /> 
        {cartItemsCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full">
            {cartItemsCount}
          </span>
        )}
      </div>
    </nav>
  );
};