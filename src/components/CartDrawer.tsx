import { useCartStore } from '../store/useCartStore';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { toast } from 'react-hot-toast'; // Importamos toast

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartDrawer = ({ isOpen, onClose }: CartDrawerProps) => {
  const { cart, addToCart, removeFromCart, removeItem, clearCart } = useCartStore();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // --- LÓGICA DE CHECKOUT VISUAL ---
  const handleFinishPurchase = () => {
    if (cart.length === 0) return;

    // 1. Feedback visual
    toast.success('¡Pedido recibido! Gracias por tu compra.', {
      duration: 4000,
      position: 'top-center',
      icon: '✅',
      style: {
        background: '#10b981',
        color: '#fff',
        fontWeight: 'bold',
        borderRadius: '12px'
      }
    });

    // 2. Limpieza de estado
    clearCart();
    
    // 3. Cierre automático del panel
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      
      <div className="absolute inset-y-0 right-0 max-w-full flex">
        <div className="w-screen max-w-md bg-white shadow-xl flex flex-col">
          <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
            <div className="flex items-start justify-between border-b pb-4">
              <h2 className="text-xl font-bold text-gray-900">Tu Carrito</h2>
              <button onClick={onClose} className="text-gray-400 hover:text-gray-500 p-2">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="mt-8">
              {cart.length === 0 ? (
                <div className="text-center py-20">
                  <p className="text-gray-500 text-lg italic">El carrito está vacío 🛒</p>
                </div>
              ) : (
                <ul className="divide-y divide-gray-200">
                  {cart.map((item) => (
                    <li key={item.id} className="py-6 flex">
                      <div className="flex-shrink-0 w-24 h-24 border rounded-md overflow-hidden bg-gray-50">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      
                      <div className="ml-4 flex-1 flex flex-col">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3 className="font-bold">{item.name}</h3>
                          <button 
                            onClick={() => removeItem(item.id)}
                            className="text-gray-300 hover:text-red-500 transition-colors p-1"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                        
                        <p className="mt-1 text-sm text-indigo-600 font-semibold">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>

                        <div className="flex-1 flex items-end justify-between text-sm">
                          <div className="flex items-center gap-3 border rounded-lg px-2 py-1 bg-gray-50">
                            <button 
                              onClick={() => removeFromCart(item.id)} 
                              disabled={item.quantity === 1}
                              className="text-gray-500 hover:text-red-500 disabled:opacity-20 px-1 transition-colors"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            
                            <span className="font-bold text-gray-700 w-4 text-center">{item.quantity}</span>
                            
                            <button 
                              onClick={() => addToCart(item)} 
                              className="text-gray-500 hover:text-green-600 px-1 transition-colors"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Footer del Carrito */}
          <div className="border-t border-gray-200 py-6 px-4 sm:px-6 bg-gray-50">
            <div className="flex justify-between text-base font-bold text-gray-900 mb-6">
              <p>Total estimado</p>
              <p className="text-xl text-indigo-600">${total.toFixed(2)}</p>
            </div>
            
            <button 
              onClick={handleFinishPurchase}
              disabled={cart.length === 0}
              className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Finalizar Compra
            </button>
            
            {cart.length > 0 && (
              <button 
                onClick={clearCart}
                className="mt-4 w-full text-center text-xs text-gray-400 hover:text-red-500 transition-colors uppercase tracking-widest font-semibold"
              >
                Vaciar carrito completo
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};