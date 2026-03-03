// src/App.tsx

import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { ProductList } from './components/ProductList';
import { CartDrawer } from './components/CartDrawer';
import { Toaster } from 'react-hot-toast';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="bottom-right" reverseOrder={false} />
      <Navbar onOpenCart={() => setIsCartOpen(true)} />
      <ProductList />
      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
      />
    </div>
  );
}

export default App;