import { type FC } from 'react';
import { Link } from 'react-router-dom';

interface Product {
  id: string;
  name: string;
  price: number;
  catygory: string;
}

interface ProductsProps {
  products: Product[];
}

const Products: FC<ProductsProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 px-4 max-w-6xl mx-auto">
      {products.map(product => (
        <Link
          to={`/product/${product.id}`}
          key={product.id}
          className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition transform hover:scale-105 mx-md max-w-xs"
        >
          <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
          <div className='flex justify-center mb-2'>
            <img 
              src='/images/religion.png'
              alt={product.name}
              className="w-20 h-20 rounded shadow mt-3"
            />
          </div>
          <p className="text-pink-600 font-bold">{product.price}$</p>
          <p className="text-pink-400 font-bold">#{product.catygory}</p>
        </Link>
      ))}
    </div>
  );
};

export default Products;
