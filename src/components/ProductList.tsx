import { useEffect, useState } from 'react';
import { ProductCard } from './ProductCard';
import { FilterBar } from './FilterBar'; // Importamos el nuevo componente
import type { Product } from '../types';
import { PRODUCTS } from '../data/products';

export const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  
  // ESTADOS PARA FILTROS
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('Todas');

/*   useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []); */

  useEffect(() => {
  // En lugar de fetch, simplemente cargamos los datos locales
  setProducts(PRODUCTS);
  setLoading(false);
}, []);

  // LÓGICA DE FILTRADO
  const filteredProducts = products.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === 'Todas' || p.category === category;
    return matchesSearch && matchesCategory;
  });

  if (loading) return <div className="text-center py-20 font-bold">Cargando...</div>;

  return (
    <div className="bg-gray-50 min-h-screen">
      <FilterBar 
        search={search} 
        setSearch={setSearch} 
        category={category} 
        setCategory={setCategory} 
      />

      <section className="max-w-7xl mx-auto px-4 py-10">
        <p className="mb-4 text-gray-500 text-sm">
          Mostrando {filteredProducts.length} productos
        </p>
        
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl shadow-sm border">
            <p className="text-gray-400 text-lg italic">No se encontraron productos que coincidan.</p>
          </div>
        )}
      </section>
    </div>
  );
};